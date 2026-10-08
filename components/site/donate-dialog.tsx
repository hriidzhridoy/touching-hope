"use client";

import * as React from "react";
import { Check, Copy, Heart, Smartphone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DONATE_EVENT,
  DONATION_AMOUNTS,
  ZELLE_EMAIL,
  ZELLE_RECIPIENT,
  copyText,
  launchZelleApp,
} from "@/lib/donate";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3;

export function DonateDialog() {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState<Step>(1);
  const [amount, setAmount] = React.useState<number | null>(50);
  const [custom, setCustom] = React.useState("");
  const [copied, setCopied] = React.useState(false);
  const [desktopHint, setDesktopHint] = React.useState(false);

  const close = React.useCallback(() => {
    setOpen(false);
    if (window.location.hash === "#donate") {
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  React.useEffect(() => {
    const show = () => {
      setStep(1);
      setDesktopHint(false);
      setOpen(true);
    };
    const onHash = () => {
      if (window.location.hash === "#donate") show();
    };
    onHash();
    window.addEventListener(DONATE_EVENT, show);
    window.addEventListener("hashchange", onHash);
    return () => {
      window.removeEventListener(DONATE_EVENT, show);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  async function handleCopy() {
    await copyText(ZELLE_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  async function handleOpenZelle() {
    await handleCopy();
    const launched = launchZelleApp();
    setDesktopHint(!launched);
  }

  if (!open) return null;

  const customValue = Number(custom);
  const finalAmount =
    custom && customValue > 0 ? customValue : amount ? amount : null;
  const amountLabel = finalAmount
    ? `$${finalAmount.toLocaleString("en-US", { maximumFractionDigits: 2 })}`
    : null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="donate-title"
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[95vh] w-full max-w-lg animate-in fade-in slide-in-from-bottom-6 overflow-y-auto rounded-t-3xl bg-sand-50 p-6 text-ink-700 shadow-2xl duration-300 sm:rounded-3xl sm:p-8"
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-leaf-900 hover:bg-leaf-100"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-5 flex gap-1.5 pr-10" aria-hidden>
          {[1, 2, 3].map((s) => (
            <span
              key={s}
              className={cn(
                "h-1.5 flex-1 rounded-full transition-colors duration-300",
                s <= step ? "bg-sun-600" : "bg-leaf-800/15"
              )}
            />
          ))}
        </div>

        {step === 1 && (
          <div key="s1" className="animate-in fade-in slide-in-from-right-4">
            <h2
              id="donate-title"
              className="text-2xl font-extrabold text-leaf-900"
            >
              How much would you like to give?
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              100% goes to Touching Hope Cares through Zelle &mdash; free and fast
              from your US bank account.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {DONATION_AMOUNTS.map((a) => (
                <button
                  key={a}
                  onClick={() => {
                    setAmount(a);
                    setCustom("");
                  }}
                  className={cn(
                    "h-14 rounded-2xl border-2 text-lg font-extrabold transition-all hover:-translate-y-0.5",
                    !custom && amount === a
                      ? "border-leaf-800 bg-leaf-800 text-sand-50 shadow-md"
                      : "border-leaf-800/20 bg-white text-leaf-900 hover:border-leaf-800"
                  )}
                >
                  ${a}
                </button>
              ))}
            </div>
            <div className="relative mt-3">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base font-bold">
                $
              </span>
              <input
                type="number"
                inputMode="decimal"
                min="1"
                placeholder="Other amount"
                value={custom}
                onChange={(e) => {
                  setCustom(e.target.value);
                  setAmount(null);
                }}
                className="h-12 w-full rounded-2xl border-2 border-leaf-800/20 bg-white pl-8 pr-4 text-base focus:border-leaf-800 focus:outline-none"
              />
            </div>

            <Button
              className="mt-6 w-full"
              disabled={!finalAmount}
              onClick={() => setStep(2)}
            >
              {amountLabel ? `Give ${amountLabel} with Zelle` : "Choose an amount"}
            </Button>
          </div>
        )}

        {step === 2 && (
          <div key="s2" className="animate-in fade-in slide-in-from-right-4">
            <h2
              id="donate-title"
              className="text-2xl font-extrabold text-leaf-900"
            >
              Send {amountLabel} with Zelle
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Tap the button &mdash; we&rsquo;ll copy our Zelle email and open
              Zelle on your phone. Just paste it as the recipient.
            </p>

            <Button
              size="lg"
              className="mt-5 w-full"
              onClick={handleOpenZelle}
            >
              <Smartphone className="h-5 w-5" />
              Open Zelle &amp; copy email
            </Button>

            <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-white p-4 ring-1 ring-leaf-800/15">
              <div className="min-w-0">
                <p className="text-xs text-ink-700/70">{ZELLE_RECIPIENT}</p>
                <p className="break-all text-base font-extrabold text-leaf-900">
                  {ZELLE_EMAIL}
                </p>
              </div>
              <Button size="sm" variant="primary" onClick={handleCopy}>
                {copied ? (
                  <>
                    <Check className="h-4 w-4" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" /> Copy
                  </>
                )}
              </Button>
            </div>

            {desktopHint && (
              <p className="mt-3 animate-in fade-in rounded-xl bg-sun-500/15 p-3 text-xs leading-relaxed">
                Email copied! On a computer, open your bank&rsquo;s app or
                website, choose <strong>Send Money with Zelle</strong>, and
                paste the email as the recipient.
              </p>
            )}

            <p className="mt-3 text-xs leading-relaxed text-ink-700/80">
              Using a bank app (Chase, Bank of America, Wells Fargo&hellip;)?
              Zelle is built in &mdash; open it, tap Send with Zelle, paste the
              email, enter {amountLabel}.
            </p>

            <div className="mt-6 flex gap-3">
              <Button variant="ghost" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button
                variant="primary"
                className="flex-1"
                onClick={() => setStep(3)}
              >
                I&rsquo;ve sent my gift
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div
            key="s3"
            className="animate-in fade-in zoom-in-95 text-center"
          >
            <div className="mx-auto flex h-16 w-16 animate-bounce items-center justify-center rounded-full bg-sun-500 text-leaf-950">
              <Heart className="h-8 w-8" fill="currentColor" />
            </div>
            <h2
              id="donate-title"
              className="mt-5 text-2xl font-extrabold text-leaf-900"
            >
              Thank you for touching lives!
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Your gift of {amountLabel} will help families in Los Cabos and El
              Pescadero. Want a receipt? Email us your name and the date of
              your gift.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild variant="outline">
                <a
                  href={`mailto:${ZELLE_EMAIL}?subject=Donation%20receipt%20request&body=Name:%0ADate:%0AAmount:%20${finalAmount ?? ""}`}
                >
                  Request a receipt
                </a>
              </Button>
              <Button onClick={close}>Close</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
