import {
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  ListItemText,
  Radio,
  Typography,
  Divider,
} from "@mui/material";
import {
  StyledListItem,
  LocationText,
  EditedText,
} from "../styled";
const JobQuerySelector = ({ onJobQueryChange, jobs, selectedJobId }) => {
  const selectedJob = jobs.find((job) => job.id === selectedJobId);
  const selectedDisplay = selectedJob?.title || "";

  return (
    <FormControl fullWidth variant="outlined" margin="normal">
      <InputLabel id="job-query-label">Job Query Title</InputLabel>
      <Select
        labelId="job-query-label"
        id="job-query-select"
        value={selectedJobId || ""}
        onChange={(e) => onJobQueryChange(e.target.value)}
        label="Job Query Title"
        renderValue={() => selectedDisplay}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 400,
            },
          },
        }}
      >
        {jobs.map((job) => (
          <MenuItem
            key={job.id}
            value={job.id}
            sx={{
              padding: 0,
              "&.MuiMenuItem-root": {
                display: "block",
                width: "100%",
              },
            }}
          >
            <StyledListItem
              disablePadding
              sx={{
                width: "100%",
                padding: "12px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Radio
                edge="start"
                checked={selectedJobId === job.id}
                sx={{ mr: 1 }}
              />
              <ListItemText
                disableTypography
                primary={
                  <Box>
                    <LocationText>
                      {job.company} <span>•</span> {job.location} <span>•</span>
                      {job.openings} Openings
                    </LocationText>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {job.title}
                    </Typography>
                    <EditedText>
                      Edited On: {job.editDate} • Edited By: {job.editedBy}
                    </EditedText>
                  </Box>
                }
              />
            </StyledListItem>
            <Divider />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default JobQuerySelector;
