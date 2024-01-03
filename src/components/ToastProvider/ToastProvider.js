import React from "react";

import useKeydown from "../../hooks/use-keydown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const dismissAllToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  useKeydown("Escape", dismissAllToasts);

  function createToast(message, variant) {
    setToasts([...toasts, { id: crypto.randomUUID(), message, variant }]);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
