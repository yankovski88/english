import React from "react";
import Main from "../main/main";
import Header from "../header/header";
import {fruits} from "../../mock/mock";
const PageMain = ()=>{
  return (
    <>
      {/*<Header />*/}
    <Main fruits = {fruits}/>
    </>
  )
}

export default PageMain;
