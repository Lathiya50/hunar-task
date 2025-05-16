import { Button, useTheme, useMediaQuery } from "@mui/material";

const ActionButton = ({
  onClick,
  label,
  variant = "contained",
  color = "primary",
  sx = {},
  ...rest
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      sx={{
        borderRadius: 1,
        textTransform: "none",
        padding: isMobile ? "8px 16px" : "6px 16px",
        fontSize: { xs: "0.875rem", sm: "0.9rem" },
        whiteSpace: "nowrap",
        outline: "none",
        "&:focus-visible": {
          outline: "none",
        },
        ...sx,
      }}
      {...rest}
    >
      {label}
    </Button>
  );
};

export default ActionButton;
