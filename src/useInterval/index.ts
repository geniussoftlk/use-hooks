import { useEffect, useRef } from 'react';

/*
 * Source from [Dan Dan Abramov's blog post](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)
 */

const useInterval = (callback: Function, delay: number) => {
    const savedCallback = useRef<Function>();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            if (savedCallback.current) savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

export default useInterval;
