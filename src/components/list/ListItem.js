import {useState} from 'react'
import style from './ListItem.module.css'

function ListItem ({avatar, name, number}) {
    const [focusState, setFocusState] = useState(false)


    return (
        <div className={focusState ? style.BoxInFocusStyle : style.BoxStyle} onClick={()=>{setFocusState(!focusState)}}>
            <div className={style.AvatarStyle}>
                {avatar ? 
                    <img className={style.ImgStyle} src={avatar} alt='somephoto'></img>    
                    :
                    <div className={style.EmptyImgStyle}>{name.substr(0,2)}</div>
                }
                
            </div>
            <div className={style.NameStyle}>{name}</div>
        </div>
    )

}

export default ListItem;