import {ALL_GENRES, EMAIL_REGEX, NUMBER_FILM} from "../constants/constants";
import {regularVerbs} from "../mock/mockRegular";


export const getTimeMovie = (timeMovie) => {
  const MINUTES_IN_HOUR = 60;
  if (timeMovie / MINUTES_IN_HOUR > 1) {
    const timeHour = Math.floor(timeMovie / MINUTES_IN_HOUR);
    const timeMinute = timeMovie - MINUTES_IN_HOUR * timeHour;
    return `${timeHour}h ${timeMinute}m`;
  } else if (timeMovie / MINUTES_IN_HOUR < 1) {
    return `${0}h ${timeMovie}m`;
  }
  return ``;
};


export const getGenreFilms = (typeGenre, itemFilms) => {
  const films = itemFilms.slice();
  if (typeGenre === ALL_GENRES) {
    return films;
  } else {
    const genreFilms = [];
    for (const item of films) {
      if (item.genre === typeGenre) {
        genreFilms.push(item);
      }
    }
    return genreFilms;
  }
};

// функция которая возвращает массив фильмов для рендера на основании числа фильмов сколько надо
export const getActiveFilms = (films, countShowFilm) => {
  let activeFilms;
  if (films.length > NUMBER_FILM) {
    activeFilms = films.slice(0, countShowFilm);
  } else {
    activeFilms = films;
  }
  return activeFilms;
};


// функция которая получает массив фильмов, а выводит все уникальный жанры для меню
export const getUniqueGenres = (films) => {
  const genres = [ALL_GENRES];
  for (const item of films) {
    genres.push(item.genre);
  }
  return Array.from(new Set(genres));
};


// написать функцию которая из массива с фильмами по id найдет жанр
export const getGenreById = (idFilm, itemFilms) => {
  const films = itemFilms.slice();

  let genre = `All genre`;
  for (const item of films) {
    if (+idFilm === item.id) {
      genre = item.genre;
    }
  }
  return genre;
};

export const formatTime = (seconds) => {
  const SECONDS_IN_MINUTE = 60;
  const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * 60;

  const fullHours = Math.floor(seconds / SECONDS_IN_HOUR);
  const remainingSecondsAfterHour = seconds % SECONDS_IN_HOUR;
  const fullMinutes = Math.floor(remainingSecondsAfterHour / SECONDS_IN_MINUTE);
  const fullSeconds = Math.floor(remainingSecondsAfterHour % SECONDS_IN_MINUTE);

  return `${fullHours.toString().padStart(2, `0`)}:${fullMinutes.toString().padStart(2, `0`)}:${fullSeconds.toString().padStart(2, `0`)}`;
};


export const isValidEmail = (email) => EMAIL_REGEX.test(email);


export const getRandomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
let arr = [2, 11, 37, 42];
arr = shuffle(regularVerbs);



// function get from object a value then from the value get second value.
export const getValue = (arr) => {
  const items = [];
  for (let item of arr){
    items.push(Object.values(item))
  }
  return items
}
