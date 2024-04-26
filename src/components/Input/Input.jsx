import './Input.module.css'
import classNames from "classnames";
import styles from "../JournalForm/JournalForm.module.css";
import {forwardRef} from "react";

// eslint-disable-next-line react/prop-types
const Input = forwardRef(function Input({ className, isValid = true, appearance, ...props }, ref) {
    return (
        <input { ...props } ref={ref} className={classNames(className, styles['input'], {
                   [styles['invalid']]: !isValid,
                   [styles['Input-title']]: appearance === 'title'
               })}/>
    )
})

export default Input