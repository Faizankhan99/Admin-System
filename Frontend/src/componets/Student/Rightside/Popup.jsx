import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
  FormLabel,
} from "@chakra-ui/react";
import { GetData, PostData } from "../../api/Api";
import { useEffect } from "react";

const initial = {
  name: "",
  batch: "",
  location: "",
  experience: "",
  contact: "",
};
export function Popup({ isOpen, setIsopen }) {
  const [text, setText] = useState(initial);
  //   const [data, setData] = useState();

  function handlechange(e) {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  }

  function onClose() {
    setIsopen(false);
  }
  // console.log(text);
  function Submitdata(e) {
    e.preventDefault();
    PostData(text).then((res) => {
      console.log(res);
    });
    onClose();
  }

  useEffect(() => {
    GetData();
  }, [text]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ADD Entry </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box gap="20px">
              <form action="" onSubmit={Submitdata}>
                <FormLabel ml="3px">Name</FormLabel>
                <Input
                  placeholder="Enter Name"
                  borderBottom="1px solid black"
                  value={text.value}
                  name="name"
                  onChange={handlechange}
                />
                <FormLabel ml="3px">Batch No</FormLabel>
                <Input
                  placeholder="Enter Batch No.."
                  borderBottom="1px solid black"
                  value={text.value}
                  name="batch"
                  onChange={handlechange}
                />
                <FormLabel ml="3px">Location</FormLabel>
                <Input
                  placeholder="Enter Location"
                  borderBottom="1px solid black"
                  value={text.value}
                  name="location"
                  onChange={handlechange}
                />
                <FormLabel ml="3px">Experience</FormLabel>
                <Input
                  placeholder="Enter Experience"
                  borderBottom="1px solid black"
                  value={text.value}
                  name="experience"
                  onChange={handlechange}
                />
                <FormLabel ml="3px">Contact No.</FormLabel>
                <Input
                  placeholder="Enter Contact No."
                  borderBottom="1px solid black"
                  value={text.value}
                  name="contact"
                  onChange={handlechange}
                />
                <Input
                  type="submit"
                  mt="5%"
                  //   ml="30%"
                  bg="red"
                />
              </form>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
