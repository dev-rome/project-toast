import React, { useState } from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from '../Toast';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");


  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <Toast message={message} variant={variant} />

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              value={message}
              onChange={e => {
                setMessage(e.target.value);
              }} className={styles.messageInput} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {/* TODO Other Variant radio buttons here */}
            {VARIANT_OPTIONS.map((option) => (
              <label htmlFor={option} key={option}>
                <input
                  type='radio'
                  name='variant'
                  id={option}
                  value={option}
                  checked={option === variant}
                  onChange={e => {
                    setVariant(e.target.value);
                  }}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
