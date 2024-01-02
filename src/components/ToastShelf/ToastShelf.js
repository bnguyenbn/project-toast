import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ children, handleDismiss }) {
  console.log(children);

  return (
    <ol className={styles.wrapper}>
      {children.map(({ id, message, variant }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            {/* Before passing, wrapping handleDimiss(id) in a function to avoid invoking it immediately */}
            <Toast variant={variant} handleDismiss={() => handleDismiss(id)}>
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
