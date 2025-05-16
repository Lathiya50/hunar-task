import React from "react";
import {
  MenuItem,
  ListItemText,
  Radio,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import {
  StyledListItem,
  LocationText,
  OpeningsText,
  EditedText,
} from "../styled";

const JobMenuItem = ({ job, isSelected }) => {
  return (
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
          checked={isSelected}
          onChange={() => {}}
          sx={{ mr: 1 }}
        />
        <ListItemText
          disableTypography
          primary={
            <Box>
              <LocationText>
                {job.company} <span>•</span> {job.location} <span>•</span>
                <OpeningsText>{job.openings} Openings</OpeningsText>
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
  );
};

export default JobMenuItem;
