import React from 'react';
import styles from './FormsControlls.module.css';

export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? styles.error : styles.formDiv}>
            <input {...input} {...props} />
            {hasError ? <span>{meta.error}</span> : null}
        </div>
    )
}

export const CheckBox = ({input, meta, ...props}) => (
    <div className={styles.formDiv}>
        remember me?
        <input {...input} {...props} type="checkbox" />
    </div>
)