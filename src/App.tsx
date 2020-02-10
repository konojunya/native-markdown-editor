import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";
import { PWABanner } from "./components/PWABanner";
import { useSelector } from "react-redux";
import { RootState } from "./core/reducer";
import { isPWA } from "./utils/PWAUtils";

const App = () => {
  const showPwaBanner = useSelector(
    (state: RootState) => state.app.showPWABanner
  );

  return (
    <>
      <Header />
      <div className="App">
        <Editor />
        <Preview />
      </div>

      {showPwaBanner && !isPWA() && <PWABanner />}
    </>
  );
};

export default App;
