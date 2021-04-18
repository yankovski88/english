import React from "react";
import {connect} from "react-redux";


const BlockErrorWords = (props) => {
  const {activeWords, errorWords} = props;
  const arrWords = [];
  for (const word of errorWords) {
    arrWords.push(Object.entries(word))
  }


  return (
    <div className="block-words">
      <div className="block-words__wrapper">
        <ul className="block-words__ul">


          {arrWords.map((item, index) => {
            return (
              <li className="block-words__li"
                  key={index}
              >
                <div className="block-words__couple">

                  {/*<p className="block-words__number">{`${index}.`}&nbsp;</p>*/}

                  <p className="block-words__eng">
                    {item[0][0]}
                  </p>
                  <p className="block-words__delimiter">&nbsp;-&nbsp;</p>
                  <p className="block-words__ru">{item[0][1]}</p>
                </div>
              </li>
            )
          })}


          {/*{words.map((word, index)=>{*/}
          {/*  return (*/}
          {/*    <li className="block-words__li"*/}
          {/*    key={index}*/}
          {/*    >*/}
          {/*      <div className="block-words__couple">*/}
          {/*        <p className="block-words__number">{`${index}. `}</p>*/}
          {/*        <p className="block-words__eng">*/}
          {/*          {word}*/}
          {/*          {console.log(word)}*/}
          {/*        </p>*/}
          {/*        <p className="block-words__delimiter">-</p>*/}
          {/*        <p className="block-words__ru">один</p>*/}
          {/*      </div>*/}
          {/*    </li>*/}
          {/*  )*/}
          {/*})*/}


          {/*}*/}

          {/*<li className="block-words__li">*/}
          {/*  <div className="block-words__couple">*/}
          {/*    <p className="block-words__number">1.</p>*/}
          {/*    <p className="block-words__eng">*/}
          {/*      two*/}
          {/*    </p>*/}
          {/*    <p className="block-words__delimiter">-</p>*/}
          {/*    <p className="block-words__ru">два</p>*/}
          {/*  </div>*/}
          {/*</li>*/}

        </ul>


      </div>
    </div>

  )
}

const mapStateToProps = (state) => ({
  activeWords: state.MAIN.activeWords,
})

export default connect(mapStateToProps, null)(BlockErrorWords); // mapDispatchToProps
