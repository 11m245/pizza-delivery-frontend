import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Form } from "react-router-dom";

function SelectComponent({ title, options }) {
  // const [option, setOption] = useState("");

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label={title}
          onChange={Form.setFieldValue(field.name, value)}
        >
          {options.map((option) => (
            <MenuItem value={option.value}>{option.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export { SelectComponent };
