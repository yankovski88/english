import {answers} from "../../mock/mock"
import {ActionType} from "../action-quastion";
const initialState = {
  answers: answers,

}

export const userAnswer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ActionType.ADD_ANSWER: // первое загрузили все фильмы
      return {
        answers: [...state.answers, action.payload]
      };

    default:
      return state;
  }
};

