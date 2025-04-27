import React, { useContext, useEffect, useState } from "react";
import Banner from "./Banner";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { globalContext } from "../App";
import AdminAddProductsForm from "./AdminAddProductsForm";
import products from "../productsData";

const AdminPage = () => {
  const { setNavlink, adminData } = useContext(globalContext);
  const [productsData, setProductsData] = useState(products);
  const [openForm, setOpenForm] = useState(false);
  const [editProduct, setEditProduct] = useState({
    isEdit: false,
    product: {},
  });
  const navigate = useNavigate();
  const { username } = useParams();

  const editProductHandler = (item) => {
    setOpenForm(true);
    setEditProduct({ isEdit: true, product: item });
    console.log("Edit Product:", item);
  };

  const deleteProductHandler = (item) => {
    const newProducts = productsData.filter((product) => product.id !== item.id);
    setProductsData(newProducts);
    console.log("Product Deleted:", item);
  };

  useEffect(() => {
    if (!adminData.isAdmin) {
      //alert("Please Login to Access Admin page");
      navigate("/admin/login");
      setNavlink("AdminLogin");
    }
  }, []);
  return (
    <>
      <Banner name={"Admin " + username} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "40px 20px", md: "40px 120px" },
          gap: 3,
          borderBottom: "4px solid #f5f5f5",
        }}
      >
        <Typography variant="h6">AdminPage</Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#253041",
            textTransform: "capitalize",
          }}
          onClick={() => {
            setOpenForm(!openForm);
            setEditProduct({ isEdit: false, product: {} });
          }}
        >
          {openForm ? "Close Form" : "Add Product"}
        </Button>
        {openForm && (
          // Compare this snippet from src/components/AdminPage.jsx:
          <AdminAddProductsForm
            editProduct={editProduct}
            setEditProduct={setEditProduct}
            setOpenForm={setOpenForm}
            productsData={productsData}
            setProductsData={setProductsData}
          />
        )}
      </Box>
      <Typography variant="h5" sx={{textAlign:'center',pt:4}}>Products</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
          rowGap: 4,
          m: "40px 0",
        }}
      >
        
        {productsData?.map((item) => (
          <Card
          title={openForm&&'Close the form to Edit or Delete'}
            key={item.id}
            elevation={5}
            sx={{
              minHeight: 320,
              width: 320,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "center",
              position: "relative",
              transition: "0.3s",
              backgroundColor: "#fff",
              color: "#000",
            }}
          >
            <CardMedia
              component={"img"}
              image={item.image}
              title={item.name}
              sx={{
                height: 180,
                transition: "0.3s",
                objectFit: "contain",
              }}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 1.5,
              }}
            >
              <Typography variant="p" sx={{ color: "#364253", textAlign: "left", wordBreak: 'break-word' }}>
                <strong>Name:</strong>&nbsp;{item.name}
              </Typography>
              <Typography variant="p" sx={{ color: "#364253", textAlign: "left", wordBreak: 'break-word' }}>
                <strong>Type:</strong>&nbsp;{item.type}
              </Typography>
              <Box sx={{width:'100%' ,display: "flex",gap:4,}}>
                <Button
                title="Edit Product"
                  variant="contained"
                  sx={{
                    bgcolor: "#253041",
                    textTransform: "capitalize",
                    p: "2px 8px",
                  }}
                  disabled={openForm}
                  onClick={() => editProductHandler(item)}
                >
                  Edit
                </Button>
                <Button
                title="Delete Product"
                  variant="contained"
                  sx={{
                    bgcolor: "#D63C3C",
                    textTransform: "capitalize",
                    p: "2px 8px",
                  }}
                  disabled={openForm}
                  onClick={() => deleteProductHandler(item)}
                >
                  Delete
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default AdminPage;
