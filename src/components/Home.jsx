import React, { useContext, useEffect } from "react";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import Carousel from "./Carousel";
import Navbar from "./Navbar.jsx";
import CardsCarousel from "./CardsCarousel.jsx";
import products from "../products.js";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import { useNavigate } from "react-router";
import { globalContext } from "../App.jsx";

const Home = () => {
  const { setNavlink } = useContext(globalContext);
  const navigate = useNavigate();
  //filter items as per type
  const molecularSieves = products.filter(
    (e) => e.type === "Molecular Sieves"
  );
  const valves = products.filter((e) => e.type === "Industrial Valves");

  useEffect(() => {
    setNavlink("Home");
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        bgcolor: "whitesmoke",
      }}
    >
      {/* <Navbar /> */}
      <Carousel />
      <Box
        key={"section1"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px 32px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#364253", padding: 4, textAlign: "center" }}
        >
          What's New at Gadgets Zone
        </Typography>
        <Typography
          sx={{
            color: "#6c798b",
            textAlign: "center",
            padding: { md: "0 120px" },
            fontSize: "14px",
          }}
        >
          You can edit text on your website by double clicking on a text box on
          your website. Alternatively, when you select a text box a settings
          menu will appear. Your website by double clicking on a text box on
          your website.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            paddingTop: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "350px",
              alignItems: "center",
            }}
          >
            <Box
              component={"img"}
              src="Nitrogen Gas Plant.JPG"
              sx={{ width: "350px", height: "400px" }}
            />
            <Typography
              variant="h6"
              sx={{ color: "#364253", padding: "16px 0", fontSize: "18px" }}
            >
              PSA Nitrogen Gas Plants
            </Typography>
            <Typography
              sx={{ color: "#6c798b", textAlign: "center", fontSize: "14px" }}
            >
              Nitrogen Plants Capacity 5-1000Nm3/Hr, Nitrogen Purity 99-99.99% &
              Pressure upto 6Bar
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#0082cf",
                marginTop: 3,
                borderRadius: 50,
                textTransform: "capitalize",
              }}
            >
              Send Enquiry
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "350px",
              alignItems: "center",
            }}
          >
            <Box
              component={"img"}
              src="zpstock-image-938.jpg"
              sx={{ width: "350px", height: "400px" }}
            />
            <Typography
              variant="h6"
              sx={{ color: "#364253", padding: "16px 0", fontSize: "18px" }}
            >
              Uber Popular Wireless Earbuds
            </Typography>
            <Typography
              sx={{ color: "#6c798b", textAlign: "center", fontSize: "14px" }}
            >
              You can edit text on your website by double clicking on a text box
              on your website.
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#0082cf",
                marginTop: 3,
                borderRadius: 50,
                textTransform: "capitalize",
              }}
            >
              Shop Now
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "350px",
              alignItems: "center",
            }}
          >
            <Box
              component={"img"}
              src="zpstock-image-939.jpg"
              sx={{ width: "350px", height: "400px" }}
            />
            <Typography
              variant="h6"
              sx={{ color: "#364253", padding: "16px 0", fontSize: "18px" }}
            >
              Limited Stocks Back on Popular Demand
            </Typography>
            <Typography
              sx={{ color: "#6c798b", textAlign: "center", fontSize: "14px" }}
            >
              You can edit text on your website by double clicking on a text box
              on your website.
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#0082cf",
                marginTop: 3,
                borderRadius: 50,
                textTransform: "capitalize",
              }}
            >
              Shop Now
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        key={"section2"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px 32px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#364253", padding: 4, textAlign: "center" }}
        >
          Categorized Product Zone
        </Typography>
        <Typography
          sx={{
            color: "#6c798b",
            textAlign: "center",
            padding: { md: "0 120px" },
            fontSize: "14px",
          }}
        >
          You can find below all the products related to Nitrogen gas Plants,
          Air Drying Units and other industrial products.
        </Typography>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: { xs: "30px", md: "20px 120px" },
          }}
        >
          <Typography variant="h5" sx={{ color: "#364253" }}>
            Molecular Sieves
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#0082cf",
              textTransform: "capitalize",
            }}
            onClick={() => {
              navigate("/products/categories/molecular-sieves");
              window.scrollTo(0, 0);
            }}
          >
            View all
          </Button>
        </Box>
        <CardsCarousel items={molecularSieves} />
      </Box>
      <Box sx={{ mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: { xs: "30px", md: "20px 120px" },
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "#364253", padding: { xs: 1, md: 0 } }}
          >
            Industrial Valves
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#0082cf",
              textTransform: "capitalize",
            }}
            onClick={() => {
              navigate("/products/categories/industrial-valves");
              window.scrollTo(0, 0);
            }}
          >
            View all
          </Button>
        </Box>
        <CardsCarousel items={valves} />
      </Box>
      <Box sx={{ mb: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: { xs: "30px", md: "20px 120px" },
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "#364253", padding: { xs: 1, md: 0 } }}
          >
            All Products
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#0082cf",
              textTransform: "capitalize",
            }}
            onClick={() => {
              navigate("/products/categories/all-products");
              window.scrollTo(0, 0);
            }}
          >
            View all
          </Button>
        </Box>
        <CardsCarousel items={products} />
      </Box>
      <Box
        key={"section3"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          padding: { xs: "16px 4px", md: "80px 120px" },
        }}
      >
        <Box
          component={"img"}
          src="./zpstock-image-940.jpg"
          sx={{ height: { xs: "400px", md: "600px" } }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              width: { xs: "350px", md: "520px" },
              color: "#364253",
              padding: 4,
              textAlign: "center",
              fontSize: "23px",
              lineHeight: 2,
            }}
          >
            Our Bestsellers go out of stock even before we know it! Order yours
            while stocks last.
          </Typography>
          <Typography
            sx={{
              width: { xs: "350px", md: "480px" },
              color: "#6c798b",
              textAlign: "center",

              fontSize: "14px",
            }}
          >
            A peep at some distant orb has power to raise and purify our
            thoughts like a strain of sacred music, or a noble picture, or a
            passage from the grander poets. It always does one good.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#0082cf",
              marginTop: 3,
              borderRadius: 50,
              textTransform: "capitalize",
            }}
          >
            View More
          </Button>
        </Box>
      </Box>
      <Box
        key={"section4"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: { xs: "16px 4px", md: "40px 120px" },
        }}
      >
        <Paper
          elevation={2}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            height: { xs: "auto", md: "60vh" },
            mb: "40px",
            p: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 2,
              padding: "16px 24px",
              width: { md: "700px" },
              pb:{xs:4}
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#364253",
                fontSize: {xs:"24px",md:'28px'},
              }}
            >
              A some words about us
            </Typography>
            <Typography
              sx={{
                color: "#6c798b",
                fontSize: "14px",
              }}
            >
              Almost before we knew it, we had left the ground.A shining
              crescent far beneath the flying vessel.
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#0082cf",
                marginTop: 3,
                borderRadius: 50,
                textTransform: "capitalize",
              }}
            >
              Read More
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            <Box
              sx={{
                width: { xs: "320px", md: "300px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "flex-start",
                gap: 1,
                pl: { xs: 3, md: 0 },
              }}
            >
              <LocalShippingOutlinedIcon
                sx={{
                  color: "#0082cf",
                  border: "1px solid #0082cf",
                  fontSize: "36px",
                  padding: 1,
                  borderRadius: 50,
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  color: "#364253",
                  fontSize: "18px",
                  lineHeight: 2,
                }}
              >
                Same-Day Shipping In the US
              </Typography>
              <Typography
                sx={{
                  color: "#6c798b",
                  fontSize: "14px",
                }}
              >
                Almost before we knew it, we had left the ground.A shining
                crescent far beneath the flying vessel.
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "320px", md: "300px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "flex-start",
                gap: 1,
                pl: { xs: 3, md: 0 },
              }}
            >
              <ShoppingCartCheckoutOutlinedIcon
                sx={{
                  color: "#0082cf",
                  border: "1px solid #0082cf",
                  fontSize: "36px",
                  padding: 1,
                  borderRadius: 50,
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  color: "#364253",
                  fontSize: "18px",
                  lineHeight: 2,
                }}
              >
                365 Day Returns
              </Typography>
              <Typography
                sx={{
                  color: "#6c798b",
                  fontSize: "14px",
                }}
              >
                Almost before we knew it, we had left the ground.A shining
                crescent far beneath the flying vessel.
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "320px", md: "300px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "flex-start",
                gap: 1,
                pl: { xs: 3, md: 0 },
              }}
            >
              <PersonOutlineOutlinedIcon
                sx={{
                  color: "#0082cf",
                  border: "1px solid #0082cf",
                  fontSize: "36px",
                  padding: 1,
                  borderRadius: 50,
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  color: "#364253",
                  fontSize: "18px",
                  lineHeight: 2,
                }}
              >
                Real, Human Support
              </Typography>
              <Typography
                sx={{
                  color: "#6c798b",
                  fontSize: "14px",
                }}
              >
                Almost before we knew it, we had left the ground.A shining
                crescent far beneath the flying vessel.
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "320px", md: "300px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "flex-start",
                gap: 1,
                pl: { xs: 3, md: 0 },
              }}
            >
              <CreditCardOutlinedIcon
                sx={{
                  color: "#0082cf",
                  border: "1px solid #0082cf",
                  fontSize: "36px",
                  padding: 1,
                  borderRadius: 50,
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  color: "#364253",
                  fontSize: "18px",
                  lineHeight: 2,
                }}
              >
                Multiple Payment Options
              </Typography>
              <Typography
                sx={{
                  color: "#6c798b",
                  fontSize: "14px",
                }}
              >
                Almost before we knew it, we had left the ground.A shining
                crescent far beneath the flying vessel.
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
