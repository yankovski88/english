import React from "react";
import {connect} from "react-redux";
import {setActiveWords} from "../../store/action-type";

const NavWords = (props) => {
  const {onSetActiveWords, fruits, numbers, orders, seasons, months, days,
    times, timeIntervals, money, colors, properties, irregularVerbs, thousandWords,
    secondThousandWords, prepositions, regularVerbs
  } = props;

  const handleFruits = () => {
    onSetActiveWords(fruits)
  }

  const handleNumbers = () => {
    onSetActiveWords(numbers)
  }

  const handleOrders = () => {
    onSetActiveWords(orders)
  }

  const handleSeasons = () => {
    onSetActiveWords(seasons)
  }

  const handleMonths = () => {
    onSetActiveWords(months)
  }

  const handleDays = () => {
    onSetActiveWords(days)
  }

  const handleTimes = () => {
    onSetActiveWords(times)
  }

  const handleTimeIntervals = () => {
    onSetActiveWords(timeIntervals)
  }

  const handleMoney = () => {
    onSetActiveWords(money)
  }

  const handleColors = () => {
    onSetActiveWords(colors)
  }

  const handleProperties = () => {
    onSetActiveWords(properties)
  }
  const handleThousandWords = () => {
    onSetActiveWords(thousandWords)
  }
  const handleSecondThousandWords = () => {
    onSetActiveWords(secondThousandWords)
  }
  const handlePrepositions = () => {
    onSetActiveWords(prepositions)
  }

  const [allWords, setAllWords] = React.useState();
  const handleAllWords = (event) => {

    // console.log(event.target.value)
    // event.preventDefault();
    // if(event.target.value){
    //   onSetActiveWords([...colors, ...fruits])

      onSetActiveWords([...fruits, ...numbers, ...orders, ...seasons, ...months, ...days, ...times, ...timeIntervals, ...money, ...colors, ...properties])
    // }
    // onSetActiveWords([])
  }



  const handleIrregularVerbs = () => {
    onSetActiveWords(irregularVerbs)
  }

  const handleVerbs = () => {
    onSetActiveWords(regularVerbs)
  }
  return (
    <>
      <div className="checkAllWords">
        <input
          // checked={true}
          // onChange={handleAllWords} />
          type="checkbox"
        onChange={(event)=>handleAllWords(event)}/>
        <p>?????? ???????????????? ?????????????? ?????? ??????????</p>
      </div>
      <div className="nav-words">
        <div className="nav-block">
          <h2 className="nav-block__title">?????????? ?? ??????????</h2>
          <ul className="nav-block__ul">
            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleNumbers}>??????????</a>
              <p>{numbers.length}</p>
            </li>

            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleOrders}>???????????????????? ??????????</a>
              <p>{orders.length}</p>
            </li>

            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleSeasons}>??????????</a>
              <p>{seasons.length}</p>
            </li>

            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleMonths}>????????????</a>
              <p>{months.length}</p>
            </li>

            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleDays}>??????</a>
              <p>{days.length}</p>
            </li>


            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleTimes}>??????????</a>
              <p>{times.length}</p>
            </li>

            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleTimeIntervals}>?????????????????? ????????????????</a>
              <p>{timeIntervals.length}</p>
            </li>

            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleMoney}>????????????</a>
              <p>{money.length}</p>
            </li>
          </ul>
        </div>


        <div className="nav-block">
          <h2 className="nav-block__title">????????????????????????????</h2>
          <ul className="nav-block__ul">
            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleColors}>??????????</a>
              <p>{colors.length}</p>
            </li>

            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleProperties}>????????????????</a>
              <p>{properties.length}</p>
            </li>

          </ul>
        </div>

        <div className="nav-block">
          <h2 className="nav-block__title">??????</h2>
          <ul className="nav-block__ul">
            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleFruits}>????????????</a>
              <p>{fruits.length}</p>
            </li>
          </ul>
        </div>

        <div className="nav-block">
          <h2 className="nav-block__title">???????????????????????? ??????????????</h2>
          <ul className="nav-block__ul">
            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleIrregularVerbs}>???????????????????????? ??????????????</a>
              <p>{irregularVerbs.length}</p>
            </li>
          </ul>
        </div>
        <a href={'https://iloveenglish.ru/theory/anglijskaya_grammatika/pravilnie_i_nepravilnie_glagoli_anglijskogo_yazika'}>???????????????????????? ???????????????????????? ????????????????</a>

        <div className="nav-block">
          <h2 className="nav-block__title">1000 words</h2>
          <ul className="nav-block__ul">
            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleThousandWords}>1000 words</a>
              <p>{thousandWords.length}</p>
            </li>
          </ul>
        </div>

        <div className="nav-block">
          <h2 className="nav-block__title">1000 words second option</h2>
          <ul className="nav-block__ul">
            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleSecondThousandWords}>1000 words</a>
              <p>{secondThousandWords.length}</p>
            </li>
          </ul>
        </div>

        <div className="nav-block">
          <h2 className="nav-block__title">????????????????</h2>
          <ul className="nav-block__ul">
            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handlePrepositions}>???????????????? 4 ????????</a>
              <p>{prepositions.length}</p>
            </li>
          </ul>
        </div>

        <div className="nav-block">
          <h2 className="nav-block__title">??????????????</h2>
          <ul className="nav-block__ul">
            <li className="nav-block__li">
              <a className="nav-block__link" onClick={handleVerbs}>???????????????????? ??????????????</a>
              <p>{regularVerbs.length}</p>
            </li>
          </ul>
        </div>


        <a href={'https://iloveenglish.ru/theory/anglijskaya_grammatika/pravilnie_i_nepravilnie_glagoli_anglijskogo_yazika'}>???????????? ???????????????????????? ????????????????</a>

      </div>
    </>
  )
}



const mapStateToProps= (state)=>({
  fruits: state.MAIN.fruits,
  numbers: state.MAIN.numbers,
  orders: state.MAIN.orders,
  seasons: state.MAIN.seasons,
  months: state.MAIN.months,
  days: state.MAIN.days,
  times: state.MAIN.times,
  timeIntervals: state.MAIN.timeIntervals,
  money: state.MAIN.money,
  colors: state.MAIN.colors,
  properties: state.MAIN.properties,
  irregularVerbs: state.MAIN.irregularVerbs,
  thousandWords: state.MAIN.thousandWords,
  secondThousandWords: state.MAIN.secondThousandWords,
  prepositions: state.MAIN.prepositions,
  regularVerbs: state.MAIN.regularVerbs,
})



const mapDispatchToProps = (dispatch)=>({
  onSetActiveWords(activeWords) {
    dispatch(setActiveWords(activeWords)); // genre ?????? payload ?????????????????????????? ????????
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(NavWords); // mapDispatchToProps


