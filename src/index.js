import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { TodoContextProvider } from "./TodoContext";
import './index.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </StrictMode>
);
