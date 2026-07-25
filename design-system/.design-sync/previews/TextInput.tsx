import { TextInput } from "darius-dantzler-design-system";

export function Empty() {
  return <TextInput id="name" label="Name" placeholder="Jane Doe" />;
}

export function WithValue() {
  return <TextInput id="email" label="Email" type="email" defaultValue="jane@example.com" />;
}
