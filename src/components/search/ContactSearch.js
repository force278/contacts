import { useRef } from 'react';
import styles from './ContactSearch.module.css';


function ContactSearch ({groups}) {
    const select = useRef()
    

    return (
        <div className={styles.BoxStyle}>
            <input className={styles.InputStyle} maxLength={20} placeholder='🔎Поиск'/>
            <div className={styles.GroupBoxStyle}>
                <select defaultValue={'Нет группы'} className={styles.SelectStyle} ref={select}>
                    { groups.length !== 0 ? groups.map((item, index)=>{
                        return (
                            <option key={index} value={index}>{item.group}</option>
                        )
                        }) 
                        : null
                    }
                </select>
            </div>
        </div>
    )

}

export default ContactSearch;