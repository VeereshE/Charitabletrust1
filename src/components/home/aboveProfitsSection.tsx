"use client";
import { IconButton, Stack } from "@mui/material";
import Image from "next/image";
import videoImage from "./images/Frame 111142.png";
import React, { useState } from "react";
import {
  MotionBox,
  MotionBoxProps,
  MotionTypography,
  MotionTypographyProps,
} from "@/commonComponents/motion-elements";
import { PlayCircle } from "@mui/icons-material";

const AboveProfitsSection = () => {
  const [textTransition, setTextTransition] = useState(false);

  const headerTransition: MotionTypographyProps = {
    initial: {
      y: "30%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: {
      duration: 0.8,
    },
    viewport: {
      once: true,
    },
  };

  const videoBannerTransition: MotionBoxProps = {
    initial: {
      x: "-118%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
    viewport: {
      once: true,
    },
    // onTransitionEnd: () => setTextTransition(true),
  };
  const descTransition: MotionTypographyProps = {
    initial: {
      y: "-130%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: {
      duration: 0.5,
      delay: 0.8,
    },
    viewport: {
      once: true,
    },
  };
  return (
    <Stack
      sx={{
        background:
          "linear-gradient(180deg, #0C1425 0%, #162B52 17.68%, #1F3F78 35.36%, #254F98 53.05%, #2B5CB0 70.73%, #2F65C1 89.77%, #316ACB 110.17%, #326CCF 136.02%)",
        position: "relative",
        overflow: "hidden",
        // "&:before": {
        //   content: '""',
        //   position: "absolute",
        //   width: "100%",
        //   height: "100%",
        //   top: 0,
        //   left: 0,
        //   background:
        //     "url(http://localhost:3000/Group%20427321804.svg) repeat-x",
        //   animation: "slideIn 5s infinite linear",
        //   "@keyframes slideIn": {
        //     "0%": {
        //       left: "-100%",
        //     },
        //     "100%": {
        //       left: "100%",
        //     },
        //   },
        // },
      }}
      py={{ xs: 7, md: 12 }}
    >
      {/* <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "-100%",
          animation: "slideIn 5s infinite linear",
          "@keyframes slideIn": {
            "0%": {
              left: "-100%",
            },
            "100%": {
              left: "100%",
            },
          },
        }}
      >
        <Image src={dcd} alt='' />
      </Box> */}
      <Stack textAlign={"center"} width={{ xs: "88%", md: "73.5%" }} m={"auto"}>
        <MotionTypography
          variant='h3'
          color='white'
          fontWeight={400}
          {...headerTransition}
        >
          ABOVE PROFITS. BEYOND BOTTOM LINES.
        </MotionTypography>
        <MotionBox
          position={"relative"}
          height={{ xs: 264, md: 513 }}
          mt={{ xs: 4, md: 6 }}
          mb={{ xs: 3, md: 4 }}
          zIndex={1}
          {...videoBannerTransition}
        >
          <Image src={videoImage} alt='Video Thumbnail' fill />
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              p: 0,
            }}
          >
            <PlayCircle
              sx={{
                width: { xs: 77, md: 100 },
                height: { xs: 77, md: 100 },
                fill: "#005DAC",
              }}
            />
          </IconButton>
        </MotionBox>
        <MotionTypography
          variant='h6'
          color='white'
          fontWeight={400}
          {...descTransition}
        >
          Welcome to Bajaj Beyond, a holistic and integrated platform that
          combines the myriad of Bajaj Inc’s CSR initiatives to create a single
          force of good that goes beyond profits and bottom lines. We’re certain
          that our unwavering commitment towards empowering communities through
          skill development will cement India’s legacy as we walk hand in hand
          towards an equitable future.
        </MotionTypography>
      </Stack>
    </Stack>
  );
};

export default AboveProfitsSection;
