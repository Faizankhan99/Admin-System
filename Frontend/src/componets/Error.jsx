import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  return (
    <Box w="100%" m="auto" mt={["20%", "20%", "-3%"]}>
      <Image
        ml={["0%", "0%", "20%"]}
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
      />
      <Button ml="40%" bg="red" color="white" onClick={() => navigate("/")}>
        GO BACK
      </Button>
    </Box>
  );
}
