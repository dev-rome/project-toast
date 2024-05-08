import { useEffect } from 'react';

const useKeyDown = (key, callback) => {

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.code === key) {
                callback(event);
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [key, callback]);

    return (
        <div>useEscapeHook</div>
    );
};

export default useKeyDown;