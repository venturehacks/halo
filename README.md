# Halo :angel:

Halo is our design system. It enables our small group of designers to design and ship faster by institutionalizing key decisions and providing an already established groundwork.

You can see Halo in action **today**.

Preview the new company profiles (WIP): [angel.co/~talent/angellist](https://angel.co/~talent/angellist)

&nbsp;

![Halo color palette preview](https://user-images.githubusercontent.com/194885/54584454-9f899880-49d4-11e9-8238-db144693e0c8.jpg)

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

### Install Halo in a project

[Generate a Github personal access token](https://github.com/settings/tokens) so that your project can read this repository.

Halo is built as a node module. In the future, Halo will be published as a private module so that we do not leak Github tokens.

#### Add dependency

```bash
yarn add ssh://git@github.com:venturehacks/halo.git
```

#### Supply access token

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

### Using Halo

#### React

```tsx
import { Box, Button, Header, Span } from 'halo';

return (
  <Box>
    <Header h1>Title is Wow</Header>
    <Span muted>muted subtext is bueno</Span>

    <Box row>
      <Button variant="gray">Cancel</Button>
      <Button variant="primary" onClick={() => console.log('OK!')}>
        OK
      </Button>
    </Box>
  </Box>
);
```

#### Scss

> **Note:** mixins + vars that are *actually* interesting coming soon :)

```scss
// single import grants all variables, mixins, etc.
@import '~halo/scss/halo';

.foo {
  color: $halo-test-variable;
}

.bar {
  @include halo-test;
}
```

&nbsp;

---

## Roadmap

| Date          | Milestone      |                                                                               | Status |
| ------------- | -------------- | ----------------------------------------------------------------------------- | :----: |
| 2019 May      | `v0.6.0`       | Typography, Grid                                                              |   🔶   |
| 2019 April    | `v0.5.0`       | Form input components, SVG iconography                                        |   🔶   |
| 2019 March    | `v0.4.0`       | color palette, scss library export support                                    |   ✅   |
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
  - Drew Lustro 
- **Design**
  - Shane Zucker · lead
  - Gearóid O’Rourke · support
  - Lily Chen (support · support
  - Stephen Varaday · support
