import { alertTestBtnHandler } from "./handlers";
import { alertTestBtn } from "./selectors";

const listener = () => {
  alertTestBtn.addEventListener("click", alertTestBtnHandler);
};

export default listener;
