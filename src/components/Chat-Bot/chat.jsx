import { useState } from "react"
import axios from 'axios';

import './chat.css'
const ChatBox=()=>{
  const [question,setquestion] = useState('')
  const [answer,setanswer] = useState(null);
  const getResponse=()=>{
    if(!question){
        return
    }    
    const data = {question : question}
    axios.post('https://open-ai-chatbot-backend.onrender.com/chat-bot', data)
    .then(response => {
      console.log(response.data);
      setanswer(response.data.answer)
      
    })
    .catch(error => {
      console.log(error);
    });
    
  }  
    return(
        <>
          <h1>Chat BOT</h1>
          <h3> Type your question here : </h3>
          <input type='textarea' onChange={(e)=>{setquestion(e.target.value)}} value={question} id='input-box' />
          <div>
          <button onClick={()=> getResponse()}>
            click here to get answer
          </button>
          </div>
         {
            answer ? <div className="answer">
            {answer}
        </div>: ""
         } 
        </>
    )
}
export default ChatBox