import { createRoot } from "react-dom/client";
import App, { Subtract, Add } from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <>
    <Add />
    <App/>
    <Subtract/>
  </>

);
