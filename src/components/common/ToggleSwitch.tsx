import React, { Component } from "react";
import classNames from "classnames";

import css from "./ToggleSwitch.module.scss";

type Props = {
  defaultChecked: boolean;
};

const ToggleSwitch: React.FC<Props> = ({ defaultChecked }) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(defaultChecked);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={css.switch}>
      <input type="checkbox" onChange={handleChange} checked={isChecked} />
      <span className={classNames(css.slider, css.round)}></span>
    </label>
  );
};

export default ToggleSwitch;
