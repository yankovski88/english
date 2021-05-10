import React from "react";
import Main from "../main/main";
import Header from "../header/header";
import {
  fruits,
  numbers,
  orders,
  seasons,
  months,
  days,
  times,
  timeIntervals,
  money,
  colors,
  properties, irregularVerbs
} from "../../mock/mock";
const PageMain = ()=>{
  return (
    <>
      <Header />
    <Main
      // fruits = {fruits} numbers = {numbers} orders = {orders}
      //     seasons ={seasons} months={months} days={days} times={times}
      //     timeIntervals={timeIntervals}
      //     money={money}
      //     colors={colors}
      //     properties={properties}
      //     irregularVerbs={irregularVerbs}
    />
    </>
  )
}

export default PageMain;
