import React from 'react';
import PropTypes from 'prop-types';
import {CardHeader} from "reactstrap";

import Logo from "../../components/Logo/Logo";
import InputSearch from "../../components/InputSearch/InputSearch";
import { Button } from "reactstrap";

const BaseHeader = ({ children }) => {
  return (
    <CardHeader>
      <div className="d-flex">
          <Logo className="logo" />
          <InputSearch className="search" />
          <div className="btn-search">
            <Button type="submit" color="info">
              Pesquisar
            </Button>
          </div>
        </div>
    </CardHeader>
  );
};

BaseHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default BaseHeader;