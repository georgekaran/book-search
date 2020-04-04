import React from "react";
import ReactDatetime from "react-datetime";
import {
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

import { useStateValue } from "../../context/Context";

const YearPicker = ({ register, name }) => {
  const [, contextDispatch] = useStateValue();

  const handleOnBlur = (moment) => {
    contextDispatch({ type: 'UPDATE_YEARS', name, year: moment.year()})
  };
  
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
              placeholder: "Date Picker Here",
              name: name,
              ref: register,
              type: "number"
            }}
            timeFormat={false}
            dateFormat="YYYY"
            onBlur={handleOnBlur}
          />
        </InputGroup>
      </FormGroup>
    </>
  );
};

export default YearPicker;
