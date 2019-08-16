# useHooks

Collection of reusable hooks gathered from useHooks.com and internet.

## Requirement
To use this collection, you must use `react@16.8.0` or greater which includes Hooks.

## Install

```
yarn add @geniussoft/use-hooks
```

## useLocalStorage

Importing module to your project
```
import { useLocalStorage } from '@geniussoft/use-hooks'


// Usage
const App=()=> {
    // Similar to useState but first arg is key to the value in local storage.
    const [name, setName] = useLocalStorage('name', 'Bob');

    return (
        <div>
        <input
        type= "text"
    placeholder = "Enter your name"
    value = { name }
    onChange = { e => setName(e.target.value) }
        />
        </div>
  );
}

```

---

Project by [Genius Soft Pvt Ltd](http://www.officialgenius.com/).

Maintained by [Chathu Vishwajith](https://github.com/iamchathu).
