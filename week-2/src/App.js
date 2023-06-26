import "./App.css";
import { Basic } from "./Components/1.basic";
import { Basic2 } from "./Components/2.mapfilter";
import TestPage from "./Components/3.testpage";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <TestPage title="제목입니다" contents="내용입니다" />;
    </>
  );
}

export default App;
