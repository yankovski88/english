import React from "react";

import {foodWords} from "../../mock/mock"

const Main = (props) => {
  // const {foodWoards} = props;
  const [numberWord, setNumberWord] = React.useState(0);


  const answerRef = React.useRef(``);

  console.log(answerRef.current.value)
  const keyFoodWords = Object.keys(foodWords);
  const [keyStateWord, setKeyStateWord] = React.useState(foodWords[keyFoodWords[numberWord]]);
  const [isAnswer, setIsAnswer] = React.useState(null);
  const [noAnswerKeys, setNoAnswerKeys] = React.useState([]);
  const [trueAnswerKeys, setTrueAnswerKeys] = React.useState([]);



  const a = foodWords;
  delete a["ege"]

  console.log(a)

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  }

  const getKeyValueByKey= (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  }

  const [valueStateWord, setValueStateWord] = React.useState(getKeyByValue(foodWords, foodWords[keyFoodWords[numberWord]]));

  React.useEffect(() => {
    setKeyStateWord(foodWords[keyFoodWords[numberWord]])
    setValueStateWord(getKeyByValue(foodWords, foodWords[keyFoodWords[numberWord]]))

  }, [keyFoodWords])

  const nextWord = () => {
    console.log(valueStateWord, answerRef.current.value)
    console.log(keyStateWord)
    setNumberWord((numberWord) => numberWord + 1);
    answerRef.current.value = ``;

    if (valueStateWord === answerRef.current.value) {
      console.log(valueStateWord, answerRef.current.value)
      setTrueAnswerKeys((prev)=>[valueStateWord, ...prev])
      setIsAnswer(true)
    }
      else if(keyStateWord === undefined){
        console.log(`nooooooooooo`)
      return
    }

    else if(valueStateWord !== answerRef.current.value){
      setNoAnswerKeys((prev)=> [valueStateWord, ...prev])
      setIsAnswer(false)
    }
  }

  // const addAnswer = () => {
  //   console.log(valueStateWord, answerRef.current.value)
  //   if (valueStateWord === answerRef.current.value) {
  //
  //     setIsAnswer(true)
  //   }
  //   // else if(valueStateWord === ``){
  //   //   console.log(`nooooooooooo`)
  //   // }
  //
  //   else {
  //
  //     setNoAnswerKeys((prev)=> [keyStateWord, ...prev])
  //     setIsAnswer(false)
  //   }
  // }

  return (
    <main className="main">


      <div>
        {keyStateWord}
      </div>
      <input ref={answerRef} className="inputAnswer" placeholder="answer"></input>
      <div>
        {`Good answer:` + valueStateWord
          // getKeyByValue(foodWords, foodWords[keyFoodWords[numberWord]])
        }
      </div>
      {/*<button onClick={addAnswer}>Add answer</button>*/}
      <button onClick={nextWord}>next word</button>
      {/*{*/}
      {/*  !isAnswer ? `no answer` :*/}
      {/*  `true answer`*/}
      {/*}*/}
      <div>
        Изучите:
        {noAnswerKeys.map((item)=>{
          return (<div key={item}>{item}</div>)
        })}
        Good:
        {trueAnswerKeys.map((item)=>{
          return (<div key={item}>{item}</div>)
        })}      </div>
    </main>

  )
}

export default Main;
