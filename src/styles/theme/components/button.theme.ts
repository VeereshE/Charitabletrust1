import {alpha, Components, Theme} from "@mui/material";
import {helvetica} from "app/font";
import {Button} from "@theme/components/typography.fontvariant";

/**
 * @ButtonVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the Button component
 *
 * @see https://mui.com/material-ui/react-button/#customization
 */
export const ButtonVariants: Components<
  Omit<Theme, "components">
>["MuiButton"] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const { sx: style } = ownerState;
      return theme.unstable_sx([
        {
          ...helvetica.style,
          whiteSpace: "nowrap",
          lineHeight: "150%",
          fontWeight: 500,
          fontSize: Button,
          textRendering: "optimizeSpeed",
          letterSpacing: "normal",
          height: "inherit",
          fontSmooth: "always",
          minWidth: "fit-content",
          paddingInline: 2,
          paddingBlock: 1,
          borderRadius: 0,
          boxShadow: "none",
          overflow: "hidden",
          textTransform: "capitalize",
        },
        ...(Array.isArray(style) ? style : [style]),
      ]);
    },
    text: ({ ownerState, theme }) => {
      const { disableRipple } = ownerState;
      return theme.unstable_sx([
        {
          padding: disableRipple ? 0 : "0.625rem 1.5rem",
          background: "transparent",
          fontWeight: 400,
          "&:hover": {
            background: disableRipple ? "transparent" : "default",
          },
        },
      ]);
    },
    containedPrimary: ({theme}) => {
      return theme.unstable_sx({
        background: alpha(theme.palette.primary.main, 0.1),
        color: theme.palette.primary.main,
        "&:hover": {
          background: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        },
      });
    },
    containedSecondary: ({theme}) => {
      return theme.unstable_sx({
        background: alpha(theme.palette.secondary.main, 0.3),
        color: theme.palette.secondary.main,
        "&:hover": {
          border: "none",
          background: theme.palette.secondary.main,
          color: theme.palette.grey["A700"],
        },
      });
    },
    outlinedPrimary: ({theme}) => {
      return theme.unstable_sx({
        background: "transparent",
        color: theme.palette.primary.main,
        "&:hover": {
          background: alpha(theme.palette.primary.main, 0.1),
          color: theme.palette.primary.main,
        },
      });
    },
    outlinedSecondary: ({theme}) => {
      return theme.unstable_sx({
        background: "transparent",
        color: theme.palette.secondary.main,
        "&:hover": {
          background: alpha(theme.palette.secondary.main, 0.1),
          color: theme.palette.secondary.main,
        },
      });
    },
  },
  variants: [
    {
      props: {
        variant: "menulink",
      },
      style: ({ theme }) => {
        return {
          color: theme.palette.grey[500],
          padding: theme.spacing(2),
          paddingLeft: 0,
          paddingRight: 0,
          borderBottom: "2px solid",
          borderColor: "transparent",
          "&.MuiButton-menulinkSecondary, &:hover ": {
            color: theme.palette.primary.dark,
            borderColor: theme.palette.primary.dark,
            background: "none",
          },
        };
      },
    },
    {
      props: {
        variant: "companylink",
      },
      style: ({ theme }) => {
        return {
          [theme.breakpoints.up("md")]: {
            // Set font size for above md screen
            fontSize: "32px",
          },
          [theme.breakpoints.down("md")]: {
            fontSize: "24px",
            display: "inline",
            // paddingRight:theme.spacing(6),
          },
          whiteSpace: "break-spaces",
          display: "inline-block",
          width: "max-content",
          color: theme.palette.primary.dark,
          padding: 0,
          borderBottom: "2px solid",
          borderColor: "transparent",
          textTransform: "uppercase",
          position: "relative",
          "&.MuiButton-menulinkSecondary, &:hover ": {
            color: theme.palette.primary.dark,
            borderColor: theme.palette.primary.dark,
            background: "none",
          },
          "& .MuiButton-endIcon": {
            position: "absolute",
            top: 0,
            bottom: 0,
            margin: "auto",
            right: "-40px",
            display: "flex",
            alignItems: "center",
            [theme.breakpoints.down("md")]: {
              top: 0,
              alignItems: "flex-start",
            },
            "& svg": {
              width: 36,
              height: 36,
            },
          },
        };
      },
    },
  ],
};

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    menulink: true;
    companylink: true;
  }
}
