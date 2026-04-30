import React from "react";

export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-4">
      <div className="h-px w-16 bg-border" />
      <svg width="16" height="16" viewBox="0 0 16 16" className="text-primary">
        <path
          d="M8 1C5.5 4 3 6 1 8c2 2 4.5 4 7 7 2.5-3 5-5 7-7-2-2-4.5-4-7-7z"
          fill="currentColor"
          opacity="0.6"
        />
      </svg>
      <div className="h-px w-16 bg-border" />
    </div>
  );
}