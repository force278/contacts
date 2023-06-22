import ContactInfo from "./info/ContactInfo";
import ContactSearch from "./search/ContactSearch";
import ContactsList from "./list/ContactsList";
import ListItem from "./list/ListItem";
import styles from "./Contacts.module.css";
import { useState } from "react";

let users = [
    {id: 1, avatar: null, name:'Силантий Васильев', number:79003347311},
    {id: 2, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5YKUvHsuVXAHV_IA5k7DP7SCLTBcSKle9w&usqp=CAU', name:'Райан Гослинг', number:1637892648},
    {id: 3, avatar: 'https://images.thevoicemag.ru/upload/img_cache/746/746eea5c3d740003888233a64069e9cf_cropped_666x666.jpg', name:'Киану Ривз', number:1224892648},
    {id: 4, avatar: 'https://n1s2.hsmedia.ru/00/f3/6e/00f36ee1392b1ff831e35d6bad012db5/536x553_0xac120003_6748852251611132255.jpg', name:'Ана де Армас', number:79003347311},
    {id: 5, avatar: null, name:'Леонардо Ди Каприо', number:79003347311},
    {id: 6, avatar: 'https://yt3.googleusercontent.com/_lLY32NYuCrK6CHHlCTizprDX37d0y0yAr_-9UDM1zilPzN1eNTXq8Z8qDETMqwPvcHz-agNOA=s900-c-k-c0x00ffffff-no-rj', name:'Маргулан Сейсембаев', number:79003347311},
    {id: 7, avatar: null, name:'Автосервис', number:79003347311},
    {id: 8, avatar: null, name:'HR ISERV', number:79003347311},
    {id: 9, avatar: null, name:'Теле2 Баланс', number:79003347311},
    {id: 10, avatar: null, name:'Турагенство🏝️', number:79003347311},
]


function Contacts () {
    const [avatarState, setAvatarState] = useState(null)
    const [usersList, setUsersList] = useState(users)
    function editAvatar(img) {
        
    }
    

    

    return (
        <div>
            <div className={styles.HeaderTextStyle}>Контакты</div>
            <div className={styles.BoxStyle}>
                <ContactSearch/>
                <div className={styles.ContactsBoxStyle}>
                    <ContactsList>
                    { /* Проверка на пустой список */
                        usersList.length !== 0 ? usersList.map((item, index)=>{
                            return(
                                <ListItem key={index} avatar={item.avatar} name={item.name} index={index} />
                            )
                        }) : <h4 className={styles.EmptyTextStyle}>Тут пока пусто🥺</h4>
                    }   
                    </ContactsList>
                    <ContactInfo editAvatar={editAvatar}/>
                </div>
            </div>
        </div>
    )

}

export default Contacts;