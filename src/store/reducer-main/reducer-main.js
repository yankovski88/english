import {ActionType} from "../action-type";
import {fruits, numbers, orders, seasons, months, days, times, timeIntervals, money, colors, properties, irregularVerbs} from "../../mock/mock";
const initialState = {
  activeWords: [],
  allErrorWords: [],
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
  irregularVerbs: irregularVerbs,
  badAnswers: [],
}

export const reducerMain = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ActionType.SET_LIST_WORDS: // первое загрузили все фильмы
      return {
        ...state,
        activeWords: action.payload
      };
    case ActionType.SET_BAD_ANSWERS: // первое загрузили все фильмы
      return {
        ...state,
        badAnswers: [action.payload, ...state.badAnswers]
      };

    default:
      return state;
  }
};

