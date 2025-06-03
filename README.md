# AVISO IMPORTANTE

Este repositório existe apenas para fins de **compatibilidade temporária** com projetos legados.

> **Para novos projetos ou manutenção contínua, utilize sempre o repositório oficial:**
> [@platformbuilders/fluid-react-native](https://github.com/platformbuilders/fluid-react-native)

Este fork só deve ser utilizado caso você precise de compatibilidade com versões antigas e não possa migrar imediatamente para a versão oficial.

---

# @platformbuilders/react-native-elements

[![Build Status][check-badge]][workflows]
[![npm][npm-badge]][npm]
[![MIT][license-badge]][license]
[![Docusaurus Firebase Deploy](https://github.com/platformbuilders/react-native-elements/actions/workflows/docusaurus_release.yml/badge.svg)](https://github.com/platformbuilders/react-native-elements/actions/workflows/docusaurus_release.yml)

[npm-badge]: https://img.shields.io/npm/v/@platformbuilders/react-native-elements.svg
[npm]: https://www.npmjs.com/package/@platformbuilders/react-native-elements
[license-badge]: https://img.shields.io/dub/l/vibe-d.svg
[license]: https://raw.githubusercontent.com/platformbuilders/react-native-elements/master/LICENSE.md
[workflows]: https://github.com/platformbuilders/react-native-elements/actions
[check-badge]: https://github.com/platformbuilders/react-native-elements/workflows/check/badge.svg

Welcome to the @platformbuilders/elements package here you will find out all of our components shared with the community

# Whats the idea of this repository

Its a place that we can share a little bit of our code base and show how we work on our projects with our components!

# How can i use the library?

Here's how you add our dependencie to your project @platformbuilders/elements

1. depend on it:

```bash
yarn add @platformbuilders/react-native-elements
```

2. import the ThemeProvider from [styled-components](https://styled-components.com/docs/advanced) and provide the Theme following the ThemeType definition.

```jsx
import { ThemeProvider } from 'styled-components';
import { ThemeType } from '@platformbuilders/react-native-elements';

const theme: ThemeType = { ... };

<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>
```

3. use it

```jsx
import { Button } from '@platformbuilders/react-native-elements';
```
