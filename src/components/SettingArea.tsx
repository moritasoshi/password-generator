import React from "react"

import SettingCard from "./SettingCard"
import { Setting } from "../types/types"
import css from "./SettingArea.module.scss"

const SettingArea: React.FC = () => {
    const settings: Setting[] = [
      { title: "Include Uppercase", isChecked: true },
      { title: "Include Lowercase", isChecked: true },
      { title: "Include Numbers", isChecked: true },
      { title: "Include Symbols", isChecked: false },
    ];
  
  return (
    <div>
      <div className={css.title}>SETTINGS</div>
      {settings.map((setting) => (
        <SettingCard setting={setting} key={setting.title}></SettingCard>
      ))}
    </div>
  );
}

export default SettingArea;