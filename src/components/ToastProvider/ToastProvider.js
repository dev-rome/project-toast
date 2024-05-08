import { useState, createContext, useCallback } from 'react';
import useKeyDown from '../../hooks/useKeyDown';

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([
    {
      id: crypto.randomUUID(),
      message: 'Oh no!',
      variant: 'error',
    },
    {
      id: crypto.randomUUID(),
      message: 'Logged in',
      variant: 'success',
    },
  ]);


  const handleEscape = useCallback(() => {
    setToasts([]);
  }, []);

  useKeyDown("Escape", handleEscape);

  const handleCreateToast = (message, variant) => {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];
    setToasts(nextToasts);
  };

  const handleDismiss = (id) => {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(nextToasts);
  };

  return (
    <ToastContext.Provider value={{ toasts, handleCreateToast, handleDismiss }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
