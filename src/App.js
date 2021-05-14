import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  return(
    <ChatEngine
      height="100vh"
      projectID="0d50fd6b-dcc1-4639-9c1c-9ba75d3b2c0e"
      userName="alex"
      userSecret="123456"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
    />
  )
}

export default App;