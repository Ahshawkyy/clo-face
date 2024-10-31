import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar, Menu, MenuItem } from "@mui/material";
import { useRef, useState } from "react";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Appbarr = ({showList,setShowList}) => {
  const [mobileM, setMobileM] = useState(false);
  const refMobileMenu = useRef(null);
  const renderMobileMenu = (
    <Menu
      anchorEl={refMobileMenu.current}
      open={mobileM}
      onClose={() => setMobileM(false)}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar src="./Image/mee.jpg" />{" "}
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const [largeM, setLargeM] = useState(false);
  const refMenu = useRef(null);
  const renderMenu = (
    <Menu
      anchorEl={refMenu.current}
      open={largeM}
      onClose={() => {
        setLargeM(false);
      }}
    >
      <MenuItem
        onClick={() => {
          setLargeM(false);
        }}
      >
        Profile
      </MenuItem>
      <MenuItem
        onClick={() => {
          setLargeM(false);
        }}
      >
        My account
      </MenuItem>
    </Menu>
  );
  return (
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
          onClick={()=>{
            showList==="none"?setShowList("block"):setShowList("none")
          }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 , display:{md:"none"}}}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Col-Face
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ alignItems: "center", display: { xs: "none", md: "flex" } }}>
            <IconButton 
            sx={{width:"30px",height:"30px", marginRight:"10px"}}
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>

            <IconButton
            sx={{width:"30px",height:"30px" ,marginRight:"10px"}}
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              ref={refMenu}
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={() => setLargeM(!largeM)}
              color="inherit"
            >
              <Avatar src="./Image/mee.jpg" sx={{width:"40px",height:"40px"}} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              ref={refMobileMenu}
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={() => {
                setMobileM(!mobileM);
              }}
              color="inherit"
            >
              <Avatar src="./Image/mee.jpg" />
            </IconButton>
          </Box>
        </Toolbar>
        {renderMobileMenu}
        {renderMenu}
      </AppBar>  
  );
};

export default Appbarr;
