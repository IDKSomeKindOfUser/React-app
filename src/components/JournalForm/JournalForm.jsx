import styles from './JournalForm.module.css'
import {useEffect, useReducer} from "react";
import Button from "../Button/Button.jsx";
import classNames from "classnames";
import {formReducer, INITIAL_STATE} from "./JournalForm.state.js";


function JournalForm({onSubmit}) {
    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
    const {isValid, isFormReadyToSubmit, values} = formState;

    useEffect(() => {
        let timerId;
        if (!isValid.date || !isValid.post || !isValid.title) {
            timerId = setTimeout(() => {
                dispatchForm({type: 'RESET_VALIDITY'});
            }, 2000);
        }
        return () => {
            clearTimeout(timerId)
        }
    }, [isValid]);

    useEffect(() => {
        if (isFormReadyToSubmit) {
            onSubmit(values);
            dispatchForm({type: 'CLEAR'});
        }
    }, [isFormReadyToSubmit, values, onSubmit]);

    const onChange = (e) => {
        dispatchForm({type: 'SET_VALUE', payload: {[e.target.name]: e.target.value}})
    }

    const addJournalItem = (e) => {
        e.preventDefault();
        dispatchForm({type: 'SUBMIT'})
    }

    return (
        <>
            <form className={styles['journal-form']} onSubmit={addJournalItem}>
                <div className={styles['form-row']}>
                    <input type="text" name='title'  value={values.title} onChange={onChange} className={classNames(styles['input-title'], {
                        [styles['invalid']]: !isValid.title
                    })}/>
                    <span className={styles['focus-border-title']}></span>
                </div>
                <div className={styles['form-row']}>
                    <label htmlFor="date" className={styles['form-label']}>
                        <img src="/calendar.svg" alt="Calendar icon"/>
                        <span>Date</span>
                    </label>
                    <input type="date" name='date' id='date' onChange={onChange}  value={values.date} className={classNames(styles['input'], {
                        [styles['invalid']]: !isValid.date
                    })}/>
                    <span className={styles['focus-border-date']}></span>
                </div>
                <div className={styles['form-row']}>
                    <label htmlFor="tag" className={styles['form-label']}>
                        <img src="/folder.svg" alt="Folder icon"/>
                        <span>Tags</span>
                    </label>
                    <input type="text" name='tag' id='tag' onChange={onChange}  value={values.tag} className={styles['input']} placeholder={'Tags'}/>
                    <span className={styles['focus-border']}></span>
                </div>
                <textarea name="post" id="" cols="30" rows="10" placeholder={'Text'} value={values.post} onChange={onChange}
                          className={classNames(styles['input'], {
                              [styles['invalid']]: !isValid.post
                          })}>
                </textarea>
                <Button text={'Save'}/>
            </form>
        </>
    )
}

export default JournalForm