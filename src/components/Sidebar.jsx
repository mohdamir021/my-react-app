import React from "react";
import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button onClick={onOpen} marginX={"20px"}>
        {">"}
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerCloseButton />
        <DrawerOverlay />
        <DrawerContent>This is a sidebar</DrawerContent>
      </Drawer>
    </div>
  );
}
