import { useRef } from 'react'
import styles from './Modal.module.css'

function Modal({modalState, setModalState, editAvatar}) {
    const InputImg = useRef(null)

    return (
        <div className={modalState.active ? styles.ModalActiveStyle : styles.ModalInactiveStyle}>
            {modalState.active ?
                <div className={styles.FormStyle} >
                    <button className={styles.CloseBtnStyle} onClick={() => {setModalState({active:false, img:modalState.img})}}>X</button>
                    <input 
                    id='imageInput'
                    type='file'
                    accept='image/jpeg, image/png' ref={InputImg} className={styles.ImgInputStyle} onChange={() => {
                        editAvatar(InputImg.current.value) 
                        setModalState({active:false, img:InputImg.current.value})
                        }}></input>
                    <label className={styles.EditBtnStyle} htmlFor='imageInput'>Изменить</label>
                    <label className={styles.DeleteBtnStyle}>Удалить</label>
                </div>
                : null
            }
        </div>
    )
}

export default Modal