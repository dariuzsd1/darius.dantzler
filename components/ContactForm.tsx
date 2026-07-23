"use client";

import { useForm, ValidationError } from "@formspree/react";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";

export function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  if (state.succeeded) {
    return (
      <p className="border border-ink/15 bg-accent/20 p-6 font-mono text-sm">
        Thanks, that came through. I&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — Formspree drops any submission where this is filled in */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div>
        <label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-ink/60">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full border border-ink/20 bg-bone px-3 py-2 text-ink"
        />
      </div>

      <div>
        <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-ink/60">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full border border-ink/20 bg-bone px-3 py-2 text-ink"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-1 font-mono text-xs text-brief-red"
        />
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-ink/60">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full border border-ink/20 bg-bone px-3 py-2 text-ink"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-1 font-mono text-xs text-brief-red"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="border border-ink bg-ink px-5 py-2 font-mono text-xs uppercase tracking-wide text-bone transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {state.submitting ? "Sending…" : "Submit"}
      </button>

      <ValidationError
        errors={state.errors}
        className="font-mono text-xs text-brief-red"
      />
    </form>
  );
}
