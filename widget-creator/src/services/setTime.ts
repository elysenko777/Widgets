import DifferenceDateTime from "./DifferenceDateTime";
import store from "../store/index";

const endDate = "2021-05-29"; // yyyy-mm-dd
const endTime = "22:00:00"; // hh:mm:ss
const obg = new DifferenceDateTime(new Date(), endDate, endTime);
const msInSec = 1000;

const setCurrentTime = () => {
  obg.today = new Date();
  store.dispatch("setActualCountdown", obg.getDifference());
};

export default (timer: number) => {
  const diffMs = obg.getDateDifferenceMillisec();
  const visibleCountdown = store.state.demo.visible.countdown;
  if (diffMs >= msInSec) {
    store.dispatch("toggleTimer", true);
    setCurrentTime();
  }
  if (visibleCountdown && diffMs >= msInSec) {
    timer = setInterval(() => {
      setCurrentTime();
      const emptyTime = Object.values(obg.getDifference()).every(
        item => item === 0
      );
      if (emptyTime || diffMs < msInSec) {
        store.dispatch("toggleTimer", false);
        clearInterval(timer);
      }
    }, 1000);
  } else {
    clearInterval(timer);
  }
  return timer;
};
