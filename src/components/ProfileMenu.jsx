import React, { useContext, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

import { useNavigate } from "react-router";
import { globalContext } from "../App.jsx";

const options = ["Admin Page", "Logout"];

const ITEM_HEIGHT = 48;

export default function ProfileMenu() {
  const { cart, setNavlink, adminData, setAdminData } = useContext(globalContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
      title="Admin"
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <ManageAccountsIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          },
        }}
      >
        {adminData.isAdmin ? (
          options.map((option) => (
            <MenuItem
              key={option}
              selected={option === selected}
              onClick={() => {
                setSelected(option);
                if (option === "Admin Page") {
                  navigate("/admin/"+adminData.username);
                  setNavlink("AdminPage");
                } else {
                  sessionStorage.removeItem("admin");
                  setAdminData((prev)=>({...prev,isAdmin:false,username:""}));
                  navigate("/admin/login");
                  setNavlink("");
                }
                handleClose();
              }}
            >
              {option}
            </MenuItem>
          ))
        ) : (
          <MenuItem
            key={"Admin Login"}
            selected={selected === "Admin Login"}
            title="Admin Login"
            onClick={() => {
              setSelected("Admin Login");
              navigate("/admin/login");
              setNavlink("AdminLogin");
              setAdminData((prev)=>({...prev,isAdmin:false,username:""}));
              handleClose();
            }}
          >
            Admin Login
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}
