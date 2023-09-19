"use client";
import {
  MotionImage,
  MotionTypography,
} from "@/commonComponents/motion-elements";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React, { ComponentProps } from "react";
import Arrow from "./images/Group 427321806.svg";
import skillImage from "./images/Rectangle 24993.png";
import AnimatedButton from "@/commonComponents/animated-button";
import { SmallTitleCard } from "@/commonComponents/cards/smallTitleCard";
import { MotionProps, motion } from "framer-motion";
import SlideAnimationWrapper from "@/commonComponents/slideAnimation/slide-animation-wrapper";

const KeyFocusSection = () => {
  return (
    <Stack bgcolor={"white"} pt={4} pb={8} px={9} rowGap={8}>
      <Stack direction={"row"} alignItems={"center"} columnGap={4} pl={9}>
        <MotionImage src={Arrow} alt='' {...imageTransition} />
        <Stack
          component={motion.div}
          variants={staggerDiv}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
          maxWidth={814}
          rowGap={4}
        >
          <Stack maxWidth={814} rowGap={4}>
            <MotionTypography
              variant='h1'
              fontWeight={400}
              color={"primary.dark"}
              variants={staggerChildren}
            >
              OUR KEY FOCUS AREAS
            </MotionTypography>
            <MotionTypography
              variant='h5'
              fontWeight={400}
              color={"primary.dark"}
              variants={staggerChildren}
            >
              Our CSR initiatives encompass a diverse range of focus areas, with
              a strong emphasis on skill development. We aim to address social,
              environmental, and community needs to create a positive and
              lasting impact.
            </MotionTypography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <SlideAnimationWrapper>
          <MotionImage
            src={skillImage}
            alt='Skill Banner'
            //   {...imageTransition}
            fill
          />
        </SlideAnimationWrapper>
      </Stack>
      <Stack direction='row' alignItems={"center"}>
        {data.map((item, idx) => (
          <SmallTitleCard
            key={idx}
            data={item}
            sx={{ backgroundPosition: "center" }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default KeyFocusSection;

const imageTransition: Omit<
  ComponentProps<typeof MotionImage>,
  "src" | "alt"
> = {
  initial: {
    x: "-210%",
  },
  whileInView: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  viewport: {
    once: true,
  },
};

const staggerDiv: MotionProps["variants"] = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.5,
    },
  },
};
const staggerChildren: MotionProps["variants"] = {
  initial: {
    opacity: 0,
    y: "150%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const data = [
  {
    img: "https://s3-alpha-sig.figma.com/img/ed73/370e/ea2e14bb7a0531b2ec3d564e9bb2f7b4?Expires=1696204800&Signature=EdpSrFd6cjU8EHmvar8WyAo5mGxboPbLCXbdTmZzD~bfTUZDmYe4stteTwa5gVFC4rprPdBMxtT6zUZWkZMrqKqNBMbfUommrK1mrr0GAoPS9nhi0jZMBreu88MVILhNNd8b3UyAry6oPEtszLTeOdefS42oSsZtM5mncd1qju-cLzc36GAib2uVgV217lOnwFaz61kYjLfRRtKfj3NzjPar572velkhMpiWcA1IrMQu7qYIo5evfmjZ-Bmz7f7Ii-7VZB6jUrdGLu3VENS1RSH9iOzWVtkwo0OWqqAT4tXIOV2~MhzHVncp6h15LzqhwavpufBOLxMXUBKvhw2b0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Education",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/5afa/c5db/92c2f936e1e3a0a16e90530264cbe0a0?Expires=1696204800&Signature=aocnwE8KXwJwqO-O4twIVvJKqKmbvCY9rXqIGwajb~KH4qwRB7N86a62dOCY5byGX2Ps2JlMHbHbWthhPLi2G76ORSMkHeN2~NQyeY0RHDtPfnFAXJX3QI~3NCjvLymfUtr51dzXKydmNIykSOQOtWJUoXRhAG8Ux5vZpKWJsBRxI0I3MM7ewEeGa2nuM0IQDsSA~48jvf~~0YFjmHaLybesmBMEg6V~pGvj6iyC-TmisQyZh3n08e9hOD5vm9ot0vFoF~xXUjO3Wgw2QoBBZAHkzWE~ejgtRUexwEDd9yD~X~1JIHPfQslLrz-piRZtkP35dIvnOxx9Hw5ummZ4Sg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Community Development",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/ea93/c20b/634f7fd518261abf4b3598846e01d3f8?Expires=1696204800&Signature=WitUdgcM7J8~K1g-WuhJzmxQljKipaufpY8EuHMIehnHyRHrS-LNqa4WL1ImRmoElXOEBFgPRQlDB2riD8gWalaWztQoVoZ~1R8XLDt9unDdkdAguq~~GW7N017lNxAAGgQlZanbWvFlMkfiajSWwf2pyGSMk8fbHWvAaNx0PKQe9pLSyKchSYD4qftuX2MGgCic8LQ56UiOxMvUPvm~PHxIbbVbnUwMoYx~-DofcBPN1Gxy~vKpLVAb1nzQAli~hzvq1osnR4Qt5~z0lRLX0ZOqH9EOEF6rzTY8zuWWQCOVpVFwaHcG4DTNWspqt4AqprlmcI9wscPbSCptKMMUsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Healthcare",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/43c2/3c7d/299a4d1fb4d6a21396450dcbf69c4058?Expires=1696204800&Signature=cfmmuWpo0KCeYVS9ry1J4vbsPqdOCIf16Rj3lCRc5ZVrEKWEGaFWFEU5LzcDnasmuBJWrhQAeZBA2~-SWz3dc8W5yIZqgKy1Rj6V7mceBb8G44dDiu8A2bqTrda56tbY-tL3NIIw-eyvSYzRJqKAasrNu8isNFLy542IxVJoA8LWXnZpxTcEMgBfkKDL5m01ETQdFbC8s3oSDLywyL8Aw~IEfNN7dlID8KqbLoJ5-WhGZtMXayWB3SwTZXgDLUo5m9UvgBYvdASU3DRkAikGRtrRNxRHeBbqMCy8UV0uB1ltXUcPRJsSvrJa2jHfPphfj4ni94RftKMVgX80QMh2HQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Others",
  },
];