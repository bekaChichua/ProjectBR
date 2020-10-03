import React from "react";
import { GlobalStyle } from "./App.styles";

import LinksPage from "./LinksPage";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <LinksPage />
      </div>
    </>
  );
};

export default App;
