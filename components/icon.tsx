import type { IconName } from "@/content/types";
import { cn } from "@/lib/utils";

const paths: Record<IconName, React.ReactNode> = {
  shieldCheck: (
    <>
      <path d="M12 3l7 3v5c0 4.5-2.9 8.2-7 10-4.1-1.8-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  building: (
    <>
      <path d="M4 21h16" />
      <path d="M6 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16" />
      <path d="M14 9h4a1 1 0 0 1 1 1v11" />
      <path d="M9 8h1M9 12h1M9 16h1" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <circle cx="17" cy="10" r="2.2" />
      <path d="M16 20a5.5 5.5 0 0 1 5-5.4" />
    </>
  ),
  refresh: (
    <>
      <path d="M21 12a9 9 0 1 1-2.6-6.4" />
      <path d="M21 4v5h-5" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </>
  ),
  idCard: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <circle cx="8" cy="12" r="2" />
      <path d="M5.5 16.5a2.5 2.5 0 0 1 5 0" />
      <path d="M14 10h4M14 14h3" />
    </>
  ),
  fileCheck: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <path d="M9 14l2 2 4-4" />
    </>
  ),
  globalNetwork: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
    </>
  ),
  clipboardList: (
    <>
      <path d="M9 5H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12h6M9 16h6" />
    </>
  ),
  document: (
    <>
      <path d="M8 3h8l4 4v14H8z" />
      <path d="M16 3v4h4" />
      <path d="M11 12h5M11 16h5" />
    </>
  ),
  searchCheck: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4.3-4.3" />
      <path d="M8.5 11l2 2 3.5-3.5" />
    </>
  ),
  badgeCheck: (
    <>
      <path d="M12 2l2.2 1.7 2.8-.2 1 2.6 2.4 1.4-.6 2.7.6 2.7-2.4 1.4-1 2.6-2.8-.2L12 21l-2.2-1.7-2.8.2-1-2.6-2.4-1.4.6-2.7L3.6 7.5 6 6.1l1-2.6 2.8.2L12 2z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  check: <path d="M5 12l4 4 10-10" />,
  arrowRight: <path d="M4 12h16M13 5l7 7-7 7" />,
  chevronDown: <path d="M6 9l6 6 6-6" />,
  chevronRight: <path d="M9 6l6 6-6 6" />,
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  mapPin: (
    <>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </>
  ),
  quote: (
    <>
      <path d="M7 7h4v6H7zM13 11h4v6h-4z" />
      <path d="M11 13v4H7" />
    </>
  ),
};

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-6 w-6", className)}
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };