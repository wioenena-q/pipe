# Getting Started

## Installation

```bash
npm install @wioenena.q/pipe # or yarn add @wioenena.q/pipe
```

## Usage

```js
const { pipe } = require('@wioenena.q/pipe')

// pipe(functions)(inital arguments)
pipe(
  x => x + 1,
  x => x * 2,
  x => x + 3,
)(1) // 6
```
