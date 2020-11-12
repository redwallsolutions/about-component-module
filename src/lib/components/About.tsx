import React from "react";
import { AboutProps } from "./interfaces";
import Modal from "@redwallsolutions/m-modal-component-module";
import Button from "@redwallsolutions/button-component-module";

const style = {
  margin: 0,
  textAlign: "center" as any,
  color: "rgb(80,80,80)",
};
function About(props: AboutProps) {
  const { version = "1.0.0", visible, height = "350px", onDismiss } = props;
  const getCurrentVersion = () => localStorage.getItem("rw-sw-v");
  const update = () => {
    localStorage.clear();
    location.reload();
  };
  return (
    <Modal isOpened={visible} height={height} onDismiss={onDismiss}>
      <h5 style={{ ...style, marginTop: 10 }}>
        <small>Versão instalada</small>
        <br />
        <strong>{getCurrentVersion() || "1.0.0"}</strong>
      </h5>
      <br />
      <h4 style={style}>
        <small>Versão atual</small>
        <br />
        <strong>{version}</strong>
      </h4>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 40,
          padding: "0 50px",
        }}
      >
        <Button onClick={update} border="fullrounded" shouldFitContainer>
          Atualizar
        </Button>
      </div>
    </Modal>
  );
}

export default About;
