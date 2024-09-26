import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useCallback, useEffect, useRef, useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { messages } from '@/assets/data/apps';
import TextFormInput from '@/components/form/TextFormInput';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import SimplebarReactClient from '@/components/wrappers/SimplebarReactClient';
import { useChatContext } from '@/context/useChatContext';
import { addOrSubtractMinutesFromDate, timeSince } from '@/utils/date';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import avatar10 from '@/assets/images/users/avatar-10.jpg';
const AlwaysScrollToBottom = () => {
  const elementRef = useRef(null);
  useEffect(() => {
    if (elementRef?.current?.scrollIntoView) elementRef.current.scrollIntoView({
      behavior: 'smooth'
    });
  });
  return <div ref={elementRef} />;
};
const UserMessage = ({
  message,
  toUser
}) => {
  const received = message.from.id === toUser.id;
  return <div className={clsx('d-flex', {
    'flex-row-reverse': received
  })}>
      <img src={message.from.avatar} alt="user-avatar" className="rounded-circle thumb-md" />
      <div className={clsx('chat-box w-100', received ? 'me-1 reverse' : 'ms-1')}>
        <div className="user-chat">
          <p>{message.message}</p>
        </div>
        <div className="chat-time">{timeSince(new Date(message.sentOn))}</div>
      </div>
    </div>;
};
const ChatArea = () => {
  const {
    activeChat
  } = useChatContext();
  const [userMessages, setUserMessages] = useState([]);
  const messageSchema = yup.object({
    newMessage: yup.string().required('Please enter message')
  });
  const {
    reset,
    handleSubmit,
    control
  } = useForm({
    resolver: yupResolver(messageSchema)
  });
  const [toUser] = useState({
    id: '103',
    name: 'Gilbert Chicoine',
    avatar: avatar10,
    handle: '@gilbert',
    role: 'User',
    source: 'Direct',
    status: 'Active',
    email: 'jamesbridge@teleworm.us',
    lastMessage: 'Hey! Okay, thank you for letting me know. See you!',
    lastActivity: addOrSubtractMinutesFromDate(1),
    phoneNo: '456 9595 9594',
    activityStatus: 'typing'
  });
  const getMessagesForUser = useCallback(() => {
    if (activeChat) {
      setUserMessages(messages.filter(m => m.to.id === toUser.id && m.from.id === activeChat.id || toUser.id === m.from.id && m.to.id === activeChat.id));
    }
  }, [activeChat, toUser]);
  useEffect(() => {
    getMessagesForUser();
  }, [activeChat]);
  const sendChatMessage = values => {
    if (activeChat) {
      const newUserMessages = [...userMessages];
      newUserMessages.push({
        id: (userMessages.length + 1).toString(),
        from: toUser,
        to: activeChat,
        message: values.newMessage ?? '',
        sentOn: addOrSubtractMinutesFromDate(0.1)
      });
      setTimeout(() => {
        const otherNewMessages = [...newUserMessages];
        otherNewMessages.push({
          id: (userMessages.length + 1).toString(),
          from: activeChat,
          to: toUser,
          message: values.newMessage ?? '',
          sentOn: addOrSubtractMinutesFromDate(0.1)
        });
        setUserMessages(otherNewMessages);
      }, 1000);
      setUserMessages(newUserMessages);
      reset();
    }
  };
  if (activeChat) {
    const {
      name,
      lastActivity
    } = activeChat;
    return <div className="chat-box-right">
        <div className="p-3 d-flex justify-content-between align-items-center card-bg rounded">
          <div role="button" className="d-flex align-self-center">
            <div className="flex-shrink-0">
              <img src={activeChat.avatar ?? avatar1} alt="user" className="rounded-circle thumb-lg" />
            </div>
            <div className="flex-grow-1 ms-2 align-self-center">
              <div>
                <h6 className="my-0 fw-medium text-dark fs-14">{name}</h6>
                <p className="text-muted mb-0">Last seen: {timeSince(new Date(lastActivity))}</p>
              </div>
            </div>
          </div>
          <div className="d-none d-sm-inline-block align-self-center mb-1">
            <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Call</Tooltip>}>
              <span role="button" className="fs-22 me-2 text-muted">
                <IconifyIcon icon="iconoir:phone" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Video call</Tooltip>}>
              <span role="button" className="fs-22 me-2 text-muted">
                <IconifyIcon icon="iconoir:video-camera" />
              </span>
            </OverlayTrigger>
            <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Delete</Tooltip>}>
              <span role="button" className="fs-22 me-2 text-muted">
                <IconifyIcon icon="iconoir:trash" />
              </span>
            </OverlayTrigger>
            <span role="button" className="fs-22 text-muted">
              <IconifyIcon icon="iconoir:menu-scale" />
            </span>
          </div>
        </div>
        <SimplebarReactClient className="chat-body">
          <div className="chat-detail">
            {userMessages.map(message => {
            return <UserMessage key={message.id} message={message} toUser={toUser} />;
          })}

            <AlwaysScrollToBottom />
          </div>
        </SimplebarReactClient>
        <div className="chat-footer">
          <form className="d-flex" onSubmit={handleSubmit(sendChatMessage)}>
            <TextFormInput containerClassName="w-100" name="newMessage" control={control} placeholder="Type something here..." noValidate />
            <div className="text-end">
              <div className="chat-features icons-center flex-nowrap">
                <div className="d-none d-sm-inline-flex ">
                  <span role="button">
                    <IconifyIcon icon="iconoir:camera" />
                  </span>
                  <span role="button">
                    <IconifyIcon icon="iconoir:attachment" />
                  </span>
                  <span role="button">
                    <IconifyIcon icon="iconoir:microphone" />
                  </span>
                </div>
                <button type="submit" role="button" className="btn p-0 text-primary">
                  <IconifyIcon icon="iconoir:send-solid" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>;
  }
};
export default ChatArea;