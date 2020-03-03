# useHooks

![npm](https://img.shields.io/npm/dm/@geniussoft/use-hooks?style=flat-square)
![NPM](https://img.shields.io/npm/l/@geniussoft/use-hooks?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/@geniussoft/use-hooks?style=flat-square)
![npm type definitions](https://img.shields.io/npm/types/@geniussoft/use-hooks?style=flat-square)
![npm](https://img.shields.io/npm/v/@geniussoft/use-hooks?style=flat-square)

Collection of reusable hooks gathered from useHooks.com and internet.

## Requirement

To use this collection, you must use `react@16.8.0` or greater which includes Hooks.

## Install

```
yarn add @geniussoft/use-hooks
```

## useLocalStorage

Importing module to your project

```es6
import { useLocalStorage } from '@geniussoft/use-hooks';
```

Usage

```es6
const App = () => {
    // Similar to useState but first arg is key to the value in local storage.
    const [name, setName] = useLocalStorage('name', 'Bob');

    return (
        <div>
            <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    );
};
```

## useKeyPress

Importing module to your project

```es6
import { useKeyPress } from '@geniussoft/use-hooks';
```

Usage

```es6
const App=()=> {
    // Call our hook for each key that we'd like to monitor
    const happyPress = useKeyPress('h');
    const sadPress = useKeyPress('s');
    const robotPress = useKeyPress('r');
    const foxPress = useKeyPress('f');

  return (
    <div>
      <div>h, s, r, f</div>
      <div>
        {happyPress && '😊'}
        {sadPress && '😢'}
        {robotPress && '🤖'}
        {foxPress && '🦊'}
      </div>
    </div>
}

```

## useInterval

Source from [Dan Dan Abramov's blog post](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)

Importing module to your project

```es6
import { useInterval } from '@geniussoft/use-hooks';
```

```es6
useInterval(() => {
    setTime(dateTime);
}, 1000);
```

---

A Project by [Genius Soft Pvt Ltd](http://www.officialgenius.com/).

Maintained by [Chathu Vishwajith](https://github.com/iamchathu).
