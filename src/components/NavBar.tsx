import { Image, Stack, Text, Link } from "@chakra-ui/react";
// import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer";

const NavBar = () => {
  return (
    <Stack w={"100%"}>
      <Stack
        display={{ base: "flex", md: "none" }}
        direction={"row"}
        w={"100%"}
        bg={"rgba(103, 146, 196, 1)"}
        color={"white"}
        p={4}
        mb={0}
        alignItems={"center"}
        justifyContent={"end"}
      >
        <DrawerRoot size={"full"} placement={"start"}>
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <Stack
              display={"flex"}
              alignItems={"center"}
              justifyContent={"end"}
              direction={"row"}
            >
              <Text as={"span"}>Menu</Text>
              <RxHamburgerMenu size={"24px"} />
            </Stack>
          </DrawerTrigger>
          <DrawerContent color={"white"}>
            <DrawerHeader></DrawerHeader>
            <DrawerBody>
              <Stack display={"flex"} direction={"column"}>
                <DrawerActionTrigger asChild>
                  <Link
                    style={{ marginTop: "15px", fontSize: "18px" }}
                    href="/"
                  >
                    Home
                  </Link>
                </DrawerActionTrigger>
                <DrawerActionTrigger asChild>
                  <Link
                    style={{ marginTop: "15px", fontSize: "18px" }}
                    href="/over-ons"
                  >
                    Over Ons
                  </Link>
                </DrawerActionTrigger>

                <DrawerActionTrigger asChild>
                  <Link
                    style={{ marginTop: "15px", fontSize: "18px" }}
                    href="/diensten"
                  >
                    Diensten
                  </Link>
                </DrawerActionTrigger>
                <DrawerActionTrigger asChild>
                  <Link
                    style={{ marginTop: "15px", fontSize: "18px" }}
                    href="/afspraak-maken"
                  >
                    Afspraak Maken
                  </Link>
                </DrawerActionTrigger>
                <DrawerActionTrigger asChild>
                  <Link
                    style={{ marginTop: "15px", fontSize: "18px" }}
                    href="/contact"
                  >
                    Contact
                  </Link>
                </DrawerActionTrigger>
              </Stack>
            </DrawerBody>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      </Stack>
      <Stack
        w={"100%"}
        direction={{ base: "column", md: "row" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={{ base: "center", md: "space-between" }}
      >
        <Stack
          w={{ base: "100%", md: "35%" }}
          direction={{ base: "column", md: "row" }}
          display={"flex"}
          alignItems={"center"}
        >
          <Image
            src="https://c625951.ssl.cf3.rackcdn.com/website/81/34/872/8134872_logo.jpeg?1697945750"
            w={"30%"}
          />
          <Stack w={{ base: "100%", md: "70%" }}>
            <Text
              fontWeight={"bold"}
              fontSize={"24px"}
              textAlign={{ base: "center", md: "left" }}
            >
              StarForce Installatietechniek
            </Text>
            <Text textAlign={{ base: "center", md: "left" }}>
              Dé alleskunner op het gebied van bouw en bouwafwerking
            </Text>{" "}
          </Stack>
        </Stack>
        <Stack
          w={{ base: "100%", md: "20%" }}
          ml={{ base: "none", md: "auto" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          my={{ base: "10px", md: "0" }}
        >
          <FaFacebook
            size={"32px"}
            color="rgba(103, 146, 196, 1)"
            cursor={"pointer"}
          />
        </Stack>
      </Stack>
      <Stack
        display={{ base: "none", md: "flex" }}
        direction={"row"}
        w={"100%"}
        bg={"rgba(103, 146, 196, 1)"}
        color={"white"}
        p={4}
        mb={0}
      >
        <Link style={{ marginRight: "5%", color: "white" }} href="/">
          Home
        </Link>
        <Link style={{ marginRight: "5%", color: "white" }} href="/over-ons">
          Over Ons
        </Link>
        <Link style={{ marginRight: "5%", color: "white" }} href="/diensten">
          Diensten
        </Link>
        <Link
          style={{ marginRight: "5%", color: "white" }}
          href="/afspraak-maken"
        >
          Afspraak Maken
        </Link>
        <Link style={{ marginRight: "5%", color: "white" }} href="/contact">
          Contact
        </Link>
      </Stack>
      <Stack
        backgroundImage={
          "url(https://c625951.ssl.cf3.rackcdn.com/website/81/34/872/8134872_bg.jpg?1698180986)"
        }
        backgroundSize={{ base: "contain", lg: "cover" }}
        backgroundRepeat={"no-repeat"}
        w={"100%"}
        h={{ base: "300px", md: "650px" }}
        mt={-2}
        p={0}
      ></Stack>
    </Stack>
  );
};

export default NavBar;
