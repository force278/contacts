import {useState} from 'react'
import style from './ListItem.module.css'

function ListItem ({focus, changeUser, avatar, name, number, index}) {


    return (
        <div className={focus ? style.BoxInFocusStyle : style.BoxStyle} onClick={()=>{
            changeUser(index)
            }}>
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