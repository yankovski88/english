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


  const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  }

  const [valueStateWord, setValueStateWord] = React.useState(getKeyByValue(foodWords, foodWords[keyFoodWords[numberWord]]));

  React.useEffect(() => {
    setKeyStateWord(foodWords[keyFoodWords[numberWord]])
    setValueStateWord(getKeyByValue(foodWords, foodWords[keyFoodWords[numberWord]]))

  }, [keyFoodWords])

  const nextWord = () => {
    setNumberWord((numberWord) => numberWord + 1);
  }

  const addAnswer = () => {
    console.log(valueStateWord, answerRef.current.value)
    if (valueStateWord === answerRef.current.value) {
      setIsAnswer(true)
    } else {
      setIsAnswer(false)
    }
  }

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
      <button onClick={addAnswer}>Add answer</button>
      <button onClick={nextWord}>next word</button>
      {!isAnswer ? `no answer` :
        `true answer`
      }
    </main>

  )
}

export default Main;
