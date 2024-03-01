import Modal from 'react-modal';
import style from './CreateTodo.module.css';

const CreateTodo = (props) => {
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
                                    <input type='text' placeholder='Enter Task Title' />
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
                                        <span className={style.checklistTitle}>Checklist (0/0) <span className={style.redDot}>*</span></span>
                                    </div>
                                    <div className={style.taskInputs}></div>
                                    <div className={style.taskAddBox}>
                                        <span className={style.taskAddIcon}></span>
                                        <span className={style.taskAddText}>Add New</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.taskSecDown}>
                                <div>
                                    <input className={style.dateBtn} type='date' />
                                </div>
                                <div className={style.buttonsRight}>
                                    <button className={style.cancelBtn} onClick={props.onRequestClose}>Cancel</button>
                                    <button disabled className={`${style.saveBtn} ${style.disableBtn}`}>Save</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Modal>
        </div>
    );
}

export default CreateTodo;
