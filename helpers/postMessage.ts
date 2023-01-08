import { MessageType } from './../pages/api/contact';
export const postMessage = async (messageData: MessageType) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(messageData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message);
  }
  const data = await response.json();
  return data;
};
