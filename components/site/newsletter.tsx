"use client";

import * as React from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <section id="newsletter" className="bg-sun-500 py-16">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="text-balance font-sans text-2xl font-extrabold text-white sm:text-3xl">
            Stay close to the story.
          </h2>
          <p className="max-w-md text-sm text-white/90">
            Get occasional updates on our programs and the new office opening
            in El Pescadero — no spam, just real progress.
          </p>

          {submitted ? (
            <p className="rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-leaf-800">
              Thank you — you&rsquo;re on the list! 🌿
            </p>
          ) : (
            <form
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <Input
                type="email"
                required
                placeholder="you@example.com"
                aria-label="Email address"
                className="flex-1 bg-white"
              />
              <Button type="submit" variant="primary" className="shrink-0">
                Subscribe
                <Send className="h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
