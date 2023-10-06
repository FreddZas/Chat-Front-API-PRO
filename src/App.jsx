import { ThemeProvider } from "@mui/material";
import { BrowserRouter, HashRouter, Router } from "react-router-dom";
import theme from "./theme/newTheme";
import ChatRouter from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <ChatRouter />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
