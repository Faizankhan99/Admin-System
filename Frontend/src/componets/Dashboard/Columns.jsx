import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";

// AiOutlineUser
export default function Columns() {
  let item = [
    {
      Number: "1000+",
      text: "Total Registered Students",
      id_: "1",
    },
    {
      Number: "6",
      text: "Request Pending",
      id_: "2",
    },
    {
      Number: "500+",
      text: "CA",
      id_: "3",
    },
    {
      Number: "500+",
      text: "Lawyers",
      id_: "4",
    },
    {
      Number: "100+",
      text: "Doctors",
      id_: "5",
    },
    {
      Number: "100+",
      text: "Doctors",
      id_: "6",
    },
  ];

  return (
    <Box>
      <Heading as="h3" size="lg" mt="7%" mb="20px">
        Dashboard
      </Heading>
      <SimpleGrid columns={[1, 1, 4]} gap={["7%", "5%", "3%"]} mt="4%">
        <Input type="text" placeholder="Batch No." />
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Designation" />
        <Button
          bg="#00A54F"
          w={["200px", "300px", "220px"]}
          fontSize={["15px", "15px", "17px"]}
        >
          +Search
        </Button>
      </SimpleGrid>

      {/* -------------------Columns-------------------------- */}

      <SimpleGrid
        columns={["1", "1", "1", "2", "3"]}
        spacing={10}
        mt={["20%", "20%", "7%"]}
      >
        {item.map((elem, i) => (
          <>
            <Box
              display="flex"
              gap="20px"
              key={elem.id_}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
              borderRadius="13px"
              p="20px"
            >
              <Box
                bg="#E3F0EF"
                h={["75px", "70px", "95px"]}
                w={["90px", "100px", "80px"]}
                borderRadius="13px"
              >
                <Box
                  ml={["10px", "15px", "12px"]}
                  mt={["5px", "12px", "15px"]}
                  p="10px"
                  fontSize="40px"
                >
                  <AiOutlineUser color="#00A54F" />
                </Box>
              </Box>
              <Box>
                <Text
                  fontSize={["17px", "20px", "23px"]}
                  fontWeight="bold"
                  color="#00A54F"
                >
                  {elem.Number}
                </Text>
                <Text fontSize={["9px", "10px", "16px"]}>{elem.text}</Text>
              </Box>
            </Box>
          </>
        ))}
      </SimpleGrid>
    </Box>
  );
}
