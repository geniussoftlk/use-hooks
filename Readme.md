# useHooks

Collection of reusable hooks gathered from useHooks.com and internet.



## Install

```
yarn add @geniussoft/useHooks
```

## useLocalStorage

Importing module to your project
```
import useLocalStorage from '@geniussoft/useHooks/useLocalStorage'


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