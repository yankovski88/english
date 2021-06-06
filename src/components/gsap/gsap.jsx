import React from 'react';
import styled from 'styled-components';
import {gsap} from "gsap";
// import {ScrollTrigger} from "gsap/ScrollTrigger.js";
import {ScrollTrigger} from "gsap/all";

// import {} from "gsap/";


function Gsap() {
  gsap.registerPlugin(ScrollTrigger);

  // React.useEffect(()=>{
  //   const tl = gsap.timeline();
  //   tl.to(elRef, {duration: 1, opacity: 0 });
  // },[]);

  // React.useEffect(() => {
  //   if (!containerRef.current || !elRef.current) {
  //     return;
  //   }
  //   const tween = gsap.to(elRef.current, {
  //     x: 100,
  //     scrollTrigger: { trigger: elRef.current, scrub: 1 },
  //   });
  //
  //   return () => {
  //     tween.kill();
  //   };
  // }, []);

  const elRef = React.useRef();
  const elRef2 = React.useRef();
  const elRef3 = React.useRef();

  const containerRef = React.useRef();

  const tweenRef = React.useRef();

  React.useEffect(() => {
    if (!containerRef.current || !elRef.current) {
      return;
    }
    // const tween = gsap.to([elRef.current, elRef2.current, elRef3.current], {
    //   borderRadius: 50,
    //   x: 500, // расстояние до конечной точки
    //   scale: 1, // плавное увеличение и остановка в максимальном размере
    //   duration: 3, // скорость с начальной до конечной точки
    //   rotation: 360, // за весь период на сколько надо перевернуть
    //   background: 'yellow',
    //   stagger: -1,
    //
    //   // repeat: 1, // повторить
    //   // yoyo: true,
    //   // onRepeat: onRepeatHandler,
    //   // onComplete: onCompleteHandler,
    // })
    // tween.timeScale(2); //double speed ко всем to походу


    const tl = gsap.timeline();
    tl.duration(30) // добавляю всем и сразу, независимо от места. Можно заюзать на кнопки

    tl.to(elRef.current, {
      borderRadius: 50,
      x: 500,
      scale: 1,
      duration: 3,
      rotation: 360,
      background: 'yellow',
    })
    tl.add(gsap.to(elRef.current, {duration: 5, x: 100}))
      .to(elRef2.current, {
        borderRadius: 50,
        x: 400,
        scale: 1,
        duration: 2,
        rotation: 260,
        background: 'red',
      })
      .to(elRef3.current, {
        borderRadius: 50,
        x: 300,
        scale: 1,
        duration: 1,
        rotation: 160,
        background: 'blue',
        height: '30px',
      }, '+=1') // +=1 это добавляется время к этой анимации
    return () => {
      tween.kill();
    };
  }, []);


  const elARef = React.useRef();
  const elARef2 = React.useRef();
  const elARef3 = React.useRef();

  const containerARef = React.useRef();

  function tweenComplete(message, two) {
    console.log(message);
    console.log(two)
  }

  React.useEffect(() => {
    if (!containerRef.current || !elRef.current) {
      return;
    }
    const tween = gsap.to([elARef.current, elARef2.current, elARef3.current], {
        borderRadius: 50,
        x: 500, // расстояние до конечной точки
        scale: 1, // плавное увеличение и остановка в максимальном размере
        duration: 3, // скорость с начальной до конечной точки
        rotation: 360, // за весь период на сколько надо перевернуть
        background: 'yellow',
        // stagger: -1, // шататься по очереди сверху 1, снизу -1, вместе 0
        delay: 1, // задержка перед началом анимации
        onComplete: tweenComplete, // функция вызовется в конце анимации
        onCompleteParams: ["done!", '2'],
        // onComplete: ()=>{console.log('end')}, // функция вызовется в конце анимации
        onUpdate: () => {
          console.log('was render or rerender, I showed')
        }, // элемент меняет в браузере хоть на долю пиикселя, я буду все время вызываться
        ease: "bounce", // добавляем анимацию передвижения
        stagger: {
          // grid: [7,15],
          // from: "center",
          // amount: 3.5
        }
        // width: "5px", height: "5px"
      }
      // , {duration: 1.5, width: 100, height: 200}
    )
    tweenRef.current = tween;

    return () => {
      tween.kill();
    };
  }, []);


  const elBRef = React.useRef();
  const elBRef2 = React.useRef();
  const elBRef3 = React.useRef();

  const containerBRef = React.useRef();




  React.useEffect(() => {
    if (!containerBRef.current || !elBRef.current) {
      return;
    }
    const tween = gsap.to(elBRef3.current, {
      scrollTrigger: {
        trigger: elBRef2.current, // тригер на котором сработает анимация
        toggleActions: "play pause resume restart", // onEnter, onLeave, onEnterBack вернулся на верх, and onLeaveBack это вервнулся наверх,
        markers: true,
        start: 'center center', // first это старт на тригере можно его сделать
        scrub: 10, // привязать к скролу
        // end: 'top 100px',
        // pin: true,
      },
      x: 100,
      duration: 20,
      rotation: 360,
    })


    return () => {
      tween.kill();
    };
  }, []);

  React.useEffect(() => { // нужен для создания любых анимаций

    const tl = gsap.timeline(); // временную линия на которой будут выполнятся по порядку анимации
    tl.to(elBRef2.current, {
      x: 300,
      duration: 5,
      rotation: 360,
      background: 'red',
    })


    ScrollTrigger.create({ // можно создавать скрол и записыать в него свойства скрола
      animation: tl, // какая лииния будет срабатывать на этот скрол
      trigger: containerBRef.current,
      scrub: 5,
    })


    return () => {
      tl.kill()
    }
  }, [])

  const textRef = React.useRef();


  return (
    <StyleComponent>
      <StyleContainer ref={containerRef}>
        <StyleEl
          ref={elRef}
        ></StyleEl>
        <StyleEl
          ref={elRef2}
        ></StyleEl>
        <StyleEl
          ref={elRef3}
        ></StyleEl>
      </StyleContainer>
      <line/>
      <StyleContainerB ref={containerARef}>
        <StyleElA
          ref={elARef}
        ></StyleElA>
        <StyleElA
          ref={elARef2}
        ></StyleElA>
        <StyleElA
          ref={elARef3}
        ></StyleElA>


        <button onClick={() => tweenRef.current.play()}>play</button>
        <button onClick={() => tweenRef.current.pause()}>pause</button>
        <button onClick={() => tweenRef.current.resume()}>resume</button>
        <button onClick={() => tweenRef.current.reverse()}>reverse</button>
        <button onClick={() => tweenRef.current.restart()}>restart</button>


      </StyleContainerB>


      <StyleContainerB ref={containerBRef}>
        <StyleElB
          ref={elBRef}
        ></StyleElB>
        <StyleElB
          ref={elBRef2}
        ></StyleElB>
        <StyleElB
          ref={elBRef3}
        ></StyleElB>
      </StyleContainerB>


      <StyleText ref={textRef}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut ducimus fuga hic, id illum iste itaque
        molestiae nobis nulla porro possimus quod saepe sapiente temporibus ut voluptatem. Accusamus cupiditate,
        delectus doloremque earum, est iste labore magnam mollitia nihil nobis odio perferendis rerum sequi velit,
        veritatis voluptate voluptatem. Illum, non.
      </StyleText>

      <StyleWrapBtn>
        <StyleBtn>
          CASE STUDY
        </StyleBtn>
      </StyleWrapBtn>
    </StyleComponent>)
}

const StyleComponent = styled.div`
  background: pink;
  border: solid 1px black;
  //padding-bottom: 500px;
  //height: 2000px;
  //width: 800px;
  //height: 1200px;
  //padding-bottom: 1500px;
`;
const StyleContainer = styled.div`
  margin-top: 500px;
  background: gray;
  height: 1000px;
  width: 500px;
  border: solid 1px red;
`;
const StyleEl = styled.div`
  width: 30px;
  height: 200px;
  background: green;
  //margin-top: 300px;
`;


const StyleContainerA = styled.div`
  margin-top: 500px;
  background: gray;
  height: 1000px;
  width: 500px;
  border: solid 1px red;
`;
const StyleElA = styled.div`
  width: 30px;
  height: 200px;
  background: green;
  //margin-top: 300px;
`;

const StyleContainerB = styled.div`
  margin-top: 500px;
  background: gray;
  height: 3000px;
  width: 500px;
  border: solid 1px red;
`;
const StyleElB = styled.div`
  width: 30px;
  height: 200px;
  background: black;
  //margin-top: 300px;
`;

const StyleText = styled.div`

`;


const StyleWrapBtn = styled.div`
  width: 321px;
  height: 205px;
  background: white;
`;

const StyleBtn = styled.button`
  background: #DD6900;
  border-radius: 30px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 40px;
  padding-right: 40px;
  display: inline-block;
  color: #fff;

  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  //background-color: transparent;
  //border: 1px solid transparent;
  //padding: 0.375rem 0.75rem;
  //font-size: 1rem;
  transition: color 0.15s ease-in-out,
  background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &:hover {
    color: #212529;
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.65;
  }
`;


export default Gsap;
