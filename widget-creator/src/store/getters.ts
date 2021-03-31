import { DateTime, NewDateTime, State } from "../models/index";

const getTime = (time: number) => {
  const stringTime = String(time);
  const changedTime =
    stringTime.length === 1
      ? [0, time]
      : stringTime.split("").map(item => +item);
  return changedTime;
};

export default {
  getDateTime: (state: State) => {
    const countdown: DateTime = state.demo.countdown;
    const dateTime: NewDateTime = {};
    for (const key in countdown) {
      const val = countdown[key];
      dateTime[key] = getTime(+val);
    }
    return {
      dateTime
    };
  }
};
