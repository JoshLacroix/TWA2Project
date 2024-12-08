import { Avatar, Card, useTheme, IconButton } from "@mui/material";
import React from "react";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";
import { AiOutlineDelete } from "react-icons/ai";

const Message = (props) => {
  const { conservant, message, onDelete, currentUser } = props;
  const username = conservant.username;
  const theme = useTheme();

  let styles = {};
  if (message.direction === "to") {
    styles = { justifyContent: "flex-start" };
  } else if (message.direction === "from") {
    styles = {
      messageColor: theme.palette.grey["100"],
      justifyContent: "flex-end",
    };
  }

  return (
    <HorizontalStack
      sx={{ paddingY: 1, width: "100%" }}
      spacing={2}
      justifyContent={styles.justifyContent}
      alignItems="flex-end"
    >
      {message.direction === "to" && (
        <UserAvatar username={username} height={30} width={30} />
      )}
      <Card
        sx={{
          borderRadius: "25px",
          backgroundColor: styles.messageColor,
          borderWidth: "1px",
          paddingY: "12px",
          maxWidth: "70%",
          paddingX: 2,
          position: "relative",
        }}
      >
        {message.content}
        {message.direction === "from" && (
          <IconButton
            onClick={() => onDelete(message)}
            size="small"
          >
            <AiOutlineDelete />
          </IconButton>
        )}
      </Card>
    </HorizontalStack>
  );
};

export default Message;
