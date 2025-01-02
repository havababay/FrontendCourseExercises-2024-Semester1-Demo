import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const menuItems = [
    { name: "My Bookings", path: "/bookings" },
    { name: "Manage Destinations", path: "/destinations" },
    { name: "Manage Flights", path: "/flights" },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ display: 'flex', flexDirection: 'row' }}>
        <IconButton
          onClick={handleClick}
          sx={{ mr: 1, ml: 1 }}
          size="large"
          edge="start"
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          anchorEl={anchorEl}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.name}
              onClick={() => {
                handleClose();
                navigate(item.path);
              }}
            >
              {item.name}
            </MenuItem>
          ))}
        </Menu>
          <Typography variant="h6" component="div" sx={{ 
              flexGrow: 1, 
              textAlign: 'center', 
              display: 'flex', 
              alignItems: 'center' 
            }} onClick={() => navigate('/')}>
            OnoAir
          </Typography>
      </AppBar>
    </Box>
  );
}
