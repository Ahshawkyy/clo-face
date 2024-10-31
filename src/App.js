import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Stack,
  Box,
  Divider,
} from "@mui/material";
import { useMemo, useState } from "react";
import getDesignTokens from "styles/MyTheme";
import Appbarr from "components/Appbarr";
import Listt from "components/List";
import Posts from "components/Posts";
import Online from "components/Online";
import AddPosts from "components/AddPosts";
function App() {
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [showList, setShowList] = useState("none");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={theme.palette.mode}>
        <Appbarr showList={showList} setShowList={setShowList} />
        <Stack 
         divider={<Divider orientation="vertical" flexItem />}
        sx={{ flexDirection: "row" }}>
          <Listt
            setmyMOde={setmyMOde}
            theme={theme}
            showList={showList}
            setShowList={setShowList}
          />
          <Posts />
          <Online />
          </Stack>
          <AddPosts />
      </Box>
    </ThemeProvider>
  );
}
export default App;
