import { Col, Row, TabPane } from 'react-bootstrap';
import ChatItem from './ChatItem';
const MessagesPane = ({
  chats
}) => {
  return <TabPane eventKey="Messages" className="fade" role="tabpanel">
      <Row>
        <Col>
          {chats.map(chat => <ChatItem key={chat.id} {...chat} />)}
        </Col>
      </Row>
    </TabPane>;
};
export default MessagesPane;