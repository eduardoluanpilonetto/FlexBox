import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/header";
import { Dashboard } from "./components/dashboard"

Modal.setAppElement('#root');

export function App() {

  return (
    <>
      <GlobalStyle />
      <Header/>
      <Dashboard/>
    </>
  );
}

