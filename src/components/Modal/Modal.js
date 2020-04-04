import React from "react";
import PropTypes from "prop-types";
import {
  Modal as ModalStrap,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input
} from "reactstrap";
import uniqid from 'uniqid';

const ModalBook = ({ title, show, handleClose, book }) => {
  const bookLabels = [
    "Título",
    "ISBN",
    "Autor(s)",
    "Editora",
    "Ano",
    "Idioma",
    "Peso(g)",
    "Dimensões",
  ];
  const bookToArray = Object.values(book);

  return (
    <div>
      <ModalStrap isOpen={show} toggle={handleClose}>
        <ModalHeader toggle={handleClose}>{title}</ModalHeader>
        <ModalBody>
          {bookToArray.map((bookProperty, index) => {
              const id = uniqid("button");
              return (
                <>
                  <FormGroup key={id}>
                    <label className="form-control-label" htmlFor={id}>
                      {bookLabels[index]}
                    </label>
                    <Input
                      className="form-control-alternative"
                      id={id}
                      value={bookProperty}
                      disabled
                    />
                  </FormGroup>
                </>
              );
            })}
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalStrap>
    </div>
  );
};

ModalBook.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  book: PropTypes.object.isRequired,
};

export default ModalBook;
