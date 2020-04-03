import React from "react";
import "./Main.scss";

import Base from "../../components/Base/Base";
import BaseHeader from "../../components/Base/BaseHeader";
import DateHeader from "../../components/Base/DateHeader";

const Main = ({ children }) => {
  return (
    <div className="main-content bg-gradient-warning">
      <Base>
        <BaseHeader />
        <DateHeader />
      </Base>
    </div>
  );
};

export default Main;
