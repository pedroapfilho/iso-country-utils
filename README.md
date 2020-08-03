<h1 align="center">Welcome to iso-country-utils 👋</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/iso-country-utils"><img alt="NPM version" src="https://img.shields.io/npm/v/iso-country-utils"></a>
  <a href="https://bundlephobia.com/result?p=iso-country-utils"><img alt="Bundle size" src="https://img.shields.io/bundlephobia/minzip/iso-country-utils"></a>
  <img alt="MIT" src="https://img.shields.io/github/license/pedroapfilho/iso-country-utils">
</p>

> A helper to get country codes following the <a href="https://www.iso.org/glossary-for-iso-3166.html">ISO 3316</a>

## Install

```sh
npm install iso-country-utils

or

yarn add iso-country-utils
```

## Usage

This is the `Country` interface:

```ts
interface Country {
  name: string;
  alpha2: string;
  alpha3: string;
  code: string;
}
```

You can get all the countries just calling

```js
import { countries } from 'iso-country-utils';
```

You can get a country by its name with `getCountryFromName`:

```js
import { getCountryFromName } from 'iso-country-utils';

const US = getCountryFromName('United States of America');
```

You can get a country by its alpha2 value with `getCountryFromAlpha2`:

```js
import { getCountryFromAlpha2 } from 'iso-country-utils';

const US = getCountryFromAlpha2('US');
```

You can get a country by its alpha3 value with `getCountryFromAlpha3`:

```js
import { getCountryFromAlpha3 } from 'iso-country-utils';

const US = getCountryFromAlpha3('USA');
```

You can get a country by its code with `getCountryFromAlpha3`:

```js
import { getCountryFromCode } from 'iso-country-utils';

const US = getCountryFromCode('840');
```

You can find a full list of countries from the <a href="https://en.wikipedia.org/wiki/ISO_3166-1">source</a>

## Author

👤 **Pedro Filho <pedro@filho.me>**

- Twitter: [@pedrofilhome](https://twitter.com/pedrofilhome)
- Github: [@pedroapfilho](https://github.com/pedroapfilho)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/pedroapfilho/iso-country-utils/issues).

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.buymeacoffee.com/khcUAVF" target="_blank"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

```

```
