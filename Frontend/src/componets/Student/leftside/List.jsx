import React from "react";
import style from "../../All.module.css";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box,
  Text,
} from "@chakra-ui/react";
import {
  AiOutlineHome,
  AiOutlineUsergroupAdd,
  AiOutlineSafety,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function LeftList() {
  const navigate = useNavigate();
  return (
    <Box mt="10%">
      <List spacing={6} ml="4%" cursor="pointer">
        <ListItem
          onClick={() => navigate("/dashboard")}
          display="flex"
          gap="4%"
          className={style.list}
        >
          <AiOutlineHome fontSize="30px" />
          <Text fontSize={["20px", "20px", "20px"]}>Dashboard</Text>
        </ListItem>

        <ListItem
          display="flex"
          gap="4%"
          className={style.list}
          onClick={() => navigate("*")}
        >
          <AiOutlineSafety fontSize="30px" />
          <Text fontSize={["20px", "20px", "20px"]}>Approvals</Text>
        </ListItem>

        <ListItem display="flex" gap="4%" className={style.list}>
          <BsTelephone fontSize="30px" />
          <Text fontSize={["18px", "18px", "20px"]}>Contact Us</Text>
        </ListItem>

        <ListItem display="flex" gap="4%" className={style.list}>
          <AiOutlineUsergroupAdd fontSize="30px" />
          <Text fontSize="20px"> Members</Text>
        </ListItem>
      </List>
    </Box>
  );
}
