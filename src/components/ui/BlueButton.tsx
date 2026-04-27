"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

type BlueButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  showArrow?: boolean;
};

const MAGNET_STRENGTH = 0.18;

export function BlueButton({
  href,
  children,
  className,
  external,
  showArrow = true,
}: BlueButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    el.style.translate = `${dx * MAGNET_STRENGTH}px ${dy * MAGNET_STRENGTH}px`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.translate = "0 0";
  };

  const sharedProps = {
    ref,
    onMouseMove,
    onMouseLeave,
    className: cn("btn-blue", className),
    style: { transitionProperty: "transform, box-shadow, translate" },
  };

  const inner = (
    <>
      <span className="btn-label">{children}</span>
      {showArrow && <ArrowRightIcon className="btn-arrow size-4" />}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...sharedProps}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} {...sharedProps}>
      {inner}
    </Link>
  );
}
