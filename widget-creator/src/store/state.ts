import { demoVisible, DateTime } from "../models/index";

export default {
  demo: {
    visible: {
      countdown: false,
      popup: false,
      sticky: false
    } as demoVisible,
    countdown: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    } as DateTime,
    timer: false,
    btnClickStatus: false
  }
};
