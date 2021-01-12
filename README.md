# Erina Sign Teller

**Erina Sign Teller** es una libreria basada en Sign Teller (de micah-akpan) que provee información sobre simbolos zodiacales completamente **en español**.

La terminología de la API de la librería está en inglés para mayor comodidad y referencia.

## Utilización
Para usar `erina-sign-teller` en tu programa como dependencia:
- yarn add `erina-sign-teller` o npm install `erina-sign-teller`

### Pre-requisitos

- [Node](https://nodejs.org/docs/latest-v11.x/api/) >= 6


### Uso

```js
  const signo = require('erina-sign-teller'); // import signTeller from 'erina-sign-teller' (ES6)
  const cumpleaños = { day: 4, month: 7 }
  const detallesSigno = signo(cumpleaños);
  console.log(`¡Feliz cumpleaños! Tu fecha corresponde al signo ${detallesSigno.sign}!`);
```

### API
  - `{ day: number, month: number }` El día y el mes de la fecha indicada.
  - `{ type }` ** es "tropical" predeterminadamente.** Puedes ponerlo en "sidereal" si lo deseas poner en calendario tropical.

```js
  // Return
  {
    from: String,
    to: String,
    sign: String,
    facts: Array<string>,
    elements: String,
    luckyGem: String
  }
```

## Licencia
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

## Conocimientos externos

* [Horoscopo (en inglés)](https://www.horoscope.com/zodiac-signs)
* [Sidereal Astrology (en inglés)](https://thoughtcatalog.com/january-nelson/2019/01/sidereal-astrology/)
