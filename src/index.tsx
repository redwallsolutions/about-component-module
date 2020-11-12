import React, { FC, FormEvent, useState, useCallback } from "react";
import { render } from "react-dom";
import Button from "@redwallsolutions/button-component-module";
import About from "./lib";

const App: FC = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisible((state) => !state)}>Sobre</Button>
      <About
        version="1.0.0"
        visible={visible}
        onDismiss={() => setVisible(false)}
      />
    </div>
  );
};

render(<App />, document.querySelector("#app"));
