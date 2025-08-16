import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import App from "./App.jsx";

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

function MyApp() {
  return (
    <div>
      <h1>CustomReact App</h1>
    </div>
  );
}
const AnotherElement = (
  <a href="http://google.com" target="google.com">
    Visit Google
  </a>
);

const areactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "google.com",
  },
  "click to visit google"
);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App/>
  // </StrictMode>,
);
