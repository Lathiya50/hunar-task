import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Paper,
  ThemeProvider,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";
import JobQueryDrawer from "./components/job-query/JobQueryDrawer";
import ActionButton from "./components/ActionButton";
import theme from "./theme";
import "./App.css";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth={false}
        className="main-container"
        sx={{
          px: { xs: 1.5, sm: 2.5, md: 4 },
          pt: { xs: 1, sm: 1.5, md: 2 },
          pb: { xs: 2, sm: 3, md: 4 },
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            my: { xs: 2, sm: 3, md: 4 },
            maxWidth: { sm: "95%", md: "90%" },
            mx: "auto",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant={isMobile ? "h5" : "h4"}
            component="h1"
            gutterBottom
            align="center"
            sx={{
              px: { xs: 1, sm: 2, md: 3 },
              mb: { xs: 2, sm: 2.5, md: 3 },
              fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.125rem" },
              lineHeight: { xs: 1.3, sm: 1.4, md: 1.4 },
            }}
          >
            Job Candidate Management System
          </Typography>

          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, sm: 2.5, md: 3 },
              mb: { xs: 2.5, sm: 3, md: 4 },
              mx: { xs: 0.5, sm: 1, md: 2 },
              borderRadius: { xs: 1, sm: 2 },
              width: "100%",
              maxWidth: { xs: "100%", sm: "90%", md: "800px" },
              boxShadow: {
                xs: "0 2px 4px rgba(0,0,0,0.1)",
                sm: "0 3px 6px rgba(0,0,0,0.12)",
              },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.15rem", md: "1.25rem" },
                mb: { xs: 1.5, sm: 2 },
              }}
            >
              Candidate Actions
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 1.5, sm: 1.5, md: 2 },
                flexWrap: "wrap",
              }}
            >
              <ActionButton
                label="Move to Job Query"
                onClick={handleOpenDrawer}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  mb: { xs: 1, sm: 0 },
                  py: { xs: 1, sm: 0.75 },
                }}
              />
            </Box>
          </Paper>
        </Box>

        {/* Job Query Drawer */}
        <JobQueryDrawer
          open={drawerOpen}
          onClose={handleCloseDrawer}
          isMobile={isMobile}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
