import { memo } from "react";
import { Box, ListItemText, Radio, Typography, Divider } from "@mui/material";
import { StyledListItem, LocationText, EditedText } from "../styled";

const JobItem = memo(({ job, isSelected }) => {
  return (
    <>
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
        <Radio edge="start" checked={isSelected} sx={{ mr: 1 }} />
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
    </>
  );
});
export default JobItem;
