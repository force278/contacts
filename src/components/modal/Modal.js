import { useRef } from 'react'
import styles from './Modal.module.css'

function Modal({avatarState, changeAvatar, deleteAvatar, modalState, setModalState}) {
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
                        let path = InputImg.current.value
                            if (path.substr(0, 12) === "C:\\fakepath\\")
                                path = path.substr(12); // modern browser
                            var x;
                            x = path.lastIndexOf('/');
                            x = path.lastIndexOf('\\');
                                path = path.substr(x+1);
                        setModalState({active:false, img:path})
                        changeAvatar(path)
                        }}></input>
                    <label className={styles.EditBtnStyle} htmlFor='imageInput'>Изменить</label>
                    {avatarState ?
                        <label className={styles.DeleteBtnStyle} onClick={()=>{
                            setModalState({active:false, img:null})
                            deleteAvatar()}}>Удалить</label>
                        : null
                    }
                </div>
                : null
            }
        </div>
    )
}

export default Modal