"use client";
import {
  MotionImage,
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import React, { Fragment } from "react";
import line from "./images/Line 1322.svg";
import { motion } from "framer-motion";
import { H6_2 } from "@/styles/theme/components/typography.fontvariant";

const Impact = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <SectionWrapper
      SectionProps={{
        bgcolor: "primary.main",
      }}
      SectionHeaderProps={{
        title: "DRIVING A LASTING IMPACT",
        description:
          "These are not mere numbers. They’re a testament to our relentless dedication towards making a tangible impact in communities across the nation.",
        DescriptionTypographyProps: {
          fontSize: H6_2,
        },
        maxWidth: { xs: 1, md: 867 },
      }}
      color={"common.white"}
    >
      <Stack
        direction={"row"}
        width={1}
        maxWidth={1232}
        mx={"auto"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        rowGap={4}
        component={motion.div}
        variants={staggerDivArrow}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        {data.map((item, idx) => {
          return (
            <Fragment key={idx}>
              <Stack
                key={idx}
                alignItems={"center"}
                width={{ xs: "50%", md: "auto" }}
                rowGap={1}
                component={motion.div}
                variants={staggerStackChildren}
                viewport={{ once: true }}
              >
                <MotionTypography
                  variants={staggerTextChildren}
                  variant='h2'
                  component={"h3"}
                  fontWeight={700}
                >
                  {item.title}
                </MotionTypography>
                <MotionTypography variants={staggerTextChildren}>
                  {item.subtitle}
                </MotionTypography>
              </Stack>
              {idx !== data.length - 1 && (
                <MotionImage
                  variants={staggerArrowChildren}
                  src={line}
                  alt=''
                  hidden={matches}
                />
              )}
            </Fragment>
          );
        })}
      </Stack>
    </SectionWrapper>
  );
};

export default Impact;

const staggerDiv: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};
const staggerChildren: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
const staggerDivArrow: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};
const staggerStackChildren: MotionVariantProps = {
  initial: { opacity: 0.9 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.7,
    },
  },
};
const staggerTextChildren: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};
const staggerArrowChildren: MotionVariantProps = {
  initial: {
    clipPath: "inset(0% 0% 100% 0%)",
  },
  animate: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.2,
    },
  },
};

const data = [
  {
    title: "12.4CR",
    subtitle: "People Reached",
  },
  {
    title: "57K",
    subtitle: "MSMEs Supported",
  },
  {
    title: "100.3K",
    subtitle: "Women Empowered",
  },
  {
    title: "93K",
    subtitle: "Students Educated",
  },
];
