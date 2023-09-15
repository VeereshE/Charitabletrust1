"use client";
import AnimatedButton from "@/commonComponents/animated-button";
import { Box, Collapse, Fade, Slide, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import BajajLogo from "./images/Graphics.svg";
import Banner from "./images/Group 427321830.svg";

const HeroSection = () => {
  const [logoAnimate, setLogoAnimate] = useState(false);
  const [bannerAnimate, setBannerAnimate] = useState(false);
  const [headerAnimate, setHeaderAnimate] = useState(false);
  const [subtitleAnimate, setSubtitleAnimate] = useState(false);
  const [buttonAnimate, setButtonAnimate] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const btnContainerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    setLogoAnimate(true);
  }, []);

  return (
    <Stack
      sx={{
        background: "radial-gradient(circle,  #326ccf 0%,  #0C1220 97%)", //radial-gradient(circle, rgba(50,108,207,1) 0%, rgba(48,103,197,1) 10%, rgba(12,18,32,1) 100%)
      }}
    >
      <Stack
        direction='row'
        alignItems={"center"}
        width={"76%"}
        sx={{
          m: "50px auto 87px",
        }}
      >
        <Stack sx={{ overflow: "hidden" }} ref={containerRef}>
          <Slide
            direction='up'
            in={headerAnimate}
            timeout={800}
            easing={"ease-out"}
            container={containerRef.current}
            onTransitionEnd={() => setSubtitleAnimate(true)}
          >
            <Box>
              <Fade in={headerAnimate} timeout={2000}>
                <Typography
                  variant='h1'
                  color={"#fff"}
                  sx={{ fontWeight: 400, mb: 2 }}
                >
                  TURNING POTENTIAL TO PROGRESS
                </Typography>
              </Fade>
            </Box>
          </Slide>

          <Slide
            direction='up'
            in={subtitleAnimate}
            timeout={800}
            easing={"ease-out"}
            container={containerRef.current}
            onTransitionEnd={() => setButtonAnimate(true)}
          >
            <Box>
              <Fade in={subtitleAnimate} timeout={1500}>
                <Typography variant='body1' color={"#fff"}>
                  The wheels of a self-reliant future are turning with equal
                  opportunities for all.
                </Typography>
              </Fade>
            </Box>
          </Slide>
          <AnimatedButton
            sx={{
              mt: 4,
              width: "207px",
              bgcolor: "rgba(255, 255, 255, 0.10)",
            }}
            href={"./"}
            ref={btnContainerRef}
          >
            <Slide
              direction='up'
              in={buttonAnimate}
              timeout={1000}
              easing={"ease-out"}
              container={btnContainerRef.current}
            >
              <Box>
                <Fade in={buttonAnimate} timeout={2000}>
                  <Typography fontSize={"24px !important"}>
                    View Initiatives
                  </Typography>
                </Fade>
              </Box>
            </Slide>
          </AnimatedButton>
        </Stack>
        <Stack direction='row' alignItems={"center"} minWidth={600}>
          <Slide
            direction='right'
            in={logoAnimate}
            timeout={800}
            onTransitionEnd={() => setBannerAnimate(true)}
            easing={{ enter: "cubic-bezier(.13,.47,.02,1)" }}
          >
            <Image
              src={BajajLogo}
              alt='Bajaj Beyond Logo'
              height={600}
              style={{ marginRight: "-167px", zIndex: 1 }}
            />
          </Slide>
          <Collapse
            orientation='horizontal'
            in={bannerAnimate}
            easing={"ease-out"}
            timeout={1000}
            sx={{
              clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 74% 100%, 0% 100%)",
            }}
            onTransitionEnd={() => setHeaderAnimate(true)}
          >
            <Image src={Banner} alt='Video Banner' height={543} />
          </Collapse>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HeroSection;