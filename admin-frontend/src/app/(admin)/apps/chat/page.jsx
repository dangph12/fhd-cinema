import { ChatProvider } from '@/context/useChatContext';
import ChatArea from './components/ChatArea';
import ChatListPanel from './components/ChatListPanel';
import { Col, Row } from 'react-bootstrap';
import PageMetaData from '@/components/PageMetaData';
const Chat = () => {
  return <>
      <PageMetaData title="Chat" />
      <Row>
        <Col xs={12}>
          <ChatProvider>
            <ChatListPanel />
            <ChatArea />
          </ChatProvider>
        </Col>
      </Row>
    </>;
};
export default Chat;