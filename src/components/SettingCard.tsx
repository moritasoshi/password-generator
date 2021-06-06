import { Setting } from "types/types";
import classNames from "classnames";

import css from "./SettingCard.module.scss";
import ToggleSwitch from "./common/ToggleSwitch";

type Props = {
  setting: Setting;
};

const Card: React.FC<Props> = ({ setting }) => {
  return (
    <div className={css.card}>
      <div className={css.itemWrapper}>
        <div className={classNames(css.item, css.itemLeft)}>
          <p>{setting.title}</p>
        </div>
        <div className={classNames(css.item, css.itemRight)}>
          <ToggleSwitch defaultChecked={setting.isChecked}></ToggleSwitch>
        </div>
      </div>
    </div>
  );
};

export default Card;
