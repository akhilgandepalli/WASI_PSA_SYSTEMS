import React, { useEffect, useRef, useState } from "react";
import { useForm, Controller, set } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Typography,
  styled,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AdminAddProductsForm = ({
  editProduct,
  setEditProduct,
  setOpenForm,
  productsData,
  setProductsData,
}) => {
  const newId = productsData.map((e)=>e.id).reduce((acc,e)=>acc<e?e:acc,0)+1;
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: editProduct?.product?.id ?? newId,
      name: editProduct?.product?.name ?? "",
      type: editProduct?.product?.type ?? "",
      desc: editProduct?.product?.desc ?? "",
      image: editProduct?.product?.image ?? null,
    },
  });
  const [imagePreview, setImagePreview] = useState(
    editProduct?.product?.image ?? null
  );
  const fileInputRef = useRef(editProduct?.product?.image ?? null);

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

  const onSubmit = (data) => {
    // update the product
    if (editProduct.isEdit) {
        //editProduct
      const index = productsData.findIndex((item) => item.id === data.id);
      setProductsData((prev) => {
        const newProducts = [...prev];
        newProducts[index] = data;
        return newProducts;
      }); 
      setEditProduct({ isEdit: false, product: {} });
    } else {
        // new product
      setProductsData((prev) => [...prev, data]);
    }
    console.log(data);
    reset();
    handleRemoveImage();
    setOpenForm(false);
  };

  const handleImageChange = (event, field) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        field.onChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleRemoveImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  useEffect(() => {
    editProduct.isEdit ? window.scrollTo({ top: 400, behavior: "smooth" }) : "";
    console.log("def values", editProduct);
  });
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: { xs: "100%", md: "400px" },
        //height: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Controller
        name="name"
        control={control}
        rules={{ required: "Name is required" }}
        render={({ field }) => (
          <TextField
            label="Name"
            {...field}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />

      <Controller
        name="type"
        control={control}
        rules={{ required: "Type is required" }}
        render={({ field }) => (
          <TextField
            label="Type"
            {...field}
            error={!!errors.type}
            helperText={errors.type?.message}
          />
        )}
      />

      <Controller
        name="desc"
        control={control}
        rules={{ required: "Description is required" }}
        render={({ field }) => (
          <TextField
            label="Description"
            multiline
            rows={5}
            {...field}
            error={!!errors.desc}
            helperText={errors.desc?.message}
          />
        )}
      />

      <Typography variant="body1">Image:</Typography>
      <Controller
        name="image"
        control={control}
        rules={{ required: "Image is required" }}
        render={({ field }) => (
          <>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={(e) => handleImageChange(e, field)}
            />
            {imagePreview && (
              <Box key={"image"} sx={{ position: "relative", m: 1 }}>
                <Box
                  component={"img"}
                  src={imagePreview}
                  alt={`upload-image`}
                  sx={{
                    p: 1,
                    width: "100%",
                    height: { xs: 200, md: 350 },
                    objectFit: "contain",
                    border: "1px solid #d7e5f9",
                    borderRadius: 2,
                  }}
                />
                <IconButton
                  size="small"
                  onClick={handleRemoveImage}
                  sx={{
                    position: "absolute",
                    top: 6,
                    right: 14,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    "&:hover": {
                      backgroundColor: "rgba(255, 0, 0, 0.3)",
                    },
                  }}
                >
                  <CloseIcon sx={{ fontSize: "24px", color: "#000" }} />
                </IconButton>
              </Box>
            )}
          </>
        )}
      />
      {errors.image && (
        <span style={{ color: "#D63C3C" }}>{errors.image.message}</span>
      )}

      <AnimatedButton type="submit" variant="contained">
        <span style={{ zIndex: 1 }}>Submit</span>
      </AnimatedButton>

      {/* {submittedData && (
        <Box mt={3} p={2} border={1} borderRadius={2} borderColor="grey.300">
          <Typography variant="h6">Submitted Data:</Typography>
          <Typography>Name: {submittedData.name}</Typography>
          <Typography>Type: {submittedData.type}</Typography>
          <Typography>Description: {submittedData.description}</Typography>
          <Typography>Image: {submittedData.image?.name}</Typography>
        </Box>
      )} */}
    </Box>
  );
};

export default AdminAddProductsForm;
