import React from "react";
import BlockWords from "../block-words/block-words";
import NavWords from "../nav-words/nav-words";
import BlockErrorWords from "../block-error-words/block-error-words";
import {connect} from "react-redux";
import {setActiveWords, setBadAnswers} from "../../store/action-type";
import BlockAllWords from "../block-all-error-words/block-all-error-words";
import BlockAllErrorWords from "../block-all-error-words/block-all-error-words";
// import getRandomInRange from "../../mock/mock";
// import {ITodo} from "../../interfaces/interfaces"

// import {words} from "../../mock/mock"

const Main = (props) => {
  const {activeWords, onSetActiveWords, onSetBadAnswers, badAnswers} = props;
  const [todos, setTodos] = React.useState([]) // ITodo[] указали, что ITodo массив

  // забираем элементы
  React.useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(`todos`) || `[]`) // в локол сторедж получаем item todos // JSON.parse() начинаем парсить строку т.к. мы ждем массив
    // as ITodo указали к какому типу будет принадлежать массив
    setTodos(saved)
  }, [])

  React.useEffect(() => {
    localStorage.setItem(`todos`, JSON.stringify(todos))
  }, [todos]) // если изменяется todos, то он должен записываться в LocalStorage

  // const addHandler = (title) => {
  //
  //   // const newTodo: ITodo = {
  //   //   title: title,
  //   //   id: Date.now(),
  //   //   completed: false, // задача не выполнена
  //   // }
  //   setTodos((prev) => [newTodo, ...prev]) // такая запись более корректная. prev реакт гарантирует, что это предыдущее состояние стейта
  //   // setTodos([newTodo, ...todos])
  // }




  // const [words, setWords] = React.useState([]); // {start: "начинать"}
  //
  const [errorWords, setErrorWords] = React.useState([]);
  const [trueWords, setTrueWords] = React.useState([]);
  const [inputAnswer, setInputAnswer] = React.useState(``);
  const [numberWord, setNumberWord] = React.useState(null);
  const [showWord, setShowWord] = React.useState(activeWords[numberWord]);
  const [isList, setIsList] = React.useState(false);
  const [isListError, setIsListError] = React.useState(false);
  const [isAllErrorList, setIsAllErrorList] = React.useState(false);


// словосочетание которое сейчас показывается

  const enterValue = (event) => {
    setInputAnswer(event.target.value)
  }

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  }


  const nextWord = () => {
    if (numberWord <= activeWords.length - 1) {
      setNumberWord((prev) => prev + 1)
    } else if (numberWord === activeWords.length - 1) {
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
        onSetBadAnswers(inputAnswer);
        setErrorWords((prev) => [showWord, ...prev])

        setTodos((prev) => [showWord, ...prev]) // должно добавлять слова в LoacalStore
      }
      setInputAnswer(``);
    }
  }

  React.useEffect(() => {
    setShowWord(activeWords[numberWord])
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

  const showAllErrorList = () => {
    if (isAllErrorList) {
      setIsAllErrorList(false)
    } else if (!isAllErrorList) {
      setIsAllErrorList(true)
    }
  }
  // const getFruits = () => {
  //   setWords(fruits)
  //   setNumberWord(0)
  //
  //   setTrueWords([])
  //   setErrorWords([])
  // }

  const getErrors = () => {
    onSetActiveWords(errorWords)
    setNumberWord(0)

    setTrueWords([])
    setErrorWords([])
  }
  const getAllErrors = () => {
    onSetActiveWords(todos)
    setNumberWord(0)

    setTrueWords([])
    setErrorWords([])
  }

  const handleKeyPressEnter = (event) => {
    if (event.key === `Enter`) {
      nextWord()
    }
  }

  // const handleNumbers = () => {
  //   setWords(numbers)
  // }
  //
  // const handleOrders = () => {
  //   setWords(orders)
  // }
  //
  // const handleSeasons = () => {
  //   setWords(seasons)
  // }
  //
  // const handleMonths = () => {
  //   setWords(months)
  // }
  //
  // const handleDays = () => {
  //   setWords(days)
  // }
  //
  // const handleTimes = () => {
  //   setWords(times)
  // }
  //
  // const handleTimeIntervals = () => {
  //   setWords(timeIntervals)
  // }
  //
  // const handleMoney = () => {
  //   setWords(money)
  // }
  //
  // const handleColors = () => {
  //   setWords(colors)
  // }
  //
  // const handleProperties = () => {
  //   setWords(properties)
  // }

  const getRandomInRange = (min, max)=> {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [text, setText] = React.useState('start');

  const pronouns = ['Я', 'ты', 'он', 'она', 'это', 'мы', 'они']
  const verbs = ['иду(ет, ем, дут)', 'ходил(ли)', 'пойду(ду, дем)']
  const rights = ['', '', '', '', 'не']
  const questions = ['', '', '', '', '?']
  const getText = (pronouns, verbs, rights, questions)=>{
    const arr = [];
    arr.push(pronouns[getRandomInRange(0, pronouns.length -1)])
    arr.push(rights[getRandomInRange(0, rights.length -1)])
    arr.push(verbs[getRandomInRange(0, verbs.length -1)])
    arr.push(questions[getRandomInRange(0, questions.length -1)])

    return arr.join(' ');
  }


  const handleNextText = ()=>{
    setText(getText(pronouns, verbs, rights, questions))

  }

  return (
    <main className="main">
      <NavWords/>
<div style={{display: "flex", flexDirection: "column", alignItems:'center'}}>
  <div style={{fontSize: "20px"}}>{text}</div>
  <button onClick={handleNextText} style={{padding: "30px", background: "lightblue"}}>Next</button>
</div>

      <div className="block-answer">
        <div className="block-answer__wrapper">


        <div className="statistics">
          <ul className="statistics__ul">
            {/*<li className="statistics__li">Всего слов: <p>{activeWords.length}</p></li>*/}
            <li className="statistics__li">
              Отвечено: <p>{numberWord !== null ? numberWord : 0}</p>
            </li>
            <li className="statistics__li">
              Осталось: <p>{numberWord !== null ? activeWords.length - numberWord : 0}</p>
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
            <button onClick={nextWord} className="add-answer__btn-next btn">Next word</button>
            <button onClick={showList} className="add-answer__btn-show-list btn">Показать слова</button>

          </div>
        <div className="add-answer__btn-wrapper">

          <button onClick={getErrors} className="btn">Изучить ошибки<p>{errorWords.length}</p></button>
          <button onClick={showListErrors} className="btn">Показать ошибки<p>{errorWords.length}</p></button>
          <button onClick={getAllErrors} className="btn">Изучить все ошибки<p>{todos.length}</p></button>
          <button onClick={showAllErrorList} className="btn">Показать все ошибки<p>{todos.length}</p></button>
        </div>
      </div>

        </div>
    </div>
<div style={{"color":"red"}}>{badAnswers}</div>
      {isList ? <BlockWords words={activeWords}/> : ``}
      {isListError ? <BlockErrorWords errorWords={errorWords}/> : ``}
      {isAllErrorList ? <BlockAllErrorWords allErrorWords={todos}/> : ``}

</main>

)
};

const mapStateToProps = (state) => ({
  activeWords: state.MAIN.activeWords,
  badAnswers: state.MAIN.badAnswers,
})

const mapDispatchToProps = (dispatch)=>({
  onSetActiveWords(activeWords) {
    dispatch(setActiveWords(activeWords)); // genre это payload дополнитеьная инфа
  },
  onSetBadAnswers(badAnswers) {
    dispatch(setBadAnswers(badAnswers)); // genre это payload дополнитеьная инфа
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
