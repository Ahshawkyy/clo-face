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
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

function App() {
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  // const [open,setOpen]=useState(false);
  // const closeMenu=()=>{
  //   setOpen(false)
  // }

  // const inputElement = useRef(null)
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

      {/* 
      <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState> */}

      {/* <Button
ref={inputElement}
sx={{marginLeft:"199px"}}
        id="basic-button"
        variant="contained"
      onClick={()=>{
        setOpen(!open)
      }}
      >
        Dashboard
      </Button>
      <Menu
      
        id="basic-menu"
        anchorEl={inputElement.current}
        open={open}
        onClose={closeMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={closeMenu}>Profile</MenuItem>
        <MenuItem onClick={closeMenu}>My account</MenuItem>
        <MenuItem onClick={closeMenu}>Logout</MenuItem>
      </Menu> */}
    </ThemeProvider>
  );
}

export default App;
