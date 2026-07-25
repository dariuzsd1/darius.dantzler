import { Button } from "darius-dantzler-design-system";

export function Solid() {
  return <Button variant="solid">View my experience</Button>;
}

export function Outline() {
  return <Button variant="outline">Get in touch</Button>;
}

export function AsLink() {
  return (
    <Button href="/cv/resume.pdf" variant="solid">
      Download CV
    </Button>
  );
}

export function Disabled() {
  return (
    <Button variant="solid" disabled>
      Sending…
    </Button>
  );
}
