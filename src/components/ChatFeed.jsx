import React from 'react';
import  MessageForm from './MessageForm';
import  MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) => {
  // console.log('props', props)

  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat]

  // console.log(chat, userName, messages)
  const renderMessages = () => {
    const keys = Object.keys(messages);
    
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index-1]
      const isMyMessage = userName === message.sender.username;

      return(
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className="message-block">
            {
              isMyMessage 
              ? <MyMessage message={message} />
              : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
            }
          </div>
          <div 
            className="read-receips" 
            style={{ marginRigth: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}
          >
            read-receips
          </div>
        </div>
      );
    })
    // console.log('keys', keys)
  }

  if(!chat) return 'Loading...';

  return(
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map(person => `${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  )
}

export default ChatFeed;