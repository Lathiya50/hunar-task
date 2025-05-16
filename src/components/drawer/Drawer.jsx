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

const CustomDrawer = ({
  open,
  onClose,
  title,
  children,
  footerContent,
  width = { xs: "100%", sm: "80%", md: "500px" },
}) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: width,
          maxWidth: "100%",
          overflowY: "auto",
        },
      }}
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
      {footerContent && (
        <Box
          sx={{
            borderTop: "1px solid #e0e0e0",
            padding: "24px",
            marginTop: "auto",
          }}
        >
          {footerContent}
        </Box>
      )}
    </Drawer>
  );
};

export default CustomDrawer;
