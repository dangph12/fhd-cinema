'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { getUserById } from '@/helpers/data';
const ChatContext = createContext(undefined);
export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext can only be used within ChatProvider');
  }
  return context;
};
export const ChatProvider = ({
  children
}) => {
  const [activeChat, setActiveChat] = useState();
  const changeActiveChat = async userId => {
    const user = await getUserById(userId);
    if (user) setActiveChat(user);
  };
  useEffect(() => {
    changeActiveChat('101');
  }, []);
  return <ChatContext.Provider value={{
    activeChat,
    changeActiveChat
  }}>
      {children}
    </ChatContext.Provider>;
};