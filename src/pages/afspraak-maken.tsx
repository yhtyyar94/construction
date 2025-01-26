import { Button, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function AfspraakMaken() {
  return (
    <>
      <Head>
        <title>StarForce</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack p={5}>
        <Text fontWeight={"bold"} fontSize={"32px"}>
          Afspraak Maken
        </Text>
        <Text border={"1px solid #de8f00"} bg={"rgb(255, 226, 173)"} p={3}>
          U doet een voorstel voor een afspraak. De afspraak is pas definitief
          wanneer de ondernemer het voorstel heeft bevestigd.
        </Text>
        <Text my={{ base: "10px", md: "20px" }}>
          Wilt u een afspraak maken met StarForce? Vul dan het afspraakvoorstel
          in. U kunt in het afsprakenvoorstel een tijdstip kiezen en uw product
          of dienst omschrijven. Het bericht zal worden doorgestuurd naar
          StarForce.
        </Text>
        <Button w={{ base: "100%", md: "30%" }} colorPalette={"green"}>
          Maak afspraakvoorstel
        </Button>
      </Stack>
    </>
  );
}
