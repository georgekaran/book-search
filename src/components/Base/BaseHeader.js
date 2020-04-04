import React from "react";
import { CardHeader, Button, Form } from "reactstrap";
import { useForm } from "react-hook-form";

import Logo from "../../components/Logo/Logo";
import InputSearch from "../../components/InputSearch/InputSearch";
import { useStateValue } from "../../context/Context";


const BaseHeader = () => {
  const [, contextDispatch] = useStateValue();
  const { handleSubmit, register } = useForm();

  const onFormSubmit = (data) => {
    contextDispatch({ type: "UPDATE_SEARCH", search: data.search })
    console.log("Search", data);
  };

  return (
    <CardHeader>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="d-flex">
          <Logo className="logo" />
          <InputSearch className="search" register={register} name="search" />
          <div className="btn-search">
            <Button type="submit" color="info">
              Pesquisar
            </Button>
          </div>
        </div>
      </Form>
    </CardHeader>
  );
};

export default BaseHeader;
