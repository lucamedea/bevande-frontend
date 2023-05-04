
import { Box } from "./box.jsx";

export const Layout = ({ children }) => (
  <Box
    css={{
      width: "100%"
    }}
  >
    {children}
  </Box>
);
