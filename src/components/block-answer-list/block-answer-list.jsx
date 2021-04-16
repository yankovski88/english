import React from "react";
// import "./block-answer-list.css";
import {connect} from "react-redux";


const BlockAnswerList = (props) => {
  const {answers} = props;

  console.log(props)
  console.log(answers)

  return (
    <ul className="block-answer-list">
      {answers.map((answer) => {
        return <li className={`block-answer`}
                   key={answer.title}
        >
          <div className="block-answer__wrapper">
            <h2 className="block-answer__title">
              {answer.title}
            </h2>
            <div className="block-answer__text">
              {answer.text}
            </div>
            <div className="block-answer__url">
              {!answer.url ? `` :
                <iframe width="560" height="315" src={answer.url}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>}
            </div>

               <div className="block-answer__img-list">
                 {!answer.images ? `` :
                   answer.images.map((image, index)=>{
                 return    <div className="block-answer__img"
                                key={index}
                  >
                    <img src={image}
                         alt=""
                         width="450"
                         height="400"
                    />
                  </div>


              }
              )}
               </div>

          </div>
        </li>
      })}
    </ul>
  )
}

const mapStateToProps = (state) => ({
  answers: state.USER_ANSWER.answers,
})

export {BlockAnswerList};
export default connect(mapStateToProps, null)(BlockAnswerList)
