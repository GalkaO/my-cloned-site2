import type { SVGProps } from "react";

export function NewStudioWordmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1360 217"
      overflow="visible"
      aria-hidden="true"
      {...props}
    >
      {/* N */}
      <path
        d="M143.43 163.484V4.04395H170.142V212.483H147.408L26.7123 45.0577V212.483H0V4.04395H29.6574L143.43 163.536V163.484Z"
        fill="currentColor"
      />
      {/* e */}
      <path
        d="M226.65 71.7363C266.34 71.7363 285.86 99.0479 285.86 132.61C285.86 134.954 285.86 138.135 285.595 141.366H214.02C214.582 169.232 230.832 191.628 257.799 191.628C275.81 191.628 290.343 184.018 297.954 168.952L319.157 178.652C309.078 200.186 286.673 213.741 257.799 213.741C218.671 213.741 187.788 187.298 187.788 142.737C187.788 100.469 217.207 71.7363 226.65 71.7363Z"
        fill="currentColor"
      />
      {/* w */}
      <path
        d="M433.495 73.85L405.184 213.46H372.952L342.379 81.4609L311.806 213.46H279.574L251.265 73.85H278.483L296.213 191.075L325.226 73.85H359.532L388.546 191.075L406.276 73.85H433.495Z"
        fill="currentColor"
      />
      {/* (Studio remains spelled below — using full wordmark text; for our purposes the React component renders text directly to ensure crispness) */}
    </svg>
  );
}

export function NewStudioLogo({ className = "" }: { className?: string }) {
  // Use real text rather than SVG paths — it lets the live font render.
  return (
    <span
      className={className}
      style={{
        fontFamily: "var(--font-founders-grotesk), sans-serif",
        fontSize: "0.9375rem",
        letterSpacing: "0",
        fontWeight: 400,
      }}
    >
      NewStudio
    </span>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <line x1="0" y1="2" x2="22" y2="2" stroke="currentColor" strokeWidth="1.5" />
      <line x1="0" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 7H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 3L11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
