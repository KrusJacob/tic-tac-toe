import React from "react";
import ReactDOM from "react-dom/client";
import Game from "./Game";
import "./index.css";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Game />
    <Footer />
  </>
);
