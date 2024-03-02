import React, { useState } from 'react';
import Modal from 'react-modal';
import style from './CreateTodo.module.css';
import {createTodo} from '../../Api/todo/todo'

const CreateTodo = (props) => {
    const [data , setData] = useState({
        title:"" ,
        checkList:"", 
        dueDate:"", 
        priority:"", 
        status:""
    })
    const [checklistItems, setChecklistItems] = useState([]);

    const addChecklistItem = () => {
        setChecklistItems([...checklistItems, '']);
    };

    const handleChecklistChange = (index, value) => {
        const updatedChecklistItems = [...checklistItems];
        updatedChecklistItems[index] = value;
        setChecklistItems(updatedChecklistItems);
    };

    const handleTitleChange = (e) => {
        setData({ ...data, title: e.target.value });
    };

    const handlePriorityChange = (priority) => {
        setData({ ...data, priority });
    };

    const handleDueDateChange = (e) => {
        setData({ ...data, dueDate: e.target.value });
    };

    const fetchData = async () => {
        try {
            const response = await createTodo(data);
            console.log(response.data);
            props.onRequestClose(); 
        } catch (error) {
            console.error('Error creating todo:', error);
        }
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
                                    <input
                                        className={style.input}
                                        type='text'
                                        placeholder='Enter Task Title'
                                        value={data.title}
                                        onChange={handleTitleChange}
                                    />
                                </div>
                                <div className={style.selectPriority}>
                                    <div className={style.taskTitle}>
                                        <span>Select Priority <span className={style.redDot}>*</span></span>
                                    </div>
                                    <div className={style.selectOpt}>
                                        <div
                                            className={`${style.opt} ${data.priority === 'HIGH' ? style.true : style.false}`}
                                            onClick={() => handlePriorityChange('HIGH')}
                                        >
                                            <span className={style.red}></span>
                                            <span className={style.selectText}>HIGH PRIORITY</span>
                                        </div>
                                        <div
                                            className={`${style.opt} ${data.priority === 'MODERATE' ? style.true : style.false}`}
                                            onClick={() => handlePriorityChange('MODERATE')}
                                        >
                                            <span className={style.blue}></span>
                                            <span className={style.selectText}>MODERATE PRIORITY</span>
                                        </div>
                                        <div
                                            className={`${style.opt} ${data.priority === 'LOW' ? style.true : style.false}`}
                                            onClick={() => handlePriorityChange('LOW')}
                                        >
                                            <span className={style.green}></span>
                                            <span className={style.selectText}>LOW PRIORITY</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className={style.checklistTitle}>Checklist ({checklistItems.length}/0) <span className={style.redDot}>*</span></span>
                                    </div>
                                    <div className={style.taskInputs}>
                                        {checklistItems.map((item, index) => (
                                            <input
                                                key={index}
                                                className={style.input}
                                                type='text'
                                                placeholder={`Checklist Item ${index + 1}`}
                                                value={item}
                                                onChange={(e) => handleChecklistChange(index, e.target.value)}
                                            />
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
                            <input
                                className={style.dateBtn}
                                type='date'
                                value={data.dueDate}
                                onChange={handleDueDateChange}
                            />
                        </div>
                        <div className={style.buttonsRight}>
                            <button className={style.cancelBtn} onClick={props.onRequestClose}>Cancel</button>
                            <button className={`${style.saveBtn}`} onClick={fetchData}>Save</button>
                        </div>
                    </section>
                </div>
            </Modal>
        </div>
    );
};

export default CreateTodo;
