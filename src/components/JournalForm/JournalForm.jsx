import styles from './JournalForm.module.css'
import {useContext, useEffect, useReducer, useRef} from "react";
import Button from "../Button/Button.jsx";
import classNames from "classnames";
import {formReducer, INITIAL_STATE} from "./JournalForm.state.js";
import Input from "../Input/Input.jsx";
import {UserContext} from "../../context/user.context.jsx";


// eslint-disable-next-line react/prop-types
function JournalForm({onSubmit}) {
    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
    const {isValid, isFormReadyToSubmit, values} = formState;
    const titleRef = useRef();
    const dateRef = useRef();
    const postRef = useRef();
    const { userId } = useContext(UserContext);

    const focusError = (isValid) => {
        switch (true){
            case !isValid.title:
                titleRef.current.focus();
                break
            case !isValid.date:
                dateRef.current.focus();
                break
            case !isValid.post:
                postRef.current.focus();
                break
        }
    }

    useEffect(() => {
        let timerId;
        if (!isValid.date || !isValid.post || !isValid.title) {
            focusError(isValid);
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

    useEffect(() => {
        dispatchForm({type: 'SET_VALUE', payload: { userId }})
    }, [userId]);

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
                    <Input type="text" name='title' isValid={isValid.title} ref={titleRef} value={values.title} onChange={onChange} appearance={'title'}/>
                    <span className={styles['focus-border-title']}></span>
                </div>
                <div className={styles['form-row']}>
                    <label htmlFor="date" className={styles['form-label']}>
                        <img src="/calendar.svg" alt="Calendar icon"/>
                        <span>Date</span>
                    </label>
                    <Input type="date" name='date' isValid={isValid.date} id='date' ref={dateRef} onChange={onChange}  value={values.date}/>
                    <span className={styles['focus-border-date']}></span>
                </div>
                <div className={styles['form-row']}>
                    <label htmlFor="tag" className={styles['form-label']}>
                        <img src="/folder.svg" alt="Folder icon"/>
                        <span>Tags</span>
                    </label>
                    <Input type="text" name='tag'  id='tag' onChange={onChange}  value={values.tag}  placeholder={'Tags'}/>
                    <span className={styles['focus-border']}></span>
                </div>
                <textarea name="post"  id="" cols="30" rows="10" placeholder={'Text'} ref={postRef} value={values.post} onChange={onChange}
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