import type { AppProps } from "next/app";
import { Provider } from "@/components/ui/provider";
import NavBar from "@/components/NavBar";
import { Stack } from "@chakra-ui/react";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Stack
        w={{ base: "100%", md: "80%" }}
        m={"auto"}
        mt={{ base: "0", md: "50px" }}
      >
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </Stack>
    </Provider>
  );
}
