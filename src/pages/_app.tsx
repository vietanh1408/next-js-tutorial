import Layout from "@/components/Layout";
import AuthContextProvider from "@/utils/context";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function App(props: AppProps) {
  return (
    <AuthContextProvider>
      <Layout {...props} />
    </AuthContextProvider>
  );
}

export default App;
