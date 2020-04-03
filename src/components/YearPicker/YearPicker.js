import React from "react";
import ReactDatetime from "react-datetime";
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

const YearPicker = props => {
  
  return (
    <>
      <FormGroup>
        <InputGroup className="input-group-alternative base_input_border">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="ni ni-calendar-grid-58" />
            </InputGroupText>
          </InputGroupAddon>
          <ReactDatetime
            inputProps={{
              placeholder: "Date Picker Here"
            }}
            timeFormat={false}
            dateFormat="YYYY"
          />
        </InputGroup>
      </FormGroup>
    </>
  );
};

export default YearPicker;
