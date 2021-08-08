import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined, Send } from '@material-ui/icons';
import React,{ useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import db from '../Firebase';
import "./Chat.css"
import { useStateValue } from './StateProvider';
import firebase from 'firebase';
import InputEmoji from "react-input-emoji"


function Chat() {

    const [seed, setSeed] = useState("");
    
    const {roomId} = useParams();
    const [ roomName, setRoomName ] = useState("");
    const [messages, setMessages] = useState([]);
    const [{ user },dispatch] = useStateValue();
    const [ text, setText ] = useState('');

    useEffect(() => {
             
        setSeed(Math.floor(Math.random()*5000));
       
    }, [roomId])

    const sendMesssage = (e) => {
        e.preventDefault()
        if (text !== "" ? (
       db.collection("rooms").doc(roomId).collection("messages").add({
           message : text ,
           name : user.displayName ,
           timestamp: firebase.firestore.FieldValue.serverTimestamp(),

       })):(alert("please type something")));setText("");
    };
     
     useEffect(() => {
         if(roomId) {
             db.collection("rooms").doc(roomId).onSnapshot((snapshot) =>
                  setRoomName(snapshot.data().name));

                 db.collection("rooms").doc(roomId).collection("messages").orderBy('timestamp', 'asc').onSnapshot(snapshot => (
                     setMessages(snapshot.docs.map(doc => doc.data()))
                 ))
         }
        
     }, [roomId]);

     


    return (
        <div className="chat">


           <div className="chat__header">
            
              <Avatar  src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            
               <div className="chat__headerInfo" >
                   <h3>{roomName}</h3>
                    <p>Last seen at {
                        new Date(
                            messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}</p>
               </div>
               <div className="chat__headerRight">
                   <IconButton>
                   <SearchOutlined />
                   </IconButton>    
                   <IconButton>
                    <AttachFile />
                   </IconButton> 
                   <IconButton>
                    <MoreVert />
                   </IconButton> 

               </div>
           </div> 

           <div className="chat__body">

               {messages.map((message) => (
                   
             
              
              <p className={`chat__message ${message.name === user.displayName && "chat__reciever"}`}>
                  
              <span className="chat__name">
                   {message.name} 
                   </span>
                     {message.message}
              <span className="chat__timestamp">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
              </p>  ))}
           </div>

           <div className="chat__bottom">
            
            <form>
                <InputEmoji value={text} onChange={setText} type="text" placeholder="Type a Message" />
                <Send onClick={sendMesssage} className="send"/>
            </form>
            
           </div>

        </div>
    )
}

export default Chat;
