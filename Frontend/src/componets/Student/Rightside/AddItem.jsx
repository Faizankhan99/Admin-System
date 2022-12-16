import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Popup } from "./Popup";
import ListItem from "./ListItem";
import { GetdataId } from "../../api/Api";
export default function AddItem({ handlechange, handleAdd, text }) {
  const [isOpen, setIsopen] = useState(false);
  const [query, setQuery] = useState();
  function onClickbutton() {
    setIsopen(true);
  }
  function handledataid() {
    // console.log(text);
    GetdataId(text).then((res) => {
      console.log(res.data);
      setQuery(res.data);
    });
  }

  return (
    <Box>
      <Heading as="h3" size="lg" mt="3%" mb="20px">
        Doctors
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap="10%">
        <Box display="flex" gap="1%">
          <Text fontSize={["15px", "22px", "22px"]}>Show</Text>
          <Input type="number" w={["50px", "50px", "70px"]} />
          <Text fontSize={["15px", "22px", "22px"]}>entries</Text>
        </Box>
        <Box w="100%" display="flex" gap="20px">
          <InputGroup w="100%">
            <Input type="text" placeholder="Search" onChange={handlechange} />
            <InputRightAddon
              children="🔍"
              onClick={handledataid}
              color="gray.300"
            />
          </InputGroup>
          <Button
            onClick={onClickbutton}
            bg="#00A54F"
            w={["50px", "200px", "100px"]}
            fontSize={["8px", "8px", "md"]}
          >
            + Add New
          </Button>
        </Box>
      </SimpleGrid>
      <Popup isOpen={isOpen} setIsopen={setIsopen} />
      <ListItem query={query} />
    </Box>
  );
}
