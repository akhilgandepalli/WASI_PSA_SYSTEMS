import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { globalContext } from "../App";
import { useNavigate } from "react-router";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialog-paper": {
    width: "800px", // Fixed width
    maxWidth: "900px", // Prevents resizing beyond this width
  },
}));

export default function AfterAddCart({
  openDialog,
  setOpenDialog,
  productItem,
}) {
  //const [open, setOpen] = useState(false);
  const { cart, setCart } = useContext(globalContext);
  const navigate = useNavigate()

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleViewCart =()=>{
    navigate('/cart');
    window.scrollTo(0,0)
  }

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openDialog}
        width={500}
        onClick={(e) => e.stopPropagation()}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 0,
            border: "none",
          }}
          id="customized-dialog-title"
        >
          <Box
            sx={{
              width: "fit-content",
              color: "#13ce66",
              borderBottom: "2px solid #13ce66",
              fontSize: "14px",
              fontWeight: 100,
              padding: 2,
            }}
          >
            Added to Cart
          </Box>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          dividers
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ textAlign: "center", padding: "10px 0 20px 0" }}
          >
            {productItem.name}
          </Typography>
          <Box
            sx={{
              width: { xs: "100%", md: "400px" },
              height: { md: "280px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #d6d6d6",
              mb: { xs: 4, md: 0 },
            }}
          >
            <Box
              component={"img"}
              src={productItem.image}
              sx={{
                objectFit: "contain",
                maxHeight: { md: "250px" },
                maxWidth: { xs: "100%", md: "auto" },
              }}
            />
          </Box>
          <Typography
            sx={{
              padding: "20px 0 0 0",
              color: "#364253",
              borderBottom: "1px dotted #364253",
              fontSize: "14px",
            }}
          >
            Your cart has{" "}
            {cart.length > 1 ? cart.length + " item(s)" : cart.length + " item"}
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            autoFocus
            sx={{ width: "200px", textTransform: "capitalize", p: 1 }}
            onClick={handleViewCart}
          >
            View Cart
          </Button>
          <Button
            variant="outlined"
            autoFocus
            sx={{ width: "200px", textTransform: "capitalize", p: 1 }}
            onClick={handleClose}
          >
            Continue <Typography variant="button" sx={{display:{xs:'none',md:'inline',textTransform: "capitalize"}}}>&nbsp;Shopping</Typography>
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
