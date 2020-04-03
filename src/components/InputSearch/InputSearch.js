import React from "react";
import {
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup
} from "reactstrap";

const InputSearch = ({ className }) => {
  return (
    <Form className={`navbar-search form-inline mr-3 d-none d-md-flex ml-lg-3 ${className}`}>
      <FormGroup className="mb-0 w-100">
        <InputGroup className="input-group-alternative w-100">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="fas fa-search" />
            </InputGroupText>
          </InputGroupAddon>
          <Input placeholder="Busque livros pelo título autor ou ISBN" type="text" />
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default InputSearch;
