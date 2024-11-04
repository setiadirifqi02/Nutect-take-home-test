import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { NextUIProvider } from "@nextui-org/react";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </Provider>
  </StrictMode>
);
