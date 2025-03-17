import { Box, Typography } from '@mui/material'
import React from 'react'

const Banner = ({name}) => {
  return (
    <Box
        sx={{
          width: "100%",
          height: { xs: "250px", md: "400px" },
          position: "relative",
        }}
      >
        <Box
          component={"img"}
          src="/banner.jpg"
          sx={{ width: "100%", height: { xs: "250px", md: "400px" } }}
        />
        <Box
          sx={{
            width: "100%",
            height: { xs: "250px", md: "400px" },
            bgcolor: "rgba(0, 80, 180, 0.75)",
            position: "absolute",
            top: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              padding: { xs: "24px 0 32px 0", md: "40px 0 54px 0" },
              fontSize: { xs: "32px", md: "64px" },
              mt: { xs: 8, md: 0 },
            }}
          >
            {name}
          </Typography>
        </Box>
      </Box>
  )
}

export default Banner