import css from "./Dialog.module.scss";
import SettingArea from "./SettingArea";

const Dialog = () => {

  return (
    <div className={css.dialog}>
      <div className={css.title}>{"Password Generator"}</div>
      <SettingArea></SettingArea>
    </div>
  );
};
export default Dialog;
