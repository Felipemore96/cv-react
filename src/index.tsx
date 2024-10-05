import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@fontsource/roboto";
import "@fontsource/outfit";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
