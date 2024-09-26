import clsx from 'clsx';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { timeSince } from '@/utils/date';
import { useChatContext } from '@/context/useChatContext';
const ChatItem = ({
  id,
  avatar,
  activityStatus,
  lastActivity,
  lastMessage,
  name,
  unreadCount
}) => {
  const {
    changeActiveChat
  } = useChatContext();
  return <div onClick={() => changeActiveChat(id)} className="p-2 border-dashed border-theme-color rounded mb-2">
      <div role="button">
        <div className="d-flex align-items-start">
          <div className="position-relative">
            <img src={avatar} alt="avatar" className="thumb-lg rounded-circle" />
            <span className="position-absolute bottom-0 end-0">
              <IconifyIcon icon="fa6-solid:circle" className={clsx('fs-10 border-2 border-theme-color', activityStatus !== 'offline' ? 'text-success' : 'text-secondary')} />
            </span>
          </div>
          <div className="flex-grow-1 ms-2 text-truncate align-self-center">
            <h6 className="my-0 fw-medium text-dark fs-14">
              {name}
              <small className="float-end text-muted fs-11">{timeSince(new Date(lastActivity))}</small>
            </h6>
            <p className="text-muted mb-0">
              {activityStatus === 'typing' ? <span className="text-primary">Typing...</span> : lastMessage}
              {unreadCount && <span className="badge float-end rounded text-white bg-success ">{unreadCount}</span>}
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default ChatItem;