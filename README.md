Svg helper functions for [Hyperapp](https://github.com/hyperapp/hyperapp). Use `hyperapp-svg` as an alternative to JSX or the <samp>hyperapp.h</samp> function.

> ### Note
>
> This package is a temporary solution until the SVG tags get merged into [hyperapp/html](https://github.com/hyperapp/html/pull/16).

## Installation

```bash
npm i hyperapp-svg
```

## Usage

```jsx
import { app } from 'hyperapp'
import { svg, circle, defs, linearGradient, stop } from 'hyperapp-svg'

const view = () =>
  svg({ x: 0, y: 0, width: 600, height: 400, viewBox: '0 0 600 400' }, [
    circle({ cx: 300, cy: 200, r: 60, fill: 'url(#MyGradient)' }),
    defs([
      linearGradient({ id: 'MyGradient' }, [
        stop({ offset: '5%', 'stop-color': '#f60' }),
        stop({ offset: '95%', 'stop-color': '#ff6' })
      ])
    ])
  ])

app({}, {}, view, document.body)
```

Most non-deprecated svg elements are supported, check [svg-tags.json](/src/svg-tags.json) for the list of available svg tags.