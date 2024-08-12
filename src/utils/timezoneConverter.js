import moment from 'moment-timezone';

export const convertTime = (time, fromZone, toZone) => {
  return moment.tz(time, fromZone).tz(toZone).format('HH:mm');
};
