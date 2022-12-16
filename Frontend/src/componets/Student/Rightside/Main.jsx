import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import ListItem from "./ListItem";
import AddItem from "./AddItem";

export default function Main() {
  const [text, setText] = useState("");

  function handlechange(e) {
    setText(e.target.value);
  }

  return (
    <Box w="100%">
      <AddItem handlechange={handlechange} text={text} />
    </Box>
  );
}
