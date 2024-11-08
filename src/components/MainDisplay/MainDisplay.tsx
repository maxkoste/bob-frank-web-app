import { Box } from "@mui/material";
import Content from "../Content/Content";
import { useState, ReactNode } from "react";
import Home from "../Pages/Home";
import Navigation from "../Navigation/Navigation";

function MainDisplay() {
  // Set initial state to be of type ReactNode
  const [renderedContent, setRenderedContent] = useState<ReactNode>(<Home />);

  return (
    <Box>
      <Navigation setRenderedContent={setRenderedContent} />
		
      <Content renderedContent={renderedContent} />
    </Box>
  );
}

export default MainDisplay;
