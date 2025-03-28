import { Box, Button, styled, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Banner from "./Banner";
import { Controller, useForm } from "react-hook-form";
import { globalContext } from "../App";
import { useNavigate } from "react-router";

const AdminLogin = () => {
  const {adminData, setAdminData, setNavlink, adminCredentials } =
    useContext(globalContext);
  const [adminDetails, setAdminDetails] = useState({});
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    if (
      adminCredentials.name === data.username &&
      adminCredentials.password === data.password
    ) {
      setAdminDetails(await data);
      console.log(await data);
      setAdminData((prev)=>({...prev,isAdmin:true,username:data.username}));
      reset();
      alert("Admin Login Successful");
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate(`/admin/${data.username}`);
    }else{
        alert('Invalid Username or Password');
        reset();
    }
  };

  const AnimatedButton = styled(Button)({
    backgroundColor: "#5e8930",
    color: "white",
    overflow: "hidden",
    position: "relative",
    transition: "color 0.3s ease-in-out",
    margin: "24px 0",
    padding: "16px 0",
    borderRadius: 0,
    fontSize: "16px",
    borderRight: "4px solid #0082CF",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "100%",
      width: "100%",
      height: "100%",
      backgroundColor: "#0082CF",
      transition: "left 0.5s ease-in-out",
    },
    "&:hover::before": {
      left: 0,
    },
    "&:hover": {
      color: "white",
    },
  });
  useEffect(() => {
    setNavlink("AdminLogin");
  }, []);
  return (
    <>
      <Banner name={"Admin Login"} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "40px 20px", md: "80px 120px" },
          gap: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            //display: { xs: "block", md: "none" },
            textAlign: "center",
            mb: 2,
            fontWeight: 600,
          }}
        >
          Admin
        </Typography>
        <Box
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            width: { xs: "100%", md: "400px" },
            //height: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Controller
            name="username"
            control={control}
            rules={{ required: "User Name is required" }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="User Name"
                required
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/,
                message:
                  "Contain atleast one lowercase, uppercase, number and a special symbol, Length between 6-20 characters",
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Password"
                type="password"
                required
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />

          <AnimatedButton
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
          >
            <span style={{ zIndex: 1 }}>Login</span>
          </AnimatedButton>
        </Box>
      </Box>
    </>
  );
};

export default AdminLogin;
