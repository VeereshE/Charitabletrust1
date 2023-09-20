"use client";
import { Box, Card, Typography } from "@mui/material";
import { motion, MotionProps } from "framer-motion";
import Image from "next/image";
import MLink from "./m-link";
import { ComponentProps } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const MotionImage = motion(Image);
export const MotionTypography = motion(Typography);
export const MotionButton = motion(MLink);
export const MotionBox = motion(Box);
export const MotionCard = motion(Card);
export const MotionGrid = motion(Grid2);

export type MotionImageProps = ComponentProps<typeof MotionImage>;
export type MotionTypographyProps = ComponentProps<typeof MotionTypography>;
export type MotionButtonProps = ComponentProps<typeof MotionButton>;
export type MotionBoxProps = ComponentProps<typeof MotionBox>;
export type MotionVariantProps = MotionProps["variants"];
export type MotionCardProps = ComponentProps<typeof MotionCard>;
export type MotionGridProps = ComponentProps<typeof MotionGrid>;
