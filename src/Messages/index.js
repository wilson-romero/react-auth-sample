import React, { useContext } from 'react';
import { MessageContext } from './MessageContext';

export default function Message() {
  const { message } = useContext(MessageContext);

  return <div>Message: {message}</div>;
}
