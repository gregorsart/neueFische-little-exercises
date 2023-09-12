import { SWRConfig } from "swr";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
