import React from 'react'
import Modal from 'react-modal'
import style from './CreateTodo.module.css'

function CreateTodo(props) {
    return (
        <div>
            <Modal
                isOpen={props.onOpen}
                onRequestClose={props.onRequestClose}
                className={style.box}
            >
                <div className={style.todoAddBox}>
                    <p>Task</p>
                    <input type='text' placeholder='Add todo' />
                </div>
            </Modal>

        </div>
    )
}

export default CreateTodo
