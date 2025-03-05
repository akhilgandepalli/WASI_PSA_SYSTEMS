import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Circle, CircleOutlined } from "@mui/icons-material";

const images = [
    "Nitrogen Gas Plant.JPG",
    "Compressed Air Filters.jpg",
    "zpstock-image-935.jpg",
    "zpstock-image-936.jpg",
  ];

const Demo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Cloned first slide at the end to create an infinite loop effect
  const extendedImages = [...images, images[0]]; 

  const handleNext = () => {
    if (currentIndex === images.length) {
      return; // Prevent extra transitions
    }

    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(images.length); // Instantly jump to the cloned last slide
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(images.length - 1); // Move back to the real last slide
      }, 50);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle seamless reset when reaching the last clone
  useEffect(() => {
    if (currentIndex === images.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0); // Instantly reset to real first slide
      }, 500); // Wait for animation to finish
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "600px",
        height: "300px",
        margin: "auto",
        overflow: "hidden",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Image Slider Container */}
      <Box
        sx={{
          display: "flex",
          width: `${(images.length + 1) * 100}%`, // Adjust width to fit all slides including clone
          transform: `translateX(${-currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
      >
        <ul class="zphero-slides" data-currentslide-index="0"><li data-element-id="elm_ZOtpO9gmQ4ao2n_cWO8azA" data-slide-name="Slide 02" data-element-type="heroslide" class="zphero-slide zpdark-section zpdark-section-bg          slideOutLeft"><style type="text/css"></style><div data-tablet-image="" data-mobile-image="" class="zpslider-img zpbackground-size-cover zpbackground-position-center-center zpbackground-repeat-no zpbackground-attachment-scroll" style="background-image:linear-gradient(to bottom, rgba(234, 119, 4, 0.3), rgba(234, 119, 4, 0.3)), url(/Nitrogen%20Gas%20Plant.JPG);"></div>
<div class="zphero-slider-container zshero-banner-style-02 "><div class="zpcontainer"><div data-element-id="elm_pi0wO05VQj2_8P082n0sPw" data-element-type="row" class="zprow zpalign-items-flex-start zpjustify-content-flex-start "><style type="text/css"> [data-element-id="elm_pi0wO05VQj2_8P082n0sPw"].zprow{ border-radius:1px; } </style><div data-element-id="elm_V5xuqo9lT4CqYRr3hHVhqg" data-element-type="column" class="zpelem-col zpcol-12 zpcol-md-7 zpcol-sm-10 zpalign-self-center zpdefault-section zpdefault-section-bg "><style type="text/css"></style><div data-element-id="elm_L9p39gyrTcSQzIgjag_46w" data-element-type="heading" class="zpelement zpelem-heading "><style> [data-element-id="elm_L9p39gyrTcSQzIgjag_46w"] h2.zpheading{ line-height:60px; } [data-element-id="elm_L9p39gyrTcSQzIgjag_46w"].zpelem-heading { border-radius:1px; } </style><h2 class="zpheading zpheading-style-none zpheading-align-left " data-editor="true">PSA Nitrogen Gas Plants</h2></div>
<div data-element-id="elm_PzERKJGAT_6zBXfV_KA0Gg" data-element-type="text" class="zpelement zpelem-text "><style> [data-element-id="elm_PzERKJGAT_6zBXfV_KA0Gg"].zpelem-text{ border-radius:1px; } </style><div class="zptext zptext-align-left " data-editor="true">We Design, Fabrication, Supply &amp; Commissioning of PSA Nitrogen Gas Plants made to Your requirements.&nbsp;</div>
</div><div data-element-id="elm_hAbGyfzzStmuZT2XOM2ILA" data-element-type="button" class="zpelement zpelem-button "><style> [data-element-id="elm_hAbGyfzzStmuZT2XOM2ILA"].zpelem-button{ border-radius:1px; } </style><div class="zpbutton-container zpbutton-align-left"><style type="text/css"></style><a class="zpbutton-wrapper zpbutton zpbutton-type-primary zpbutton-size-lg zpbutton-style-oval " href="mailto:info@wasipsasystems.com?subject=Submit%20Quotation%20for%20Nitrogen%20Gas%20Plant"><span class="zpbutton-content">Send Enquiry</span></a></div>
</div></div></div></div></div></li><li data-element-id="elm_r8m8nVgPT--gm93VkPYaRg" data-slide-name="Slide 04" data-element-type="heroslide" class="zphero-slide zpdark-section zpdark-section-bg            slideOutLeft" style=""><style type="text/css"></style><div data-tablet-image="" data-mobile-image="" class="zpslider-img zpbackground-size-cover zpbackground-position-center-center zpbackground-repeat-no zpbackground-attachment-scroll" style="background-image:linear-gradient(to bottom, rgba(56, 196, 202, 0.61), rgba(56, 196, 202, 0.61)), url(/Compressed%20Air%20Filters.jpg);"></div>
<div class="zphero-slider-container zshero-banner-style-04 "><div class="zpcontainer"><div data-element-id="elm_0h5BzpDXQrmqfV0V4G63Ug" data-element-type="row" class="zprow zpalign-items-flex-start zpjustify-content-flex-start "><style type="text/css"> [data-element-id="elm_0h5BzpDXQrmqfV0V4G63Ug"].zprow{ border-radius:1px; } </style><div data-element-id="elm_gceRfA9BTB22gX0NX9aBQQ" data-element-type="column" class="zpelem-col zpcol-12 zpcol-md-7 zpcol-sm-10 zpalign-self-center zpdefault-section zpdefault-section-bg "><style type="text/css"></style><div data-element-id="elm_UjOtlpDZQay1mSYyFkbjiA" data-element-type="box" class="zpelem-box zpelement zpbox-container zshero-banner-thick-border-box zpdefault-section zpdefault-section-bg "><style type="text/css"></style><div data-element-id="elm_UVWN561BSFapfpKD-FzkBw" data-element-type="heading" class="zpelement zpelem-heading "><style> [data-element-id="elm_UVWN561BSFapfpKD-FzkBw"].zpelem-heading { border-radius:1px; } </style><h3 class="zpheading zpheading-style-none zpheading-align-left " data-editor="true">Great Industrial Filtration Solutions</h3></div>
<div data-element-id="elm_1q9NgEUyQEGiQC6opDXSUw" data-element-type="text" class="zpelement zpelem-text "><style> [data-element-id="elm_1q9NgEUyQEGiQC6opDXSUw"].zpelem-text{ border-radius:1px; } </style><div class="zptext zptext-align-left " data-editor="true"><div></div><div></div>For every kind of Industrial Filtration as you please.</div>
</div></div></div></div></div></div></li><li data-element-id="elm_4bGANte5TjqBxE3Og0Z8wg" data-slide-name="Slide 01" data-element-type="heroslide" class="zphero-slide zpdark-section zpdark-section-bg            slideOutLeft" style=""><style type="text/css"></style><div data-tablet-image="" data-mobile-image="" class="zpslider-img zpbackground-size-cover zpbackground-position-center-center zpbackground-repeat-no zpbackground-attachment-scroll" style="background-image:linear-gradient(to bottom, rgba(213, 96, 115, 0.88), rgba(255, 255, 143, 0.5)), url(https://static.zohocdn.com/ecommerce/stock-images/images/zpstock-image-935.jpg);"></div>
<div class="zphero-slider-container zshero-banner-style-01 "><div class="zpcontainer"><div data-element-id="elm_7ZZ1XCwwR9SIb9-FzImxfQ" data-element-type="row" class="zprow zpalign-items-flex-start zpjustify-content-center "><style type="text/css"> [data-element-id="elm_7ZZ1XCwwR9SIb9-FzImxfQ"].zprow{ border-radius:1px; } </style><div data-element-id="elm_v3is-D1ESQmYwwg5XyWJKg" data-element-type="column" class="zpelem-col zpcol-12 zpcol-md-10 zpcol-sm-10 zpalign-self-center zpdefault-section zpdefault-section-bg "><style type="text/css"> [data-element-id="elm_v3is-D1ESQmYwwg5XyWJKg"].zpelem-col{ border-radius:1px; } </style><div data-element-id="elm_z8YaAuWrQK6OmetwaD-ECg" data-element-type="heading" class="zpelement zpelem-heading "><style> [data-element-id="elm_z8YaAuWrQK6OmetwaD-ECg"].zpelem-heading { border-radius:1px; } </style><h4 class="zpheading zpheading-style-none zpheading-align-center " data-editor="true">Music that will soothe your senses</h4></div>
<div data-element-id="elm_c-yXdc7HTPKEG-qny7fEsg" data-element-type="heading" class="zpelement zpelem-heading "><style> [data-element-id="elm_c-yXdc7HTPKEG-qny7fEsg"].zpelem-heading { border-radius:1px; } </style><h2 class="zpheading zpheading-style-none zpheading-align-center " data-editor="true">Simply serene like ocean lull</h2></div>
<div data-element-id="elm_Vf9bFhZmQk-ON-PekEaTbQ" data-element-type="text" class="zpelement zpelem-text "><style> [data-element-id="elm_Vf9bFhZmQk-ON-PekEaTbQ"].zpelem-text{ border-radius:1px; } </style><div class="zptext zptext-align-center " data-editor="true">Need a modern &amp; stylish, innovative way to hear the music that you love, enjoy your hobbies with high quality gadgets because it's our passion.</div>
</div><div data-element-id="elm_vnHCFP9NQtSHaL0jj955Ug" data-element-type="button" class="zpelement zpelem-button "><style></style><div class="zpbutton-container zpbutton-align-center"><style type="text/css"></style><a class="zpbutton-wrapper zpbutton zpbutton-type-primary zpbutton-size-md zpbutton-style-none " href="javascript:;" target="_blank"><span class="zpbutton-content">Read More</span></a></div>
</div></div></div></div></div></li><li data-element-id="elm_Nhdfc6CvQYidYp_vVSe39g" data-slide-name="Slide 09" data-element-type="heroslide" class="zphero-slide zpdark-section zpdark-section-bg           slideInRight curslide" style=""><style type="text/css"></style><div data-tablet-image="" data-mobile-image="" class="zpslider-img zpbackground-size-cover zpbackground-position-center-center zpbackground-repeat-no zpbackground-attachment-scroll" style="background-image:linear-gradient(to bottom, rgba(70, 70, 70, 0.57), rgba(70, 70, 70, 0.57)), url(https://static.zohocdn.com/ecommerce/stock-images/images/zpstock-image-936.jpg);"></div>
<div class="zphero-slider-container zshero-banner-style-09 "><div class="zpcontainer"><div data-element-id="elm_03keJVOvSze0THyL2H_z9w" data-element-type="row" class="zprow zpalign-items-flex-start zpjustify-content-center "><style type="text/css"> [data-element-id="elm_03keJVOvSze0THyL2H_z9w"].zprow{ border-radius:1px; } </style><div data-element-id="elm_3WmfCGovRgibTK5n-Kz2zw" data-element-type="column" class="zpelem-col zpcol-12 zpcol-md-12 zpcol-sm-8 zpalign-self-center zpdefault-section zpdefault-section-bg "><style type="text/css"></style><div data-element-id="elm_n8AXjO4pRCyTNnW_jzdCzg" data-element-type="box" class="zpelem-box zpelement zpbox-container zshero-banner-border-box zpdefault-section zpdefault-section-bg "><style type="text/css"></style><div data-element-id="elm_VwTAjsLdQJ2RTGmPw0thGw" data-element-type="heading" class="zpelement zpelem-heading "><style> [data-element-id="elm_VwTAjsLdQJ2RTGmPw0thGw"].zpelem-heading { border-radius:1px; } </style><h2 class="zpheading zpheading-style-none zpheading-align-center " data-editor="true">Listen to music that touches your soul</h2></div>
<div data-element-id="elm_dr9kQQZuTomZUEZbLGy_Ew" data-element-type="text" class="zpelement zpelem-text "><style> [data-element-id="elm_dr9kQQZuTomZUEZbLGy_Ew"].zpelem-text{ border-radius:1px; } </style><div class="zptext zptext-align-center " data-editor="true">Music can reach the deepest crevices of your heart and makes you feel the pain oozing out of every blood vessel while listen to songs. Bleed your heart and eyes out with surreal music.</div>
</div><div data-element-id="elm_YtYTJDseRiK7oGt43Bl5Gw" data-element-type="button" class="zpelement zpelem-button "><style></style><div class="zpbutton-container zpbutton-align-center"><style type="text/css"></style><a class="zpbutton-wrapper zpbutton zpbutton-type-primary zpbutton-size-lg zpbutton-style-oval " href="javascript:;" target="_blank"><span class="zpbutton-content">Browse our services</span></a></div>
</div></div></div></div></div></div></li></ul>
      </Box>

      {/* Previous Button */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
        }}
      >
        <ArrowBackIos />
      </IconButton>

      {/* Next Button */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
        }}
      >
        <ArrowForwardIos />
      </IconButton>

      {/* Indicators (Dots) */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "5px",
        }}
      >
        {images.map((_, index) => (
          <IconButton
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{ color: "white", padding: "5px" }}
          >
            {index === (currentIndex % images.length) ? <Circle fontSize="small" /> : <CircleOutlined fontSize="small" />}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
};

export default Demo;
