import React from 'react'
import { useState } from 'react';
import styles from '../styles/todo.module.css';
import { Icon } from 'semantic-ui-react'
const Todo = () => {
    const [value,SetValue]=useState("")
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(value)
    }
  return (
    <div className={styles.container}>
        <div className={styles.mainBox}>
            <div className={styles.title}>
                <h1 className={styles.mainTitle}>Get Things Done !</h1>
            </div>
            <form className={styles.searchBar} onSubmit={handleSubmit}>
                <input type="search" onChange={(e)=> SetValue(e.target.value)} id="" placeholder='What is the task today' className={styles.searchInput} />
                <button type="submit" className={styles.todobtn}>Add Task</button>
            </form>
            <div className={styles.todolist}>
                <div className={styles.todo}>
                    <div className={styles.todoTask}>
                        <p>Go shopping</p>
                    </div>
                    <div className={styles.todoOptions}>
                    <Icon disabled name='edit' />
                    <Icon disabled name='trash' />
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Todo