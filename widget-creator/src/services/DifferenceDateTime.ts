import { DateTime } from "../models/index";

export default class DifferenceDateTime {
    today: Date;
    endDate: string;
    endTime: string;
    constructor(today: Date, endDate: string, endTime: string) {
      this.today = today;
      this.endDate = endDate;
      this.endTime = endTime;
    }
    getEndDateTime(): Date {
      return new Date(`${this.endDate}T${this.endTime}`);
    }
    getDateDifferenceMillisec(): number {
      return Number(this.getEndDateTime()) - Number(this.today);
    }
    getTime(time: number): DateTime {
      const fullTime = time;
      const specificTime = Math.floor(fullTime);
      const difference = fullTime - specificTime;
      return {
        full: fullTime,
        once: specificTime,
        difference: difference
      };
    }
    getDays(): DateTime {
      const time = this.getDateDifferenceMillisec() / 1000 / 60 / 60 / 24;
      return this.getTime(time);
    }
    getHours(): DateTime {
      return this.getTime(+this.getDays().difference * 24);
    }
    getMinutes(): DateTime {
      return this.getTime(+this.getHours().difference * 60);
    }
    getSeconds(): DateTime {
      return this.getTime(+this.getMinutes().difference * 60);
    }
    getDifference(): DateTime {
      return {
        days: this.getDays().once,
        hours: this.getHours().once,
        minutes: this.getMinutes().once,
        seconds: this.getSeconds().once
      };
    }
  }