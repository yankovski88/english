// определяем действия
export const ActionType = {
  ADD_ANSWER: `main/ADD_ANSWER`,
};

// создаем объект функция которые возвращают экшин
// export const ActionCreator = {
//   setGenre: (genre) => ({
//     type: ActionType.GENRE, // тип экшина
//     payload: genre, // payload это полезная нагрузка которую появляется при клике от пользователя
//   }),
//
// };

export const addAnswer = (title, text) => ({
    type: ActionType.ADD_ANSWER, // тип экшина
    payload: {
      title,
      text
    }, // payload это полезная нагрузка которую появляется при клике от пользователя
  });
