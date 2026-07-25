import type { InputHTMLAttributes } from "react";
import "./TextInput.css";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Mono uppercase label rendered above the field. */
  label?: string;
}

/** A labeled text input in the site's bordered, mono-label form field style. */
export function TextInput({ label, id, ...rest }: TextInputProps) {
  return (
    <div className="dds-field">
      {label && (
        <label className="dds-field__label" htmlFor={id}>
          {label}
        </label>
      )}
      <input id={id} className="dds-field__control" {...rest} />
    </div>
  );
}
