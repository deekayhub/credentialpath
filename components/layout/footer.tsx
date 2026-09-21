import Link from "next/link";
import { site, navigation } from "@/content/site";
import { Logo } from "@/components/layout/logo";
import { Icon } from "@/components/icon";
import { services } from "@/content/services";

export function Footer() {
  const year = new Date().getFullYear();
  const serviceLinks = services.map((s) => ({
    label: s.shortTitle,
    href: `/services/${s.slug}`,
  }));

  return (
    <footer className="bg-callout text-white">
      <div className="mx-auto w-full max-w-[72rem] px-5 py-14 sm:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Link href="/" aria-label="CredentialPath home">
              <Logo tone="light" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {site.tagline}. We manage the full credentialing lifecycle — data
              collection, documentation, payer enrollment, follow-up, and
              re-credentialing.
            </p>
          </div>

          <nav aria-label="Services">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/60">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/60">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className="text-white/80 transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/60">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${site.contactEmail}`} className="flex items-start gap-2.5 text-white/80 transition-colors hover:text-white">
                  <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" />
                  {site.contactEmail}
                </a>
              </li>
              {site.contactPhone && (
                <li>
                  <a href={`tel:${site.contactPhone.replace(/[^0-9+]/g, "")}`} className="flex items-start gap-2.5 text-white/80 transition-colors hover:text-white">
                    <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" />
                    {site.contactPhone}
                  </a>
                </li>
              )}
            </ul>
            <Link
              href="/request-credentialing"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-primary-light"
            >
              Request Credentialing
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy-policy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-white">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}