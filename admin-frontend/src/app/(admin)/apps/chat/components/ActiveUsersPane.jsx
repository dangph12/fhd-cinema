import { TabPane } from 'react-bootstrap';
import ChatItem from './ChatItem';
const ActiveUsersPane = ({
  chats
}) => {
  return <TabPane eventKey="Active" className="fade" role="tabpanel">
      {chats.filter(user => user.activityStatus !== 'offline').map(chat => <ChatItem key={chat.id} {...chat} />)}
    </TabPane>;
};
export default ActiveUsersPane;