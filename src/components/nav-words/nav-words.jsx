import React from "react";
import {connect} from "react-redux";
import {setActiveWords} from "../../store/action-type";

const NavWords = (props) => {
  const {onSetActiveWords, fruits, numbers, orders, seasons, months, days, times, timeIntervals, money, colors, properties} = props;

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

  return (
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
              <a className="nav-block__link" onClick={handleFruits}>Фрукты</a>
            </li>
          </ul>
        </div>

      </div>
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
})


const mapDispatchToProps = (dispatch)=>({
  onSetActiveWords(activeWords) {
    dispatch(setActiveWords(activeWords)); // genre это payload дополнитеьная инфа
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(NavWords); // mapDispatchToProps


