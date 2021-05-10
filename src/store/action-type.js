// определяем действия
export const ActionType = {
    SET_LIST_WORDS: `main/SET_LIST_WORDS`,
    SET_BAD_ANSWERS: `main/SET_BAD_ANSWERS`,
};

// создаем объект функция которые возвращают экшин
// export const ActionCreator = {
//   setGenre: (genre) => ({
//     type: ActionType.GENRE, // тип экшина
//     payload: genre, // payload это полезная нагрузка которую появляется при клике от пользователя
//   }),
//
// };

export const setActiveWords = (activeWords) => ({
    type: ActionType.SET_LIST_WORDS, // тип экшина
    payload: activeWords, // payload это полезная нагрузка которую появляется при клике от пользователя
  });

export const setBadAnswers = (badAnswer) => ({
  type: ActionType.SET_BAD_ANSWERS, // тип экшина
  payload: badAnswer, // payload это полезная нагрузка которую появляется при клике от пользователя
});
