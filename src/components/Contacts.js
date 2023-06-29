import ContactInfo from "./info/ContactInfo";
import ContactSearch from "./search/ContactSearch";
import ContactsList from "./list/ContactsList";
import ListItem from "./list/ListItem";
import styles from "./Contacts.module.css";
import { useState } from "react";

let groups = [
    {id:0, group: 'Нет группы'},
    {id:1, group: 'Семья'},
    {id:2, group: 'Друзья'},
    {id:3, group: 'Коллеги'}
]

let users = [
    {id: 1, avatar: null, name:'Силантий Васильев', number:79003347311, group:0},
    {id: 2, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5YKUvHsuVXAHV_IA5k7DP7SCLTBcSKle9w&usqp=CAU', name:'Райан Гослинг', number:1637892648, group:1},
    {id: 3, avatar: 'https://images.thevoicemag.ru/upload/img_cache/746/746eea5c3d740003888233a64069e9cf_cropped_666x666.jpg', name:'Киану Ривз', number:1224892648, group:2},
    {id: 4, avatar: 'https://n1s2.hsmedia.ru/00/f3/6e/00f36ee1392b1ff831e35d6bad012db5/536x553_0xac120003_6748852251611132255.jpg', name:'Ана де Армас', number:79003347311, group:3},
    {id: 5, avatar: null, name:'Леонардо Ди Каприо', number:79003347311, group:1},
    {id: 6, avatar: 'https://yt3.googleusercontent.com/_lLY32NYuCrK6CHHlCTizprDX37d0y0yAr_-9UDM1zilPzN1eNTXq8Z8qDETMqwPvcHz-agNOA=s900-c-k-c0x00ffffff-no-rj', name:'Маргулан Сейсембаев', number:79003347311, group:2},
    {id: 7, avatar: null, name:'Автосервис', number:79003347311, group:0},
    {id: 8, avatar: null, name:'HR ISERV', number:79003347311, group:0},
    {id: 9, avatar: null, name:'Теле2 Баланс', number:79003347311, group:0},
    {id: 10, avatar: null, name:'Турагенство🏝️', number:79003347311, group:0},
]




function Contacts () {
    const [usersList, setUsersList] = useState(users)
    const [userState, setUserState] = useState({id:null, avatar:null, name:null, number:null})
    const [nameState, setNameState] = useState(userState.name)
    const [numberState, setNumberState] = useState(userState.number)
    const [groupState, setGroupState] = useState(userState.group)

    function changeUser(index) {
        setUserState(usersList[index])
        setNameState(usersList[index].name)
        setNumberState(usersList[index].number)
        setGroupState(usersList[index].group)
    }

    function changeAvatar(img) {
        let List = usersList
        List[userState.id-1].avatar = img 
        setUsersList(List)
        setUserState({...userState, avatar:img})
    }

    function deleteAvatar() {
        let List = usersList
        List[userState.id-1].avatar = null 
        setUsersList(List)
        setUserState({...userState, avatar:null})
    }
    
    function editUser(info) {  
        if (userState.id) {
            let List = usersList
            if (info.name)
                List[userState.id-1].name = info.name
            if (info.number)
                List[userState.id-1].number = info.number
    
            for (let i = 0; i < groups.length; i++){      
                if (groups[i].group === info.group)
                    info.group = groups[i].id
            }
            List[userState.id-1].group = info.group
            setUsersList(List)
            setUserState({...userState, name:info.name, number:info.number, group:info.group})    
            }
        }

    function deleteUser() {
        if (userState.id) {            
            let List = usersList
            List.splice(userState.id-1, 1)
            for (let i = 0; i < List.length; i++){
                List[i].id = i+1 
            }
            setUserState({id:null, avatar:null, name:null, number:null})
            setNumberState('')
            setNameState('')
            setGroupState('')
            setUsersList(List)
            console.log(usersList)
        }
        

    }

    

    return (
        <div>
            <div className={styles.HeaderTextStyle}>Контакты</div>
            <div className={styles.BoxStyle}>
                <ContactSearch groups={groups}/>
                <div className={styles.ContactsBoxStyle}>
                    <ContactsList>
                    {
                        usersList.length !== 0 ? usersList.map((item, index)=>{
                            let focus = false
                            if (index === userState.id-1)         
                                focus = true
                            return(
                                <ListItem focus={focus} changeUser={changeUser} key={index} avatar={item.avatar} name={item.name} index={index} />
                            )
                            
                        }) : <h4 className={styles.EmptyTextStyle}>Тут пока пусто🥺</h4>
                    }   
                    </ContactsList>
                    <ContactInfo userState={userState} changeAvatar={changeAvatar} deleteAvatar={deleteAvatar} editUser={editUser} groups={groups} nameState={nameState} setNameState={setNameState} numberState={numberState} setNumberState={setNumberState} groupState={groupState} setGroupState={setGroupState} deleteUser={deleteUser}/>
                </div>
            </div>
        </div>
    )

}

export default Contacts;