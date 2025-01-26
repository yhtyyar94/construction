import React from "react";
import { Box, Button, Stack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  return (
    <Stack bg={"rgba(103, 146, 196, 1)"} color={"white"}>
      <Stack
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        my={5}
        w={"100%"}
        bg={"rgba(103, 146, 196, 1)"}
        p={5}
        color={"white"}
      >
        <Stack
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          w={{ base: "100%", md: "40%" }}
        >
          <VStack
            w={{ base: "100%", md: "50%" }}
            display={"flex"}
            justifyContent={"start"}
            alignItems={"start"}
            pl={{ base: 5, md: 0 }}
          >
            <Box>
              <Text fontWeight={"bold"} mb={5}>
                StarForce Installatietechniek
              </Text>
              <Text>Roodborstlaan 16, 3722 CK Bilthoven</Text>
              <Text>Maandag - Vrijdag: 9:00 - 17:00</Text>
              <Text>Zaterdag: 9:00 - 12:00</Text>
              <Text>Zondag: Gesloten</Text>
              <Box mt={5}>
                <Button
                  variant={"solid"}
                  _hover={{ bg: "#20a2c6" }}
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/dir//Roodborstlaan+16,+3722+CK+Bilthoven"
                    )
                  }
                >
                  Routebeschrijving
                </Button>
              </Box>
            </Box>
          </VStack>
          <VStack
            w={{ base: "100%", md: "50%" }}
            display={"flex"}
            justifyContent={"start"}
            alignItems={"start"}
            pl={{ base: 5, md: 0 }}
          >
            <Box>
              <Text fontWeight={"bold"} mb={5}>
                Contact
              </Text>
              <Text>Email: ahmet@karabulut.nl</Text>
              <Text>Telefoon: 0645546061</Text>
              <Text>WhatsApp: 0645546061</Text>
            </Box>
          </VStack>
        </Stack>
        <Stack w={{ base: "100%", md: "60%" }} h={"400px"}>
          <iframe
            height={"100%"}
            style={{ borderRadius: "10px" }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCMw3DsPC4Sdrb2rwWiMMElB88hDDavDZg&amp;q=52.1278469,5.2134492"
          ></iframe>
        </Stack>
      </Stack>
      <Stack w={"100%"} borderTop={"1px solid white"} p={5}>
        <Text textAlign={"center"}>
          All rights reserved StarForce {new Date().getFullYear()} -{" "}
          <Link href={"/privacy-statement"}>Privacy- en cookieverklaring</Link>
        </Text>
      </Stack>
    </Stack>
  );
};

export default Footer;
