import { useState } from 'react';
import Modal from '../modal/Modal';
import styles from './ContactInfo.module.css'


function ContactInfo ({editAvatar}) {
    const [modalState, setModalState] = useState({active:false, img:null})


    return (
        <div className={styles.BoxStyle}>
            <div>
                <h3>Фото профиля</h3>
                <div className={styles.AvatarStyle}>
                    <img className={styles.ImgStyle} src='https://i.pinimg.com/564x/74/3e/53/743e53172e1ee5c13732297cb3039350.jpg' alt='a'></img>
                    <div className={styles.AvatarEditButtonStyle} onClick={()=> {setModalState({active:!modalState.active, img:modalState.img})}}>✎</div>
                </div>
            </div>
            <div style={{'marginLeft': '20px'}}>
                <h3>Имя</h3>
                <input className={styles.InputNameStyle}></input>
                <h3>Номер</h3>
                <input className={styles.InputNumberStyle}></input>
            </div>
            <Modal editAvatar={editAvatar} modalState={modalState} setModalState={setModalState} onClick={()=> {setModalState({active:false, img:modalState.img})}} />
        </div>
    )

}

export default ContactInfo;