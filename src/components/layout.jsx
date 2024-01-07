import { VStack, Text, Box, Flex } from "@chakra-ui/layout";
import React from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <VStack>
        <Flex
          width={"100%"}
          justifyContent={"start"}
          alignItems={"center"}
          flexDirection={"row"}
          bgColor={"whitesmoke"}
          padding={"10px"}
        >
          <Sidebar />
          <Text>This is a Top Bar</Text>
        </Flex>
        <Box width={"100%"} paddingLeft={"20px"}>
          {children}
        </Box>
      </VStack>
    </>
  );
}
