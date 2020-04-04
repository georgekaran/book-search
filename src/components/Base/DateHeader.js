import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import "./DateHeader.scss";

import YearPicker from "../YearPicker/YearPicker";

const DateHeader = ({ totalResults = 0 }) => {
  const { register, handleSubmit } = useForm();

  const handleOnSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <div className="card-header d-flex">
        <label className="label-date-info form-control-label form-group">
          Filtrar ano de publicação
        </label>
        <YearPicker register={register} name="yearIni" />
        <label className="label-date-info form-control-label form-group">
          até
        </label>
        <YearPicker register={register} name="yearEnd" />

        <label className="label-date-info form-control-label form-group label-results">
            {totalResults} resultados encontrados
          </label>
        
      </div>
    </form>
  );
};

DateHeader.propTypes = {
  totalResults: PropTypes.number
}

export default DateHeader;
