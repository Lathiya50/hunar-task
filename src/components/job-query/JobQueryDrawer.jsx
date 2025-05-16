import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import CustomDrawer from "../drawer/Drawer";
import { SAMPLE_JOBS } from "../../constants";
import JobQuerySelector from "./JobQuerySelector";

const JobQueryDrawer = ({ open, onClose }) => {
  const [selectedJobQuery, setSelectedJobQuery] = useState(null);

  useEffect(() => {
    if (!open) {
      setSelectedJobQuery(null);
    }
  }, [open]);

  const handleJobQueryChange = (queryId) => {
    setSelectedJobQuery(queryId);
  };

  const handleAddToShortlist = () => {
    onClose();
  };
  const footerContent = (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
        width: "100%",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        disabled={!selectedJobQuery}
        onClick={handleAddToShortlist}
        sx={{
          textTransform: "none",
          px: { xs: 3, sm: 4 },
          maxWidth: "300px",
          width: { xs: "80%", sm: "auto" },
        }}
      >
        Add Candidates to Shortlist
      </Button>
    </Box>
  );
  return (
    <CustomDrawer
      open={open}
      onClose={onClose}
      title="Move to Job Query"
      footerContent={footerContent}
    >
      <Box
        sx={{
          mb: { xs: 2, sm: 3 },
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            fontSize: { xs: "0.85rem", sm: "0.875rem" },
          }}
          fontWeight={600}
        >
          Select Job Query to move candidates to the shortlist tab
        </Typography>
        <JobQuerySelector
          jobs={SAMPLE_JOBS}
          selectedJobId={selectedJobQuery}
          onJobQueryChange={handleJobQueryChange}
          sx={{
            width: "100%",
            maxWidth: "800px",
          }}
        />
      </Box>
    </CustomDrawer>
  );
};

export default JobQueryDrawer;
