import type { TextareaHTMLAttributes } from "react";
import "./TextInput.css";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Mono uppercase label rendered above the field. */
  label?: string;
}

/** A labeled multi-line text field, matching TextInput's bordered, mono-label style. */
export function Textarea({ label, id, rows = 5, ...rest }: TextareaProps) {
  return (
    <div className="dds-field">
      {label && (
        <label className="dds-field__label" htmlFor={id}>
          {label}
        </label>
      )}
      <textarea id={id} rows={rows} className="dds-field__control" {...rest} />
    </div>
  );
}
