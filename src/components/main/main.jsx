import React from "react";
import BlockWords from "../block-words/block-words";
// import {NavWords} from "../nav-words/nav-words";
import BlockErrorWords from "../block-error-words/block-error-words";

// import {words} from "../../mock/mock"

const Main = (props) => {
  const {fruits, numbers, orders, seasons, months, days, times, timeIntervals, money, colors, properties} = props;


  const [words, setWords] = React.useState([]); // {start: "начинать"}

  const [errorWords, setErrorWords] = React.useState([]);
  const [trueWords, setTrueWords] = React.useState([]);
  const [inputAnswer, setInputAnswer] = React.useState(``);
  const [numberWord, setNumberWord] = React.useState(null);
  const [showWord, setShowWord] = React.useState(words[numberWord]);
  const [isList, setIsList] = React.useState(false);
  const [isListError, setIsListError] = React.useState(false);


// словосочетание которое сейчас показывается

  const enterValue = (event) => {
    setInputAnswer(event.target.value)
  }

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  }


  const nextWord = () => {
    if (numberWord <= words.length - 1) {
      setNumberWord((prev) => prev + 1)
    } else if (numberWord === words.length - 1) {
      return
      // setNumberWord(words.length - 1)
    }

    if (showWord !== undefined) {
      if (Object.keys(showWord)[0] === inputAnswer) {
        setTrueWords((prev) => [showWord, ...prev])
        // setErrorWords(delete Object.keys(showWord)[0])
        // delete Object.keys(showWord)[0]
        const arr = errorWords.slice();
        for (const item of errorWords) {
          if (showWord === item) {
            arr.splice(showWord, 1)
            setErrorWords(arr)
          }
        }

      } else if (Object.keys(showWord)[0] !== inputAnswer) {
        setErrorWords((prev) => [showWord, ...prev])
      }
      setInputAnswer(``);
    }
  }

  React.useEffect(() => {
    setShowWord(words[numberWord])
  }, [numberWord])


  const showList = () => {
    if (isList) {
      setIsList(false)
    } else if (!isList) {
      setIsList(true)
    }
  }

  const showListErrors = () => {
    if (isListError) {
      setIsListError(false)
    } else if (!isListError) {
      setIsListError(true)
    }
  }

  const getFruits = () => {
    setWords(fruits)
    setNumberWord(0)

    setTrueWords([])
    setErrorWords([])
  }

  const getErrors = () => {
    setWords(errorWords)
    setNumberWord(0)

    setTrueWords([])
    setErrorWords([])
  }

  const handleKeyPressEnter = (event) => {
    if (event.key === `Enter`) {
      nextWord()
    }
  }

  const handleNumbers = () => {
    setWords(numbers)
  }

  const handleOrders = () => {
    setWords(orders)
  }

  const handleSeasons = () => {
    setWords(seasons)
  }

  const handleMonths = () => {
    setWords(months)
  }

  const handleDays = () => {
    setWords(days)
  }

  const handleTimes = () => {
    setWords(times)
  }

  const handleTimeIntervals = () => {
    setWords(timeIntervals)
  }

  const handleMoney = () => {
    setWords(money)
  }

  const handleColors = () => {
    setWords(colors)
  }

  const handleProperties = () => {
    setWords(properties)
  }

  return (
    <main className="main">
      {/*<NavWords/>*/}








      <div className="nav-words">
        <div className="nav-block">
          <h2 className="nav-block__title">Числа и время</h2>
          <ul className="nav-block__ul">
            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleNumbers}>Числа</a>
            </li>

            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleOrders}>Порядковые числа</a>
            </li>

            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleSeasons}>Сезон</a>
            </li>

            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleMonths}>Месяцы</a>
            </li>

            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleDays}>Дни</a>
            </li>


            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleTimes}>Время</a>
            </li>

            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleTimeIntervals}>Временной интервал</a>
            </li>

            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleMoney}>Деньги</a>
            </li>
          </ul>
        </div>


        <div className="nav-block">
          <h2 className="nav-block__title">Характеристики</h2>
          <ul className="nav-block__ul">
            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleColors}>Цвета</a>
            </li>

            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleProperties}>Свойства</a>
            </li>

          </ul>
        </div>

        <div className="nav-block">
          <h2 className="nav-block__title">Еда</h2>
          <ul className="nav-block__ul">
            <li className="nav-block__li">
              <a className="nav-block__link" onClick={getFruits}>Фрукты</a>
            </li>
          </ul>
        </div>

      </div>


      <div className="block-answer">
        <div className="block-answer__wrapper">


        <div className="statistics">
          <ul className="statistics__ul">
            <li className="statistics__li">Всего слов: <p>{words.length}</p></li>
            <li className="statistics__li">
              Отвечено: <p>{numberWord !== null ? numberWord : 0}</p>
            </li>
            <li className="statistics__li">
              Осталось: <p>{numberWord !== null ? words.length - numberWord : 0}</p>
            </li>

            <li className="statistics__li">
              Правильные ответы: <p>{trueWords.length}</p>
            </li>
          </ul>


        </div>




        <div className="add-answer">
          <div className="add-answer__word">
            {showWord ? Object.values(showWord) : ``}
          </div>
          <div className="add-answer__input-wrap">

            <input type="text" className="add-answer__input"
                   onKeyPress={handleKeyPressEnter}
                   value={inputAnswer}
                   onChange={(event) => enterValue(event)}
                   placeholder="answer"
            >
        </input>
            <button onClick={nextWord} className="add-answer__btn-next btn">Следующее</button>

          </div>
        <div className="add-answer__btn-wrapper">
          <button onClick={showList} className="add-answer__btn-show-list btn">Показать список активных слов</button>

          <button onClick={getErrors} className="btn">Изучить ошибки <p>{errorWords.length}</p></button>
          <button onClick={showListErrors} className="btn">Показать ошибки<p>{errorWords.length}</p></button>
        </div>
      </div>









        </div>
    </div>






      {isList ? <BlockWords words={words}/> : ``}
      {isListError ? <BlockErrorWords errorWords={errorWords}/> : ``}


      {/*{isListError ? errorWords.map((errorWord, index) => {*/}
      {/*return <div key={index}>Object.entries(errorWord).join(``)}</div>}) : ``}*/}


</main>

)
}

export default Main;
