import styles from './JournalForm.module.css'
import {useState} from "react";
import Button from "../Button/Button.jsx";
import classNames from "classnames";

// eslint-disable-next-line react/prop-types
function JournalForm({onSubmit}) {
    const [formValidState, setFormValidState] = useState({
        title: true,
        post: true,
        date: true,
    })

    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        let isFormValid = true;
        if (!formProps.title?.trim().length){
            setFormValidState(state => ({...state, title: false}))
            isFormValid = false;
        }else{
            setFormValidState(state => ({...state, title: true}))
        }
        if (!formProps.post?.trim().length){
            setFormValidState(state => ({...state, post: false}))
            isFormValid = false;
        }else{
            setFormValidState(state => ({...state, post: true}))
        }
        if (!formProps.date){
            setFormValidState(state => ({...state, date: false}))
            isFormValid = false;
        }else{
            setFormValidState(state => ({...state, date: true}))
        }
        if (!isFormValid) {
            return;
        }
        onSubmit(formProps);
    }

    return (
        <>
            <form className={styles['journal-form']} onSubmit={addJournalItem}>
                <div className={styles['form-row']}>
                    <input type="text" name='title' className={classNames(styles['input-title'], {
                        [styles['invalid']]: !formValidState.title
                    })}/>
                    <span className={styles['focus-border-title']}></span>
                </div>
                <div className={styles['form-row']}>
                    <label htmlFor="date" className={styles['form-label']}>
                        <img src="/calendar.svg" alt="Calendar icon"/>
                        <span>Date</span>
                    </label>
                    <input type="date" name='date' id='date' className={classNames(styles['input'], {
                        [styles['invalid']]: !formValidState.date
                    })}/>
                    <span className={styles['focus-border-date']}></span>
                </div>
                <div className={styles['form-row']}>
                    <label htmlFor="tag" className={styles['form-label']}>
                        <img src="/folder.svg" alt="Folder icon"/>
                        <span>Tags</span>
                    </label>
                    <input type="text" name='tag' id='tag' className={styles['input']} placeholder={'Tags'}/>
                    <span className={styles['focus-border']}></span>
                </div>
                <textarea name="post" id="" cols="30" rows="10" placeholder={'Text'}
                          className={classNames(styles['input'], {
                              [styles['invalid']]: !formValidState.post
                          })}>
                </textarea>
                <Button text={'Save'}/>
            </form>
        </>
    )
}

export default JournalForm