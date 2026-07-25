No provider or wrapper needed. Every component is self-contained: `import { Tag, Button, Card } from 'darius-dantzler-design-system'` and render directly, no theme context, no root provider to add. Styles ship automatically with the bundle.

## Styling idiom

Not a utility-class or prop-theming system. Each component ships its own hand-authored CSS with `dds-`-prefixed classes (BEM-ish: block, `block__element`, `block--modifier`). Style by using the components' typed props (`variant`, `padding`, etc.), not by passing class names. Real block names, for reference:

- `Tag`: `dds-tag`, modifiers `dds-tag--accent` / `dds-tag--outline`
- `Button`: `dds-button`, modifiers `dds-button--solid` / `dds-button--outline`
- `Card`: `dds-card`, modifiers `dds-card--default` / `dds-card--compact`
- `TextInput` / `Textarea` (share a style): `dds-field`, `dds-field__label`, `dds-field__control`
- `Tabs`: `dds-tabs`, `dds-tabs__item`, modifier `dds-tabs__item--active`
- `PageHeader`: `dds-page-header`, `__title`, `__dek`, `__rule`
- `Footer`: `dds-footer`, `dds-footer__inner`, `dds-footer__closing`
- `InfoCard`: `dds-info-card__label`, `__value`, `__detail`

Building new layout glue around these components (a page wrapper, custom spacing)? Use the real design tokens as CSS custom properties, not hardcoded hex or font values:

`--dds-color-bone` (#f5f3ec background), `--dds-color-ink` (#141414 text), `--dds-color-accent` (#f2c230, sparing use — tags and CTAs only), `--dds-color-brief-red` (#c1272d, reserved, not used by any shipped component), `--dds-font-serif` (Fraunces, headings), `--dds-font-sans` (Inter, body text), `--dds-font-mono` (IBM Plex Mono, labels/tags/dates).

## Where the truth lives

Read `styles.css` (the bound copy of this package's compiled stylesheet) before writing any custom CSS, it's the complete token and component stylesheet. Each component's own `.d.ts` is the authoritative prop contract.

## Example

```tsx
import { PageHeader, Card, Tag, Button } from 'darius-dantzler-design-system';

function ExamplePage() {
  return (
    <div>
      <PageHeader tag="Projects" title="Selected Work" dek="A few things I've shipped." />
      <Card>
        <Tag variant="outline">Team Project</Tag>
        <h2>Project Name</h2>
        <p>One line describing what it does.</p>
        <Button variant="solid">View project</Button>
      </Card>
    </div>
  );
}
```
