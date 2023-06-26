import "./App.css";
import { Basic } from "./styled-component/1.basic";
import { Basic2 } from "./styled-component/2.mapfilter";
import TestPage from "./styled-component/3.testpage";
import { GrandFather } from "./react-hooks/usecontext/4.GrandFather";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <GrandFather />
    </>
  );
}

export default App;
