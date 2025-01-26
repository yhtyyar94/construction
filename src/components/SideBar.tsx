import { Button, Image, Stack } from "@chakra-ui/react";
import React from "react";

const SideBar = () => {
  return (
    <Stack display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Image
        src="https://c625951.ssl.cf3.rackcdn.com/website/81/34/872/8134872_header.jpg?1697945750"
        alt="logo"
        w={"70%"}
      />
      <Button w={"70%"} colorPalette={"green"}>
        <a href="tel:0645546061">0645546061</a>
      </Button>
    </Stack>
  );
};

export default SideBar;
