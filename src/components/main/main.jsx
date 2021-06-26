import React from "react";
import BlockWords from "../block-words/block-words";
import NavWords from "../nav-words/nav-words";
import BlockErrorWords from "../block-error-words/block-error-words";
import {connect} from "react-redux";
import {setActiveWords, setBadAnswers} from "../../store/action-type";
import BlockAllWords from "../block-all-error-words/block-all-error-words";
import BlockAllErrorWords from "../block-all-error-words/block-all-error-words";
import * as S from '../main/main.style'
import styled from 'styled-components'
import {Link} from "react-router-dom";

// import getRandomInRange from "../../mock/mock";
// import {ITodo} from "../../interfaces/interfaces"

// import {words} from "../../mock/mock"
// import TablVerbsBe from '../../../public/img/tablica-glagola-to-be-ing-image.gif';

// import TablVerbsBe from '../../../public/img/tablica-glagola-to-be-ing-image.gif';


const Main = (props) => {
  // const bg=require('../../../public/img/tablica-glagola-to-be-ing-image.gif')

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
      if (Object.keys(showWord)[0].toLowerCase() === inputAnswer.toLowerCase()) {
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

  const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [text, setText] = React.useState('start');

  const pronouns = ['Я', 'ты', 'он', 'она', 'это', 'мы', 'они']
  const verbs = ['иду(ет, ем, дут)', 'ходил(ла, ли)', 'пойду(ет, ем, ут)']
  const rights = ['', '', '', 'не']
  const questions = ['', '', '', '?']
  const getText = (pronouns, verbs, rights, questions) => {
    const arr = [];
    arr.push(pronouns[getRandomInRange(0, pronouns.length - 1)])
    arr.push(rights[getRandomInRange(0, rights.length - 1)])
    arr.push(verbs[getRandomInRange(0, verbs.length - 1)])
    arr.push(questions[getRandomInRange(0, questions.length - 1)])

    return arr.join(' ');
  }


  const handleNextText = () => {
    setText(getText(pronouns, verbs, rights, questions))
  }


  const [textBe, setTextBe] = React.useState('startBe');
  const beNouns = ['доктор', 'бегующий сейчас']
  const be = ['', 'был', 'буду']
  const wordQuestions = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Что', 'Какой', 'Где', 'Куда',
    'Когда', 'Почему', 'Зачем', 'Кто', 'Как', 'Каким образом']
  const getTextBe = (wordQuestions, pronouns, beNouns, rights, be, questions) => {
    const arr = [];
    // arr.push(wordQuestions[getRandomInRange(0, wordQuestions.length -1)])
    arr.push(pronouns[getRandomInRange(0, pronouns.length - 1)])
    arr.push(rights[getRandomInRange(0, rights.length - 1)])
    arr.push(be[getRandomInRange(0, be.length - 1)])
    arr.push(beNouns[getRandomInRange(0, beNouns.length - 1)])
    arr.push(questions[getRandomInRange(0, questions.length - 1)])

    return arr.join(' ');
  }


  const handleNextTextBe = () => {
    setTextBe(getTextBe(wordQuestions, pronouns, beNouns, rights, be, questions))
  }


// я видел банк. Я ограбил банк.
  const [textPerfect, setTextPerfect] = React.useState('startPerfect');
  const [textPerfectTime, setTextPerfectTime] = React.useState();
  const [textPerfectVerbs, setTextPerfectVerbs] = React.useState();


  const perfectNouns = ['банк', 'банк Морган']
  const perfectVerbs = ['видел', 'ограбил', 'увижу', 'ограблю']
  // const perfectVerbs = ['имею увиденным', 'имею ограбленным', 'имел увиденным', 'имел ограбленным', 'буду иметь увиденным', 'буду иметь ограбленным']
  const to = ['', 'к, до', 'к, до'] // by next week // к концу дня - by the end of the day.
  const toShort = ['к']

  const getTimePerfect = (arrMain, perfectVerbs, arr) => {
    if (arrMain.includes(perfectVerbs[0]) || arrMain.includes(perfectVerbs[1])) {
      return arr[getRandomInRange(0, 1)]
    } else if (arrMain.includes(perfectVerbs[2]) || arrMain.includes(perfectVerbs[3])) {

      return arr[2]
    }
    return ``
  }

  // const getTimePerfect = (arrMain, perfectVerbs, arr) => {
  //   if (arrMain.includes(perfectVerbs[2])  || arrMain.includes(perfectVerbs[3])){
  //     return  arr[0]
  //   } else if(arrMain.includes(perfectVerbs[4]) || arrMain.includes(perfectVerbs[5])){
  //
  //     return arr[1]
  //   }
  //   return ``
  // }

  const getPerfectHave = (perfectVerbs) => {
    const arr = [];
    arr.push(perfectVerbs[getRandomInRange(0, perfectVerbs.length - 1)])
    return arr.join(' ');
  }

  // I have been to Bratislava — Я был (бывал) в Братиславе
  // const wordQuestions = ['', '', '','','','','','','','','','','','','', '', 'Что', 'Какой', 'Где', 'Куда',
  //   'Когда', 'Почему', 'Зачем', 'Кто', 'Как', 'Каким образом']
  const getTextPerfect = (pronouns, perfectVerbs, rights, perfectNouns, textPerfectTime, questions) => {
    const arr = [];
    // arr.push(wordQuestions[getRandomInRange(0, wordQuestions.length -1)])
    arr.push(pronouns[getRandomInRange(0, pronouns.length - 1)])
    arr.push(rights[getRandomInRange(0, rights.length - 1)])

    arr.push(perfectVerbs[getRandomInRange(0, perfectVerbs.length - 1)])
    arr.push(perfectNouns[getRandomInRange(0, perfectNouns.length - 1)])
    arr.push(getTimePerfect(arr, perfectVerbs, to))

    arr.push(questions[getRandomInRange(0, questions.length - 1)])
    return arr.join(' ');
  }


  const handleNextTextPerfect = () => {
    setTextPerfect(getTextPerfect(pronouns, perfectVerbs, rights, perfectNouns, textPerfectTime, questions))
  }


// I have been learning english for 5 years. Я изучаю английский 5 лет.(Я имею побытым изучающим английский 5 лет)
  const [textPerfectContinuous, setTextPerfectContinuous] = React.useState();
  const perfectContinuousNouns = ['объект 5 лет', 'объект JS 5 лет']
  const perfectContinuousVerbs = ['изучаю', 'изучал', 'буду изучать',]
  // const perfectVerbs = ['имею увиденным', 'имею ограбленным', 'имел увиденным', 'имел ограбленным', 'буду иметь увиденным', 'буду иметь ограбленным']
  const toPerfectContinuous = ['до прошлой недели', 'к следующей неделе'] // by next week // к концу дня - by the end of the day.
  // const toShort = ['к']

  const getTimePerfectContinuous = (arrMain, perfectContinuousVerbs, arr) => {
    if (arrMain.includes(perfectContinuousVerbs[1])) {
      return arr[0]
    } else if (arrMain.includes(perfectContinuousVerbs[2])) {

      return arr[1]
    }
    return ``
  }

  // const wordQuestions = ['', '', '','','','','','','','','','','','','', '', 'Что', 'Какой', 'Где', 'Куда',
  //   'Когда', 'Почему', 'Зачем', 'Кто', 'Как', 'Каким образом']
  const getTextPerfectContinuous = (pronouns, rights, perfectContinuousVerbs, perfectContinuousNouns, questions) => {
    const arr = [];
    // arr.push(wordQuestions[getRandomInRange(0, wordQuestions.length -1)])
    arr.push(pronouns[getRandomInRange(0, pronouns.length - 1)])
    arr.push(rights[getRandomInRange(0, rights.length - 1)])

    arr.push(perfectContinuousVerbs[getRandomInRange(0, perfectContinuousVerbs.length - 1)])
    arr.push(perfectContinuousNouns[getRandomInRange(0, perfectContinuousNouns.length - 1)])
    arr.push(getTimePerfectContinuous(arr, perfectContinuousVerbs, toPerfectContinuous))

    arr.push(questions[getRandomInRange(0, questions.length - 1)])
    return arr.join(' ');
  }


  const handleNextTextPerfectContinuous = () => {
    setTextPerfectContinuous(getTextPerfectContinuous(pronouns, rights, perfectContinuousVerbs, perfectContinuousNouns, questions))
  }


  const [textBeThere, setTextBeThere] = React.useState('startBeThere');
  const beThereNouns = ['яблоко', 'яблоки', 'самое большое яблоко',]
  const beThere = ['', 'был', 'буду']
  const wordThereQuestions = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Что', 'Какой', 'Где', 'Куда',
    'Когда', 'Почему', 'Зачем', 'Кто', 'Как', 'Каким образом']
  const therePronouns = ['там'];

  const getTextBeThere = (wordQuestions, therePronouns, beNouns, rights, be, questions) => {
    const arr = [];
    // arr.push(wordQuestions[getRandomInRange(0, wordQuestions.length -1)])
    arr.push(therePronouns[getRandomInRange(0, therePronouns.length - 1)])
    arr.push(rights[getRandomInRange(0, rights.length - 1)])
    arr.push(beThere[getRandomInRange(0, beThere.length - 1)])
    arr.push(beThereNouns[getRandomInRange(0, beThereNouns.length - 1)])
    arr.push(questions[getRandomInRange(0, questions.length - 1)])

    return arr.join(' ');
  }


  const handleNextTextBeThere = () => {
    setTextBeThere(getTextBeThere(wordQuestions, therePronouns, beThereNouns, rights, beThere, questions))
  }

  let wordValue = '';
  if(showWord) {
    let item = Object.values(showWord)
    if(Array.isArray(item[0])){
      wordValue = item[0][1]
    } else {
      wordValue = item
    }
  }

  return (
    <main className="main">
      <NavWords/>
      {/*<S.StyleCom src={"https://docs.google.com/spreadsheets/d/1o1wdZkwCA9Q8uXo_dTRG32qlcJ2F6G1X6hLkkAPGDUo/edit?usp=sharing"}>Link</S.StyleCom>*/}
      <a
        href="https://docs.google.com/spreadsheets/d/1o1wdZkwCA9Q8uXo_dTRG32qlcJ2F6G1X6hLkkAPGDUo/edit?usp=sharing">Link</a>
      {/*<Link to={'www.google.com'}>asd</Link>*/}
      <div style={{display: "flex", flexDirection: "column", alignItems: 'center', marginBottom: '20px',}}>
        <div style={{fontSize: "20px"}}>{text}</div>
        <button onClick={handleNextText} style={{padding: "30px", background: "lightblue"}}>Next</button>
      </div>


      <div style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
        <div style={{fontSize: "20px"}}>{textBe}</div>
        <button onClick={handleNextTextBe} style={{padding: "30px", background: "lightgreen"}}>Next</button>
      </div>

      <div>
        <p style={{marginBottom: '20px',}}>
          I will be here (Я буду здесь)She will be a teacher (Она будет учителем)He will be there (Он будет там)You will
          be a teacher (Ты будешь учителем)We will be in Moscow (Мы будем в Москве)They will be students (Они будут
          студентами)
        </p>
        <p style={{marginBottom: '20px',}}>
          I am here (Я здесь)She is a teacher (Она Учитель)He is there (Он там)You are a teacher (Ты учитель)We are in
          Moscow (Мы в Москве)They are students (Они студенты)
        </p>
        <p style={{marginBottom: '20px',}}>
          I was here (Я был здесь)She was a teacher (Она была учителем)He was there (Он был там)You were a teacher (Ты
          был учителем)We were in Moscow (Мы были в Москве)They were students (Они были студентами)
        </p>
        <p style={{marginBottom: '20px',}}>
          Am I a doctor? (Я доктор?)
          Is she here? (Она здесь?)
          Are you a teacher?
          (Ты учитель?)
          <br></br>
          <br></br>

          Was he there?
          (Он был там?)
          <br></br>
          <br></br>
          Is she your sister?
          (Она твоя сестра?)
          <br></br>
          <br></br>
          Will he be ready?
          (Он будет готов?)
          <br></br>
          <br></br>
          Are they not students?
          (Они не студенты?)
          <br></br>
          <br></br>
          Were we in Moscow?
          (Мы были в Москве?)
          <br></br>
          <br></br>
          Am I right?
          (Я прав?)Are you not ready?
          (Ты не готов?)
          <br></br>
          <br></br>
          Will he be a teacher?
          (Он будет учителем?)
          <br></br>
          <br></br>
          Was he happy?
          (Он был счастлив?)
        </p>
      </div>
      {/*<img src={TablVerbsBe}></img>*/}
      <img src={'https://www.english-polyglot.com/img/tablica-glagola-to-be-ing-image.gif'}></img>
      <img src={'https://www.english-polyglot.com/img/pronouns-3-columns.gif'}></img>
      <img src={'https://puzzle-english.com/wp-content/uploads/tenses1.jpg'}></img>
      <img src={'https://cs8.pikabu.ru/post_img/big/2018/03/14/10/1521046812187426703.jpg'}></img>
      <img
        src={'https://valente-shop.ru/wp-content/uploads/2018/06/Predlogi_vremeni_i_mesta_at__in__on_-_uchim_angliyskiy_sami_1.jpg'}></img>
      <img src={'https://lingvoelf.ru/images/english_grammar/at_on_in.JPG'}></img>
      <img src={'https://mcenglish.ru/wp-content/uploads/2017/12/gj-e1512566051320.jpg'}></img>
      Пассивный залог
      {/*https://pikabu.ru/story/tablitsa_vremen_passivnyiy_zalog_dlya_nachinayushchikh_4725956*/}
      <img src={'https://cs9.pikabu.ru/post_img/2017/01/01/6/1483259668167141583.png'}></img>
      <img src={'https://cs9.pikabu.ru/post_img/2017/01/01/6/1483260145121156049.png'}></img>

      <img src={'https://puzzle-english.com/wp-content/uploads/001.png'}></img>
      <img src={'https://puzzle-english.com/wp-content/uploads/002.png'}></img>

      <a href='https://www.study.ru/article/fonetika-angliyskogo/transkripciya-i-pravila-chteniya#rem'>Транскрипция</a>
      <a href='https://enginform.com/article/transcription'>Транскрипция детальная</a>
      <a href='https://myefe.ru/anglijskaya-transkriptsiya.html'>Сервис для транскрипции</a>
      {/*https://iloveenglish.ru/stories/view/vse-o-transkriptsii-v-anglijskom-yazike*/}


      <div><a href='https://www.bkc.ru/blog/about-language/grammar/predlogi-v-angliyskom-yazyke/'>Предлоги</a></div>

      <div style={{display: "flex", flexDirection: "column", alignItems: 'center', marginBottom: '20px',}}>
        <div style={{fontSize: "20px"}}>{textPerfect}</div>
        <button onClick={handleNextTextPerfect} style={{padding: "30px", background: "lightcoral"}}>Next</button>
      </div>


      <p>
        <b style={{color: "red"}}>Future Perfect (Будущее совершенное время)</b>
        <br></br>

        Future Perfect используется в тех ситуациях, когда нам нужно сообщить о действии, которое завершится до
        определенного момента в будущем: «I will have written the article by night — Я напишу статью к ночи». Будущее
        совершенное время мы также употребляем, когда говорим о каком-то предполагаем действии, которое имело место в
        прошлом. Иными словами, Future Perfect нужно для того, чтобы выразить предположение о том, что вероятно
        произошло. Например, «You will have noticed our attitude to this problem — Ты (наверняка) заметил наше отношение
        к этой проблеме».
        <br></br>

        Фразами-маркерами для Future Perfect также служат обстоятельства времени, которые указывают момент для
        завершения действия:

        · by Sunday (к воскресенью);
        · by that time (к тому времени);
        · by 2033 (к 2033).
      </p>

      <p>

        <b style={{color: "red"}}>Present Perfect (Настоящее совершенное время)</b>
        <br></br>

        Примеры Present Perfect в школьных учебниках далеко не всегда позволяют составить полную картину того, как же в
        действительности использовать это время. На самом деле оно очень широко распространено. Present Perfect обычно
        применяют в таких ситуациях:
        Узнать больше
        <br></br>

        Для обозначения действия, которое уже абсолютно завершено в прошлом, но, тем не менее, оно еще связано с
        настоящим посредством результата (I have read this book so you can take it — Я уже прочитал эту книгу, так что
        ты ее можешь взять);
        Для характеристики действия, которое началось в прошлом, но, при этом, оно продолжается и в настоящий момент (I
        have lived in London for 6 years — Мы живем в Лондоне 6 лет).
        В предложениях с настоящим совершенным временем часто встречаются наречия и обстоятельства, подчеркивающие
        результативность действия:

        · never (никогда);
        · just (только что);
        · already (уже);
        · yet (еще);
        · ever (когда-либо);

        Например: Have you ever been to Cyprus? — Ты когда-либо был на Кипре?

      </p>


      <p>
        <b style={{color: "red"}}>Past Perfect (Прошедшее совершенное время)</b><br></br>
        Если действие завершилось до какого-то определенного момента или действия в прошлом, то, согласно правилам
        английской грамматики, придется выбрать время Past Perfect. Например, «The rain had stopped before he woke up —
        Дождь завершился до того, как он проснулся». Или: «By that time they had finished their work — К тому времени
        они закончили свою работу».
        <br></br>
        Опознать Past Perfect часто можно по союзу by и обстоятельствам времени, вроде: by that time (к тому времени),
        by Monday (к понедельнику), by then (к тому времени) и т. п.
      </p>
      <br></br>


      {/*<img src={"../../../public/img/tablica-glagola-to-be-ing-image.gif"}></img>*/}
      {/*<img src="../../../public/img/pronouns-3-columns.gif"></img>*/}
      {/*<img src="../../../public/img/bg-the-grand-budapest-hotel.jpg"></img>*/}
      {/*<div style={{backgroundImage: 'url("TablVerbsBe")', width: '660px', height: '476px'}}></div>*/}


      <div style={{display: "flex", flexDirection: "column", alignItems: 'center', marginBottom: '20px',}}>
        <div style={{fontSize: "20px"}}>{textPerfectContinuous}</div>
        <button onClick={handleNextTextPerfectContinuous} style={{padding: "30px", background: "lightsalmon"}}>Next
        </button>
      </div>

      <div>
        <p>
          <b style={{color: "red"}}> Present Perfect Continuous (Настоящее совершенное продолженное)</b><br></br>
          Present Perfect Continuous показывает действие, начавшееся в прошлом и продолжающееся на момента речи.
          Например: «She has been working for 5 hours already — Она уже работает 5 часов». Также это время используется
          для характеристики только что завершившегося длительного действия, результат которого влияет на настоящее:
          «I'm tired. We have been working all night — Я устал. Мы работали всю ночь».

          Во фразах с настоящим совершенным продолженным временем в английском часто встречаются обстоятельства времени
          и прочие словосочетания, которые обозначают тот временной отрезок, в течение которого совершается действие.
          Например:
          Узнать больше

          · for a week (в течение недели);
          · since morning (с утра);
          · lately (в последнее время);
          · all my life (всю мою жизнь) и т. п.
        </p>
        <p>
          <b style={{color: "red"}}> Past Perfect Continuous (Прошедшее совершенное продолженное)</b><br></br>
          Время Past Perfect Continuous похоже на предыдущее, однако описывает растянутое действие, которое началось в
          прошлом до определенного момента (который произошел также в прошлом и всегда употребляется в Past Simple).
          Этот процесс может продолжаться или же завершиться непосредственно прямо перед этим самым моментом.

          «Tom had been reading for 2 hours when Jane came — Том читал уже на протяжении двух часов, когда пришла
          Джейн». В данном случае действие началось до того, как пришла Джейн. При этом, Том продолжает читать даже
          после того, как его прервали.

          Для прошедшего совершенного продолженного времени характерно использование временных фраз-маркеров, вроде:

          · for five months (в течение 5 месяцев);
          · for a long time (в течение долгого времени);
          · since 7 o'clock (с 7-ми часов) и т. п.
        </p>
        <p>
          <b style={{color: "red"}}> Future Perfect Continuous (Будущее совершенное продолженное)</b><br></br>
          Среди всех времен английской грамматики Future Perfect Continuous встречается в речи реже всего. Это время
          описывает продолжительное действие, которое начнется в будущем и будет происходить до определенного момента
          (он употребляется в Future Simple):

          He will have been resting for a week when she joins him — Он будет отдыхать уже целую неделю, когда она
          присоединится к нему.
        </p>
      </div>


      <div style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
        <div style={{fontSize: "20px"}}>{textBeThere}</div>
        <button onClick={handleNextTextBeThere} style={{padding: "30px", background: "lightseagreen"}}>Next</button>
      </div>

      <a href='https://poliglot16.ru/en/urok15/'>Таблица There</a>














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
              {/*{showWord ? Object.values(showWord) : ``}*/}
              {wordValue}
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
      <div style={{"color": "red"}}>{badAnswers}</div>
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

const mapDispatchToProps = (dispatch) => ({
  onSetActiveWords(activeWords) {
    dispatch(setActiveWords(activeWords)); // genre это payload дополнитеьная инфа
  },
  onSetBadAnswers(badAnswers) {
    dispatch(setBadAnswers(badAnswers)); // genre это payload дополнитеьная инфа
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);
