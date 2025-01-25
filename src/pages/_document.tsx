import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      suppressHydrationWarning
      style={{ backgroundColor: "white", color: "black" }}
    >
      <Head />
      <body style={{ backgroundColor: "white", color: "black" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
