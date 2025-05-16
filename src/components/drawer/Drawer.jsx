import { memo, useMemo } from "react";
import { Drawer, Box, Typography, IconButton, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DrawerHeader = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px",
}));

const DrawerContent = styled(Box)(() => ({
  padding: "0px 24px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const FooterBox = memo(({ children }) => (
  <Box
    sx={{
      borderTop: "1px solid #e0e0e0",
      padding: "24px",
      marginTop: "auto",
    }}
  >
    {children}
  </Box>
));

const CustomDrawer = memo(
  ({
    open,
    onClose,
    title,
    children,
    footerContent,
    width = { xs: "100%", sm: "80%", md: "500px" },
  }) => {
    const paperProps = useMemo(
      () => ({
        sx: {
          width: width,
          maxWidth: "100%",
          overflowY: "auto",
        },
      }),
      [width]
    );

    return (
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        PaperProps={paperProps}
      >
        <DrawerHeader>
          <Typography variant="h6" fontWeight={600}>
            {title}
          </Typography>
          <IconButton onClick={onClose} aria-label="close drawer">
            <CloseIcon />
          </IconButton>
        </DrawerHeader>

        <DrawerContent>{children}</DrawerContent>
        <Box sx={{ flexGrow: 1 }} />
        {footerContent && <FooterBox>{footerContent}</FooterBox>}
      </Drawer>
    );
  }
);

export default CustomDrawer;
