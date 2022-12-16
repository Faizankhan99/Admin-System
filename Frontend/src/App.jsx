import { useState } from "react";
import "./App.css";
import { Box } from "@chakra-ui/react";
import AllRoutes from "./componets/Routing/AllRoutes";

function App() {
  return (
    <Box className="App">
      <AllRoutes />
    </Box>
  );
}

export default App;
