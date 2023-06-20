import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppContextProvider from "../src/hooks/authContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}
