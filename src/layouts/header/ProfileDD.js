import React, { useEffect } from "react";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import jsonwebtoken from "jsonwebtoken";
import { useRouter } from "next/router";
import {
  Box,
  Menu,
  Typography,
  Link,
  ListItemButton,
  List,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";
const ProfileDD = () => {
  const router = useRouter();
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const [username, setUsername] = React.useState("");
  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };
  useEffect(() => {
    setName();
  }, [router.query, setName]);

  const setName = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const userNameFromToken = jsonwebtoken.verify(
          token,
          process.env.NEXT_PUBLIC_SECRET_KEY
        );
        userNameFromToken && setUsername(userNameFromToken.email);
      } catch {
        router.push("/");
      }
    }
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const userEmailFromToken = jsonwebtoken.verify(
        token,
        process.env.NEXT_PUBLIC_SECRET_KEY
      );
      const body = { email: userEmailFromToken.email, mode: false };
      await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateSellerMode`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      router.push("/");
    }
  };

  return (
    <>
      <Button
        aria-label="menu"
        color="inherit"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick4}
      >
        <Box display="flex" alignItems="center">
         
          <Box
            sx={{
              display: {
                xs: "flex",
                sm: "flex",
              },
              alignItems: "center",
            }}
          >
            <Typography
              color="textSecondary"
              variant="h5"
              fontWeight="400"
              sx={{ ml: 1 }}
            >
            </Typography>
            <Typography
              variant="h5"
              fontWeight="700"
              sx={{
                ml: 1,
              }}
            >
              <div className="border-2 border-blue-500 bg-slate-600 text-white rounded-full p-[4px] font-thin h-8 w-8 flex items-center justify-center" >{username?.slice(0, 2).toUpperCase()}</div>
            </Typography>
            <FeatherIcon icon="chevron-down" width="20" height="20" />
          </Box>
        </Box>
      </Button>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl4}
        keepMounted
        open={Boolean(anchorEl4)}
        onClose={handleClose4}
        sx={{
          "& .MuiMenu-paper": {
            width: "385px",
          },
        }}
      >
        <Box>
          
          <Divider />
          <Box p={2}>
            <Link to="/">
              <div
                onClick={handleLogout}
                className="font-extrabold cursor-pointer text-center"
                variant="contained"
                color="primary"
              >
                Logout from Admin
              </div>
            </Link>
          </Box>
        </Box>
      </Menu>
    </>
  );
};

export default ProfileDD;
