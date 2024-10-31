import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Checkbox, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
const Posts = () => {
  const myPosts = [
    {
      letter: "A",
      color: "#384B70",
      userName: "Ahmed Shawky",
      img: "https://images.pexels.com/photos/2273580/pexels-photo-2273580.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      letter: "K",
      color: "#507687",
      userName: "Mohamed Ali",
      img: "https://images.pexels.com/photos/817916/pexels-photo-817916.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      letter: "V",
      color: "#FCFAEE",
      userName: "Mido Elsayed",
      img: "https://images.pexels.com/photos/89442/pexels-photo-89442.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      letter: "X",
      color: "#B8001F",
      userName: "Ibrahem Gomaa",
      img: "https://images.pexels.com/photos/16840499/pexels-photo-16840499/free-photo-of-couple-using-instagram-in-car.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      letter: "N",
      color: "#091057",
      userName: "Fahd Elsyaad",
      img: "https://images.pexels.com/photos/13397070/pexels-photo-13397070.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      letter: "Q",
      color: "#024CAA",
      userName: "Hamdy Sameh",
      img: "https://images.pexels.com/photos/5263085/pexels-photo-5263085.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      letter: "P",
      color: "#EC8305",
      userName: "Yousef Joo",
      img: "https://images.pexels.com/photos/7930487/pexels-photo-7930487.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      letter: "Y",
      color: "#DBD3D3",
      userName: "Cap. Nader",
      img: "https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const renderMenu = (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleClose}>
        Love
        <FavoriteIcon sx={{ ml: "125px" }} />
      </MenuItem>

      <MenuItem onClick={handleClose}>
        Share
        <ShareIcon sx={{ ml: "120px" }} />
      </MenuItem>
      <MenuItem onClick={handleClose}>
        BookMark
        <BookmarkIcon sx={{ ml: "90px" }} />
      </MenuItem>
      <MenuItem onClick={handleClose}>
        Turn Off Notifications
        <NotificationsOffIcon sx={{ ml: "5px" }} />
      </MenuItem>
    </Menu>
  );
const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 4 }}>
      {myPosts.map((item) => (
      
        <Card sx={{ maxWidth: {xs:"97%" ,sm : 600}, mx: "auto", my: 5 }} key={item.letter}>
          <CardHeader
            avatar={
              <Avatar sx={{
                // @ts-ignore
                color: theme.palette.getContrastText(item.color),
                bgcolor: item.color }} aria-label="recipe">
                {item.letter}
              </Avatar>
            }
            action={
              <IconButton onClick={handleClick} aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={item.userName}
            subheader="October 26, 2024"
          />
          <CardMedia component="img" height="194" image={item.img} alt="" />
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <Box flexGrow={1} />
            <Checkbox
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon sx={{ color: "orange" }} />}
            />
          </CardActions>
        </Card>
      ))}
      {renderMenu}
    </Box>
  );
};
export default Posts;
