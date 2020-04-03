import React from 'react';
import PropTypes from 'prop-types';
import {CardHeader} from "reactstrap";

const BaseHeader = ({ children }) => {
  return (
    <CardHeader className="border-0">
      <h3 className="mb-0">{children}</h3>
    </CardHeader>
  );
};

BaseHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default BaseHeader;