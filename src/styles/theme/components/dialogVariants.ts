import {Components, Theme} from "@mui/material";

/**
 * @DialogVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the Dialog component
 *
 * @see https://mui.com/material-ui/react-dialog/#customization
 */
export const DialogVariants: Components<
    Omit<Theme, "components">
>["MuiDialog"] = {};
