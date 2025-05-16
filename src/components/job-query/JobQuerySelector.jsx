import { memo, useMemo } from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import JobItem from "./JobItem";

const JobQuerySelector = memo(
  ({ onJobQueryChange, jobs, selectedJobId, sx }) => {
    const selectedJob = useMemo(
      () => jobs.find((job) => job.id === selectedJobId),
      [jobs, selectedJobId]
    );

    const selectedDisplay = selectedJob?.title || "";

    const menuProps = useMemo(
      () => ({
        PaperProps: {
          style: {
            maxHeight: 400,
          },
        },
      }),
      []
    );

    return (
      <FormControl fullWidth variant="outlined" margin="normal" sx={sx}>
        <InputLabel id="job-query-label">Job Query Title</InputLabel>
        <Select
          labelId="job-query-label"
          id="job-query-select"
          value={selectedJobId || ""}
          onChange={(e) => onJobQueryChange(e.target.value)}
          label="Job Query Title"
          renderValue={() => selectedDisplay}
          MenuProps={menuProps}
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
              <JobItem job={job} isSelected={selectedJobId === job.id} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
);

export default JobQuerySelector;
