import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LanguageIcon from "@mui/icons-material/Language";

export default function SelectSmall() {
  const [age, setAge] = React.useState("ru");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 120,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
      size="small"
    >
      <LanguageIcon style={{ position: "absolute", top: "-22px" }} />
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        onChange={handleChange}
        MenuProps={{ disableScrollLock: true }}
        sx={{
          border: "none",
          height: "44px",
          padding: "20px",
          paddingRight: "0px",
          position: "absolute",
          fontSize: "18px",
          top: "-5px",
          "& .MuiSelect-icon": {
            display: "none",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          ".MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      >
        <MenuItem value="uz">Uzbek</MenuItem>
        <MenuItem value="ru">Русский</MenuItem>
        <MenuItem value="eng">English</MenuItem>
      </Select>
    </FormControl>
  );
}
