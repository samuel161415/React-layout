import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import Link from "next/link";

import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
// import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <React.Fragment>
      <Box
        //   onMouseLeave={handleMouseLeave}
        sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
      >
        <Tooltip title="Settings">
          <IconButton
            // onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
          >
            <Link href="/settings">
              <SettingsIcon sx={{ color: "#FFFFFF80" }} />
            </Link>
          </IconButton>
        </Tooltip>

        <Tooltip title="Account settings">
          <IconButton
            onMouseEnter={handleMouseEnter} // Open the menu on hover
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              sx={{ width: 24, height: 24, bgcolor: "#FFFFFF80", fontSize: 12 }}
            >
              M
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleMouseLeave} // Close the menu when the mouse leaves the menu area
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            backgroundColor: "#3D3D3D", // Background color for the menu
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "& .MuiMenuItem-root": {
              backgroundColor: "#3D3D3D", // Background color for the menu items
              color: "#FFFFFF", // Text color for the menu items
              "&:hover": {
                backgroundColor: "#4B5563", // Hover background color for the menu items
              },
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "#3D3D3D",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleMouseLeave}>
          <div className="flex flex-col items-start text-sm">
            <span>Manoo</span>
            <span>example@gmail.com</span>
          </div>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMouseLeave}>
          <span className="mr-5">Theme</span>
          <div className="bg-darkGray py-1 px-2 rounded-lg flex justify-center items-center">
            <LightModeIcon sx={{ width: 20, height: 20, mr: 1 }} />{" "}
            <NightlightRoundIcon sx={{ width: 20, height: 20, mr: 1 }} />{" "}
            <PersonalVideoIcon sx={{ width: 20, height: 20 }} />
          </div>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMouseLeave}>
          {/* <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon> */}
          Your profile
        </MenuItem>
        <MenuItem onClick={handleMouseLeave}>
          {/* <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon> */}
          Terms & policies
        </MenuItem>
        <MenuItem onClick={handleMouseLeave}>
          {/* <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon> */}
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
