"use client";

import * as React from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { openDonate } from "@/lib/donate";

export function DonateButton({ onClick, ...props }: ButtonProps) {
  return (
    <Button
      {...props}
      onClick={(e) => {
        onClick?.(e);
        openDonate();
      }}
    />
  );
}
