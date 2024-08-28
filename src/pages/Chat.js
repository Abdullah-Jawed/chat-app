import React from 'react'
import { useParams } from 'react-router-dom';

const Chat = () => {
  const param = useParams();
  console.log(param.user_id)
  return (
    <div>Chat</div>
  )
}

export default Chat