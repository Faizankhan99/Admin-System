import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Stack,
  Skeleton,
  Button,
} from "@chakra-ui/react";

import { Box } from "@chakra-ui/react";
import { GetData, GetdataId } from "../../api/Api";
export default function ListItem({ query }) {
  const [data, setData] = useState(query);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  function handleGetadata() {
    setLoading(true);
    GetData(page).then((res) => {
      // console.log(res.data);
      if (query == undefined) {
        setData(res.data);
        setLoading(false);
      } else {
        setData(query);
        setLoading(false);
      }
    });
  }

  useEffect(() => {
    handleGetadata();
  }, [query, page]);

  if (loading) {
    return (
      <Stack mt="1%">
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
      </Stack>
    );
  }

  return (
    <Box mt={["10%", "5%", "4%"]} overflow="scroll">
      <Table border="none" cursor="pointer">
        <Thead>
          <Tr>
            <Th color="black" fontSize={["8px", "20px", "20px"]}>
              Name
            </Th>
            <Th color="black" fontSize={["7px", "20px", "20px"]}>
              Batch No.
            </Th>
            <Th color="black" fontSize={["7px", "20px", "20px"]}>
              Location
            </Th>
            <Th color="black" fontSize={["7px", "20px", "20px"]}>
              Experience
            </Th>
            <Th color="black" fontSize={["7px", "20px", "20px"]}>
              Contact
            </Th>
          </Tr>
        </Thead>
        {data &&
          data.map((item) => (
            <Tbody>
              <Tr key={item.id} _hover={{ bgColor: "yellow" }}>
                <Td color="#00A54F" fontSize={["10px", "20px", "17px"]}>
                  {item.name}
                </Td>
                <Td fontSize={["10px", "20px", "17px"]}>{item.batch}</Td>
                <Td fontSize={["10px", "20px", "17px"]}>{item.location}</Td>
                <Td fontSize={["10px", "20px", "17px"]}>
                  {item.experience} yrs
                </Td>
                <Td fontSize={["10px", "20px", "17px"]} color="#00A54F">
                  {item.contact}
                </Td>
              </Tr>
            </Tbody>
          ))}
      </Table>

      <Box
        ml="40%"
        mt={["6%", "4%", "3%"]}
        // border="1px solid red"
        display="flex"
        gap="20px"
      >
        <Button
          bg="black"
          color="white"
          disabled={page == 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </Button>
        <span disabled m="20px">
          {page}
        </span>
        <Button bg="black" color="white" onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </Box>
    </Box>
  );
}
