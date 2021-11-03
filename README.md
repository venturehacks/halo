# Halo

Halo is our design system. It enables our small group of designers to design and ship faster by institutionalizing key decisions and providing an already established groundwork.

&nbsp;

<img src="https://user-images.githubusercontent.com/194885/75487723-d21d6e80-5963-11ea-8126-035fdd131f94.jpg" alt="Halo preview" width="609" />

[![Build status](https://badge.buildkite.com/71f435fbeaf326479fce6ce41959cf3c7376de8d29367666a7.svg?branch=master)](https://buildkite.com/angellist/halo) [![Netlify Status](https://api.netlify.com/api/v1/badges/87d1d78b-b9dc-440b-ba5a-90f89afce587/deploy-status)](https://app.netlify.com/sites/halo-design-system/deploys)

&nbsp;

📝 **[Halo Feedback](https://venturehacks.quip.com/JP75A3GbNYua/Halo-Feedback)**

&nbsp;

## Quickstart

### Dependencies

```sh
brew install vips
```

### Checkout code, run documentation site

```bash
git clone git@github.com:venturehacks/halo.git
cd halo
yarn
yarn dev
```

## Project Installation

### `.yarnrc`

Adopting Halo in a project requires use of the gemfury registry.

```gitignore
registry "https://npm.fury.io/angellist/"
```

### Add Halo dependency

```bash
yarn add halo@v0.14.2
```

#### Entry point CSS

This distribution payload should only be included in your app _once_. It is necessary to prevent a flash of unstyled content.

```scss
// main.scss (or similar "layout" file that is only included one time)

:global {
  @import 'halo/dist/esm/halo.css';
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
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary" onClick={() => console.log('OK!')}>
        OK
      </Button>
    </Box>
  </Box>
);
```

#### Scss

```scss
// single import grants all variables, mixins, etc.
@import 'halo/scss/halo';

.foo {
  color: $text-dark--aaaa;
}

.bar {
  @include flex-row;
}
```

&nbsp;

&nbsp;

## Roadmap

| Date           | Milestone      |                                                               | Status |
| -------------- | -------------- | ------------------------------------------------------------- | :----: |
| 2020 &nbsp; –  | `v1.0.0`       | ⋯                                                             |   🌀   |
| ⋯              | ⋯              | ⋯                                                             |   ⋯    |
| 2020 &nbsp; –  | `v0.11.x`      | Component pack                                                |   🔶   |
| 2020 &nbsp; –  | `v0.10.x`      | Variable negative space, themeable, .halorc.js                |   🔶   |
| 2020 Februrary | `v0.9.x`       | Docz 2.0                                                      |   ✅   |
| 2019 December  | `v0.8.x`       | Component pack, robust tooling                                |   ✅   |
| 2019 October   | `v0.8.x`       | Responive Grid + Cell                                         |   ✅   |
| 2019 September | `v0.7.0`       | Raw form components                                           |   ✅   |
| 2019 August    | ⋯              | Pre-commit tooling                                            |   ✅   |
| 2019 July      | ⋯              | Smoke tests, API iteration                                    |   ✅   |
| 2019 June      | `v0.6.0`       | Final color palette, type scale                               |   ✅   |
| 2019 April-May | `v0.5.0`       | Grid, Cell, Label, Badge, Avatar, Tooltip, breakpoints        |   ✅   |
| 2019 March     | `v0.4.0`       | Box, color palette, scss vars/mixin library export            |   ✅   |
| 2019 February  | `v0.3.1`       | Header, Span, Paragraph, Button, PillTag                      |   ✅   |
| 2019 January   | infrastructure | Best-practice configs, introduce strict linting               |   ✅   |
| 2018 November  | inception      | Project skeleton; built with TypeScript, React, Jest, webpack |   ✅   |

&nbsp;

### Design Releases

This repo lags behind design; it's constantly "catching up" to the latest release of sketch files.

Design maintains separate release notes and numeric versioning.

- [Design: Halo Release Notes](https://venturehacks.quip.com/zb36AxAbZnBi/Halo-Design-Release-Notes)
- [Design: Halo README](https://venturehacks.quip.com/zb36AxAbZnBi/Halo-Design-Release-Notes)
- [Why we need a design system](https://venturehacks.quip.com/brjDAYTIUyqO/A-design-system-for-AngelList)

&nbsp;

## Team

- **Engineering**
  - Drew Lustro
  - Tiffany Wu
  - Mike Dee
  - Max Lustig
  - Lily Chen
- **Design**
  - Andres Santanilla
  - Shane Zucker
  - Lily Chen
  - Stephen Varaday
  - Lauren Kolm
  - Gearóid O’Rourke
  - Adam Ruf
  - Chad Whitaker
- **Technical Feedback**
  - Thomas Hu
  - Hans Arijanto
  - Jordan Claassen

&nbsp;

## Special Thanks

- Veselin Todorov
- Korbin Hoffman
- Aaron Vinson

&nbsp;

<img src="https://user-images.githubusercontent.com/194885/54588593-b2a26580-49e0-11e9-99c2-8a702f69747a.gif" width="78" alt="heloswhere" />
