import { Textarea } from "darius-dantzler-design-system";

export function WithValue() {
  return (
    <Textarea
      id="message"
      label="Message"
      defaultValue="I'm looking for collaborators on a space policy research project..."
    />
  );
}

export function Empty() {
  return <Textarea id="notes" label="Notes" placeholder="Anything else worth mentioning?" />;
}
