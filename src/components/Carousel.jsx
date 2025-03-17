import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const slides = [
  {
    image: "/wasipsaplant.jpg",
    title: "NITROGEN GAS PLANTS",
    description: "From 5-1000Nm3/Hr with 99%-99.99% Purity",
    buttonText: "Get a free consultation",
  },
  {
    image: "/service-image.jpg",
    title: "WELCOME TO WASI PSA SYSTEMS",
    description: "Power Backup Solutions",
    buttonText: "Get a free consultation",
  }
];

const Carousel = () => {
  const navigate = useNavigate()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
  };
  const AnimatedButton = styled(Button)({
    width:250,
    backgroundColor: "#0082cf",
    color: "white",
    overflow: "hidden",
    position: "relative",
    transition: "color 0.3s ease-in-out",
    margin: "24px 0",
    padding: "16px 0",
    borderRadius: 0,
    fontSize: "16px",
    borderRight: "4px solid #5e8930",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "100%",
      width: "100%",
      height: "100%",
      backgroundColor: "#5e8930",
      transition: "left 0.5s ease-in-out",
    },
    "&:hover::before": {
      left: 0,
    },
    "&:hover": {
      color: "white",
    },
  });

  return (
    <Box sx={{ width: "100%", margin: "auto",}}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              height: 500,
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                padding: {xs:'76px 12px 0 12px',md:'12px 54px'},
                borderRadius: 2,
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'flex-start',
                gap:3,
                width: "100%",
                height:'100%',
                backdropFilter: "blur(4px)",
              }}
            >
              <Typography variant="h4" sx={{color:'#0082cf',fontWeight:'bold',fontSize:{xs:'24px', md:'28px'}}} >
                {slide.title}
              </Typography>
              <Typography variant="h2" sx={{fontWeight:'bold',width:{md:'600px'},color:'#d6d6d6',fontSize:{xs:'32px',md:'60px'}}} >
                {slide.description}
              </Typography>
                     
              <AnimatedButton variant="contained" color="primary" sx={{p:1}} onClick={()=>{navigate('/contact-us')}}>
                <span style={{zIndex:1}}>{slide.buttonText}</span>
              </AnimatedButton>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
