import React from 'react';
import styles from './FormsControlls.module.css';

export const Input = ({ input, meta, ...props } = props) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError?styles.error:styles.formDiv}>
            <input {...input} {...props} />
            {hasError?<span>{meta.error}</span>:null}
        </div>
    )
}