import React from "react";
// import "./add-answer.css";
import {connect} from "react-redux";
import {addAnswer} from "../../store/action-quastion";
import {answers} from "../../mock/mock";


const AddAnswer = (props) => {
  const {loadAddAnswer} = props;

  const titleRef = React.useRef();
  const textRef = React.useRef();

  const [title, setTitle] = React.useState(``);
  const [text, setText] = React.useState(``);

  const handleSubmitAnswer = (evt) => {
    evt.preventDefault();
    console.log(`klic send`)
    loadAddAnswer(title, text)
  }


  return (
    <div className="add-answer">
      <form className="add-answer__form" action="#">
        <div className="add-answer__title">
              <textarea ref={titleRef}
                        onChange={(evt) => setTitle(evt.target.value)}
                        className="add-answer__title-textarea"
                        name="add-answer__title" type="text"
                        placeholder="Вопрос">

        </textarea>
        </div>
        <div className="add-answer__text">
        <textarea
          onChange={(evt) => setText(evt.target.value)}
          ref={textRef} className="add-review__text-textarea"
          name="add-answer__text" type="text"
          placeholder="Ответ">

        </textarea>
        </div>
        <div className="block-answer__submit">
          <button className="block-answer__btn"
          onClick={handleSubmitAnswer}
                  type="submit">Отправить</button>
        </div>
      </form>
    </div>

  )
}

const mapStateToProps = (state) => ({
  answers: state.USER_ANSWER.answers,
})

const mapDispatchToProps = (dispatch) => ({
  loadAddAnswer(title, text) {
    dispatch(addAnswer(title, text))
  }
})


export {AddAnswer};
export default connect(mapStateToProps, mapDispatchToProps)(AddAnswer)
