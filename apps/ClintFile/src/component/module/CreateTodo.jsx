import React, { useState } from 'react';
import Modal from 'react-modal';
import { MdDelete } from 'react-icons/md'; // Importing delete icon from React Icons
import style from './CreateTodo.module.css';

const CreateTodo = (props) => {
    const [checklistItems, setChecklistItems] = useState([]);

    const addChecklistItem = () => {
        setChecklistItems([...checklistItems, '']);
    };

    const removeChecklistItem = (index) => {
        const updatedChecklistItems = [...checklistItems];
        updatedChecklistItems.splice(index, 1);
        setChecklistItems(updatedChecklistItems);
    };

    const handleChecklistChange = (index, value) => {
        const updatedChecklistItems = [...checklistItems];
        updatedChecklistItems[index] = value;
        setChecklistItems(updatedChecklistItems);
    };

    return (
        <div>
            <Modal
                isOpen={props.isOpen}
                onRequestClose={props.onRequestClose}
                className={style.modal}
                overlayClassName={style.overlay}
            >
                <div className={style.container}>
                    <section className={style.taskContainer}>
                        <div className={style.taskContainerSec}>
                            <div className={style.taskSecUp}>
                                <div className={style.taskInputSec}>
                                    <label>Title <span className={style.redDot}>*</span></label>
                                    <input className={style.input} type='text' placeholder='Enter Task Title' />
                                </div>
                                <div className={style.selectPriority}>
                                    <div className={style.taskTitle}>
                                        <span>Select Priority <span className={style.redDot}>*</span></span>
                                    </div>
                                    <div className={style.selectOpt}>
                                        <div className={`${style.opt} ${style.false}`}>
                                            <span className={style.red}></span>
                                            <span className={style.selectText}>HIGH PRIORITY</span>
                                        </div>
                                        <div className={`${style.opt} ${style.false}`}>
                                            <span className={style.blue}></span>
                                            <span className={style.selectText}>MODERATE PRIORITY</span>
                                        </div>
                                        <div className={`${style.opt} ${style.false}`}>
                                            <span className={style.green}></span>
                                            <span className={style.selectText}>LOW PRIORITY</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className={style.checklistTitle}>Checklist (0/{checklistItems.length}) <span className={style.redDot}>*</span></span>
                                    </div>
                                    <div className={style.taskInputs}>
                                        {checklistItems.map((item, index) => (
                                            <div key={index} className={style.inputWrapper}>
                                                <input
                                                    className={style.input}
                                                    type='text'
                                                    placeholder={`Checklist Item ${index + 1}`}
                                                    value={item}
                                                    onChange={(e) => handleChecklistChange(index, e.target.value)}
                                                />
                                                <MdDelete className={style.deleteIcon} onClick={() => removeChecklistItem(index)} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className={style.taskAddBox} onClick={addChecklistItem}>
                                        <span className={style.taskAddIcon}>+</span>
                                        <span className={style.taskAddText}>Add New</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={style.taskSecDown}>
                        <div>
                            <input className={style.dateBtn} type='date' />
                        </div>
                        <div className={style.buttonsRight}>
                            <button className={style.cancelBtn} onClick={props.onRequestClose}>Cancel</button>
                            <button disabled className={`${style.saveBtn} ${style.disableBtn}`}>Save</button>
                        </div>
                    </section>
                </div>
            </Modal>
        </div>
    );
}

export default CreateTodo;
