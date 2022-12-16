import {
  Box,
  Divider,
  Image,
  Avatar,
  Select,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import LeftList from "./List";

export default function LeftMain() {
  const navigate = useNavigate();
  return (
    <Box w="90%" m="auto">
      <Image
        w="85%"
        m="auto"
        mt="10%"
        src="https://naava.in/assets/img/naava%20home/naava%20black.png"
      />

      <Divider mt="9%" />
      <Box
        display="flex"
        gap="14px"
        onClick={() => navigate("/")}
        cursor="pointer"
      >
        <Avatar
          mt={["4%", "4%", "6%"]}
          w={["20%", "15%", "20%"]}
          h={["30px", "40px", "56px"]}
        />
        <Box mt="3%">
          <Text
            fontSize={["12px", "15px", "24px"]}
            fontWeight="medium"
            color="white"
          >
            Faizan Khan
          </Text>
          <Text
            fontSize={["12px", "15px", "20px"]}
            fontWeight="hairline"
            color="lightcyan"
          >
            Student
          </Text>
        </Box>
      </Box>
      <Divider mt="5%" />

      <LeftList />
    </Box>
  );
}
