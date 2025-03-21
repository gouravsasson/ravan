import { createRoot } from "react-dom/client";
import "./styles.css";
import "./index.css";
import App from "./App";

function Root() {
  return (
    <>
      <App />
    </>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
