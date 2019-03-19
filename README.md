# Halo :angel:

Halo is our design system. It enables our small group of designers to design and ship faster by institutionalizing key decisions and providing an already established groundwork.

You can see Halo in action **today**.

Preview the new company profiles (WIP): [angel.co/~talent/angellist](https://angel.co/~talent/angellist)

&nbsp;

## Quickstart

### Explore Halo

View living documentation and browse code.

```bash
git clone git@github.com:venturehacks/halo.git
cd halo
yarn
yarn run dev
```

### Use Halo in a Project

[Generate a Github personal access token](https://github.com/settings/tokens) so that your project can read this repository.

Halo is built as a node module. In the future, Halo will be published as a private module so that we do not leak Github tokens.

#### Install Halo

```bash
yarn add ssh://git@github.com:venturehacks/halo.git
```

#### Add access token

Include your GitHub token so CircleCI can build the application.

```json
// package.json
{
  "private": true,
  "dependencies": {
    "halo": "git+https://PERSONAL-ACCESS-TOKEN:x-oauth-basic@github.com/venturehacks/halo#stable"
  }
}
```

#### Apply Halo components

```tsx
import { Button, Header, Span } from 'halo';

// ...

  <Header h1>Title is Wow</Header>
  <Span muted>muted subtext is bueno</Span>

  <Button variant="gray">Cancel</Button>
  <Button
    variant="primary"
    onClick={() => console.log('OK!')}
  >
    OK
  </Button>
```

&nbsp;

---

## Roadmap

| Date          | Milestone      |                                                                               | Status |
| ------------- | -------------- | ----------------------------------------------------------------------------- | :----: |
| 2019 May      | `v0.6.0`       | Typography, Grid                                                              |   🔶   |
| 2019 April    | `v0.5.0`       | Form input components, SVG iconography                                        |   🔶   |
| 2019 March    | `v0.4.0`       | color palette, sass library export support                                    |   🔶   |
| 2019 February | `v0.3.1`       | Header, Span, Paragraph, Button, PillTag                                      |   ✅   |
| 2019 January  | infrastructure | Best-practice configs, strict linting introduced.                             |   ✅   |
| 2018 November | inception      | Project skeleton is designed and built using TypeScript, React, Jest, webpack |   ✅   |

&nbsp;

### Design Release Notes

Design maintains separate release notes in parallel. The Halo repository needs to "catch up" to the latest from design.

- [Design: Halo Release Notes](https://venturehacks.quip.com/zb36AxAbZnBi/Halo-Design-Release-Notes)
- [Design: Halo README](https://venturehacks.quip.com/zb36AxAbZnBi/Halo-Design-Release-Notes)
- [Why we need a design system](https://venturehacks.quip.com/brjDAYTIUyqO/A-design-system-for-AngelList)

&nbsp;

## Team

- **Engineering**
  - Drew Lustro (lead)
  - Tiffany Wu (support)
- **Design**
  - Shane Zucker (lead)
  - Gearóid O’Rourke (support)
  - Lily Chen (support)
