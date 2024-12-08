import { Avatar, Card, useTheme, IconButton } from "@mui/material";
import React from "react";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";
import { MdDelete } from "react-icons/md";

const Message = (props) => {
  const { conservant, message, onDelete } = props;
  const username = conservant.username;
  const theme = useTheme();

  let styles = {};
  if (message.direction === "to") {
    styles = {
      justifyContent: "flex-start",
    };
  } else if (message.direction === "from") {
    styles = {
      messageColor: theme.palette.grey["100"],
      justifyContent: "flex-end",
    };
  }

  const handleDelete = () => {
    if (onDelete && typeof onDelete === "function") {
      onDelete(message.id);
    }
  };

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
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {message.content}
        {message.direction === "from" && (
          <IconButton
            aria-label="delete"
            size="small"
            sx={{ marginLeft: 1 }}
            onClick={handleDelete}
          >
            <MdDelete/>
          </IconButton>
        )}
      </Card>
    </HorizontalStack>
  );
};

export default Message;
