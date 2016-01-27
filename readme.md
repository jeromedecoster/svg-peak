# svg-peak

> Draw a simple svg shape with a peak path

## Install

```bash
npm i svg-peak
```

## API

#### constructor([options])

| Option | Action |
| :------ | :------- |
| **w** | svg width |
| **h** | svg height |
| **d** | direction of the drawing &mdash; top, right, bottom, left |
| **p1** | first point |
| **p2** | second point |

```js
const Peak = require('svg-peak')

var peak = new Peak({p1:10, p2:50, w:100, h:200})

// also allowed
var peak = Peak({p1:10, p2:50, w:100, h:200})

// all options are also accessible via getter/setter
peak.d = 'top'
peak.p1 = 100
```

#### svg()

Return svg node

```js
var peak = Peak({p1:10, p2:50, w:100, h:200})

/*
<svg viewBox="0 0 100 200" preserveAspectRatio="none">
  <path d="M0 0 V10 L50 50 L100 10 V0 z"></path>
</svg>
*/
var svg = peak.svg()
```

#### path()

Return path value

```js
var peak = Peak({p1:10, p2:50, w:100, h:200})

peak.p1 = 20
// M0 0 V20 L50 50 L100 20 V0 z
var path = peak.path()
```

## Demo

```bash
npm i && npm start
```

## Related

- <a href="https://github.com/jeromedecoster/svg-cubic" target="_blank">svg-cubic</a>
- <a href="https://github.com/jeromedecoster/svg-line" target="_blank">svg-line</a>
- <a href="https://github.com/jeromedecoster/svg-quad" target="_blank">svg-quad</a>

## Thanks

Mainly forked / inspired on <a href="http://tympanus.net/codrops/2014/01/07/shape-hover-effect-with-svg" target="_blank">Codrops</a> and <a href="http://cargocollective.com/isaac317" target="_blank">Isaac Montemayor</a>

## License

MIT
