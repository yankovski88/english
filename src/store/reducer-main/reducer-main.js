import {ActionType} from "../action-type";
import {fruits, numbers, orders, seasons, months, days, times, timeIntervals, money, colors, properties} from "../../mock/mock";
const initialState = {
  activeWords: [],
  fruits: fruits,
  numbers: numbers,
  orders: orders,
  seasons: seasons,
  months: months,
  days: days,
  times: times,
  timeIntervals: timeIntervals,
  money: money,
  colors: colors,
  properties: properties,
}

export const reducerMain = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ActionType.SET_LIST_WORDS: // первое загрузили все фильмы
      return {
        ...state,
        activeWords: action.payload
      };

    default:
      return state;
  }
};

