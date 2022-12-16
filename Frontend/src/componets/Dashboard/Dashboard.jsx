import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import LeftMain from "../Student/leftside/LeftMain";
import Columns from "./Columns";

export default function Dashboard() {
  return (
    <Box>
      <Box display="flex">
        <Box w={["40%", "30%", "20%"]} bg="#00A54F" h="800">
          <LeftMain />
        </Box>
        <Box w={["60%", "30%", "80%"]} padding="2%">
          <Columns />
        </Box>
      </Box>
    </Box>
  );
}
