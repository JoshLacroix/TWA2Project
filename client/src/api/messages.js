import { BASE_URL } from "../config";

const getConversations = async (user) => {
  try {
    const res = await fetch(BASE_URL + "api/messages", {
      headers: {
        "x-access-token": user.token,
      },
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const getMessages = async (user, conversationId) => {
  try {
    // Gets the messages from the back-end
    const res = await fetch(BASE_URL + "api/messages/" + conversationId, {
      headers: {
        "x-access-token": user.token,
      },
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const sendMessage = async (user, message, recipientId) => {
  try {
    const res = await fetch(BASE_URL + "api/messages/" + recipientId, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user.token,
      },
      body: JSON.stringify(message),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const deleteMessage = async (user, messageId) => {
  try {
    console.log(messageId)
    const res = await fetch(BASE_URL + "api/messages/" + messageId, {
      method: "DELETE",
      headers: {
        "x-access-token": user.token,
      },
    });
    return await res.json();
  } catch (err) {
    console.error("Failed to delete message:", err);
    throw err;
  }
};

export { getConversations, getMessages, sendMessage, deleteMessage };