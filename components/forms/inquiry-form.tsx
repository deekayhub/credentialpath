"use client";

import { useState } from "react";
import { fieldDefinitions } from "@/content/site";
import type { InquiryPayload } from "@/content/types";
import type { InquiryField } from "@/content/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FormValues = Record<string, string | string[]>;

const emptyValues = (fields: InquiryField[]): FormValues => {
  const values: FormValues = {};
  for (const field of fields) {
    values[field.name] = field.type === "checkbox" ? [] : "";
  }
  return values;
};

export function InquiryForm({
  variant = "full",
  submitLabel = "Send Request",
}: {
  variant?: "full" | "short";
  submitLabel?: string;
}) {
  const fields = fieldDefinitions[variant];
  const [values, setValues] = useState<FormValues>(() => emptyValues(fields));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [formError, setFormError] = useState<string | null>(null);

  function setField(name: string, value: string | string[]) {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);
    setErrors({});

    const clientErrors: Record<string, string> = {};
    for (const field of fields) {
      if (
        "required" in field &&
        field.required &&
        !values[field.name]
      ) {
        clientErrors[field.name] = `Please enter your ${field.label.toLowerCase().replace(/^\w/, (c) => c.toLowerCase())}.`;
      }
    }
    if (clientErrors.fullName || !values.fullName) {
      clientErrors.fullName = clientErrors.fullName ?? "Please enter your name.";
    }
    if (!String(values.email ?? "").match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      clientErrors.email = "Please enter a valid email address.";
    }
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }

    const payload: InquiryPayload = {
      fullName: String(values.fullName ?? ""),
      email: String(values.email ?? ""),
      phone: strField(values.phone),
      organization: strField(values.organization),
      providerType: strField(values.providerType),
      specialty: strField(values.specialty),
      state: strField(values.state),
      services: Array.isArray(values.services) ? (values.services as string[]) : [],
      preferredContact: strField(values.preferredContact),
      message: strField(values.message),
    };

    setStatus("submitting");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.redirected || res.ok) {
        window.location.replace("/thank-you");
        return;
      }
      const data = (await res.json().catch(() => null)) as
        | { errors?: Record<string, string[]> }
        | null
        | undefined;
      if (data?.errors) {
        const flat: Record<string, string> = {};
        for (const [key, list] of Object.entries(data.errors)) {
          flat[key] = Array.isArray(list) ? list[0] : String(list);
        }
        setErrors(flat);
      } else {
        setFormError("Something went wrong on our end. Please try again in a moment.");
      }
      setStatus("error");
    } catch {
      setFormError("We couldn't submit your request. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-5">
      <p className="sr-only" aria-live="polite">
        {status === "submitting" ? "Submitting your request." : undefined}
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => renderField(field, values, errors, setField))}
      </div>

      {/* Honeypot — hidden from humans and assistive tech */}
      <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="company_website">Leave this field blank</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {formError && (
        <p className="rounded-lg border border-danger/30 bg-red-50 px-4 py-3 text-sm font-medium text-danger" role="alert">
          {formError}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        icon="arrowRight"
        iconRight
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </Button>
      <p className="text-xs leading-relaxed text-muted">
        By submitting, you agree we may contact you about your request. We never
        sell your information. Please do not include Social Security numbers or
        other sensitive identifiers.
      </p>
    </form>
  );
}

function strField(v: unknown): string | undefined {
  const s = typeof v === "string" ? v : "";
  return s.trim() ? s.trim() : undefined;
}

function renderField(
  field: InquiryField,
  values: FormValues,
  errors: Record<string, string>,
  onChange: (name: string, value: string | string[]) => void,
) {
  const value = values[field.name];
  const error = errors[field.name];

  const base = cn(
    "w-full rounded-lg border bg-white px-3.5 py-2.5 text-[0.9375rem] text-ink placeholder:text-muted/70 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/35",
    error ? "border-danger focus:border-danger" : "border-line focus:border-primary",
  );

  const label = (
    <span className="mb-1.5 block text-sm font-semibold text-ink">
      {field.label}
      {"required" in field && field.required && (
        <span className="text-primary" aria-hidden="true"> *</span>
      )}
    </span>
  );

  const errorText = error && (
    <p role="alert" className="mt-1.5 text-sm font-medium text-danger">
      {error}
    </p>
  );

  const fieldId = `field-${field.name}`;

  switch (field.type) {
    case "text":
    case "email":
    case "tel":
      return (
        <div key={field.name}>
          <label htmlFor={fieldId}>{label}</label>
          <input
            id={fieldId}
            name={field.name}
            type={field.type}
            required={"required" in field ? field.required : false}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
            maxLength={field.maxLength}
            value={String(value ?? "")}
            onChange={(e) => onChange(field.name, e.target.value)}
            aria-invalid={Boolean(error)}
            className={base}
          />
          {errorText}
        </div>
      );
    case "textarea":
      return (
        <div key={field.name} className="sm:col-span-2">
          <label htmlFor={fieldId}>{label}</label>
          <textarea
            id={fieldId}
            name={field.name}
            required={"required" in field ? field.required : false}
            placeholder={field.placeholder}
            maxLength={field.maxLength}
            rows={4}
            value={String(value ?? "")}
            onChange={(e) => onChange(field.name, e.target.value)}
            aria-invalid={Boolean(error)}
            className={cn(base, "resize-y")}
          />
          {errorText}
          {"helper" in field && field.helper && (
            <p className="mt-1.5 text-xs text-muted">{field.helper}</p>
          )}
        </div>
      );
    case "select":
      return (
        <div key={field.name}>
          <label htmlFor={fieldId}>{label}</label>
          <select
            id={fieldId}
            name={field.name}
            value={String(value ?? "")}
            onChange={(e) => onChange(field.name, e.target.value)}
            className={cn(base, "appearance-none bg-no-repeat pr-9")}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "1.1rem",
            }}
          >
            <option value="">{field.placeholder ?? "Select an option"}</option>
            {field.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errorText}
        </div>
      );
    case "checkbox":
      return (
        <fieldset key={field.name} className="sm:col-span-2">
          <legend className="mb-2 text-sm font-semibold text-ink">{field.label}</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {field.options.map((opt) => {
              const checked = Array.isArray(value) && value.includes(opt.value);
              return (
                <label
                  key={opt.value}
                  className={cn(
                    "flex cursor-pointer items-center gap-2.5 rounded-lg border bg-white px-3 py-2.5 text-sm text-ink transition-colors",
                    checked ? "border-primary bg-primary-light" : "border-line hover:border-primary/40",
                  )}
                >
                  <input
                    type="checkbox"
                    value={opt.value}
                    checked={checked}
                    onChange={(e) => {
                      const current = Array.isArray(value) ? (value as string[]) : [];
                      const next = e.target.checked
                        ? [...current, opt.value]
                        : current.filter((v) => v !== opt.value);
                      onChange(field.name, next);
                    }}
                    className="h-4 w-4 accent-primary"
                  />
                  {opt.label}
                </label>
              );
            })}
          </div>
          {errorText}
        </fieldset>
      );
    case "radio":
      return (
        <fieldset key={field.name} className="sm:col-span-2">
          <legend className="mb-2 text-sm font-semibold text-ink">{field.label}</legend>
          <div className="flex flex-wrap gap-2">
            {field.options.map((opt) => (
              <label
                key={opt.value}
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-lg border bg-white px-3.5 py-2.5 text-sm text-ink transition-colors",
                  value === opt.value
                    ? "border-primary bg-primary-light"
                    : "border-line hover:border-primary/40",
                )}
              >
                <input
                  type="radio"
                  name={field.name}
                  value={opt.value}
                  checked={value === opt.value}
                  onChange={() => onChange(field.name, opt.value)}
                  className="h-4 w-4 accent-primary"
                />
                {opt.label}
              </label>
            ))}
          </div>
          {errorText}
        </fieldset>
      );
  }
}