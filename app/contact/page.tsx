import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { readMdx } from "@/lib/mdx";
import { siteMeta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact, CV, and the ask.",
};

export default async function Contact() {
  const source = await readMdx("contact.mdx");

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <PageHeader tag="Contact" title="Get in Touch" />

      <div className="prose prose-lg max-w-2xl">
        <MDXRemote source={source} />
      </div>

      <div className="mt-8">
        <a
          href={siteMeta.cvPath}
          download
          className="inline-block border border-ink bg-ink px-5 py-2 font-mono text-xs uppercase tracking-wide text-bone transition-opacity hover:opacity-90"
        >
          Download CV
        </a>
      </div>

      <div className="mt-16 max-w-md">
        <h2 className="font-mono text-xs uppercase tracking-wide text-ink/50">Direct Contact</h2>
        <p className="mt-2">
          <a href={`mailto:${siteMeta.email}`} className="underline decoration-accent decoration-2">
            {siteMeta.email}
          </a>
        </p>

        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
