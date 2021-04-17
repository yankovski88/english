import React from "react";

// import {words} from "../../mock/mock"

const Main = (props) => {
  const {fruits} = props;
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

  const handleKeyPressEnter = (event)=>{
    if(event.key === `Enter`){
      nextWord()
    }
  }


  return (
    <main className="main">
      <div>Всего слов: {words.length}</div>
      <div>
        Отвечено: {numberWord !== null ? numberWord : 0}
      </div>
      <div>
        Осталось: {numberWord !== null ? words.length - numberWord : 0}
      </div>
      <div>
        Ошибок: {errorWords.length}
      </div>
      <div>
        Правильные ответы: {trueWords.length}
      </div>
      <div>
        {showWord ? Object.values(showWord) : ``}
      </div>
      <input
        onKeyPress={handleKeyPressEnter}
        value={inputAnswer}
        onChange={(event) => enterValue(event)}
        className="inputAnswer" placeholder="answer"></input>
      <button onClick={nextWord}>next word</button>
      <button onClick={showList}>Показать список слов</button>
      <button onClick={showListErrors}>Показать errors</button>

      <button onClick={getFruits}>Изучить fruits</button>

      <button onClick={getErrors}>Изучить errors</button>


      {isList ? words.map((fruit, index) => {
        return <div key={index}>
          {Object.entries(fruit).join(``)}
        </div>
      }) : ``}

      {isListError ? errorWords.map((errorWord, index) => {
        return <div key={index}>
          {Object.entries(errorWord).join(``)}
        </div>
      }) : ``}
    </main>

  )
}

export default Main;
