import logo from "./logo.svg";
import "./App.css";
import YoutubeList from "./components/Youtube/YoutubeList";
import { Children } from "react";
import Toggle from "./components/state/Toggle";
import Counter from "./components/state/Counter";
import Game from "./components/tictactoe/Game";

//JSX: JavaScript XML
//ES6: EcmaScript 6
//curly braces {} : JavaScript expression
//Babel
/**
 * element = <div id="hello" className="hello">Hello World</div>
 * element = React.createElement('div', {id: 'hello', className: 'hello'}, 'Hello World')
 * function createElement(elementType, props, ...children)
 * elementType = 'div' 'p' 'h1' 'h2' 'h3' 'h4' 'h5' 'h6' 'span' 'button' 'input' 'select' 'option' 'ul' 'li' 'ol' 'table' 'tr' 'td' 'th' 'thead' 'tbody' 'tfoot' 'form' 'label' 'img' 'a' 'nav' 'header' 'footer' 'section' 'article' 'aside' 'main' 'aside' 'aside' 'video' 'audio'
 * props : className, id, src, alt, href, style, onClick, onChange, onSubmit, onHover, onMouseEnter, onMouseLeave, onMouseOver, onMouseOut, onMouseDown, onMouseUp, onKeyPress, onKeyDown, onKeyUp, onFocus, onBlur, onScroll, onResize, onCopy, onCut, onPaste, onDrag, onDragStart
 * children : string, number, element
 * element2 = (<div>
 * <span>Hello</span> <spna>World</span>
 * </div>)
 * element2 = React.createElement('div', {
 * children: [
 * React.createElement('span', null, 'Hello'),
 * ' ',
 * React.createElement('span', null, 'World')
 * ]
 * } )
 */

// tạo 1 component có tên là Feature
function Feature() {
  return (
    <div className="Feature">
      <img src="" alt="" className="feature-image" />
      <h3 className="feature-title">Ảnh</h3>
      <p className="feature-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        sequi voluptatum officia, cupiditate delectus autem commodi! Quaerat
        cupiditate nesciunt rerum facilis, excepturi impedit aliquid laboriosam
        quis obcaecati eos corporis dolorem?
      </p>
    </div>
  );
}


//parent component
function App() {
  const name = "ReactJS";
  return (
    <div>
      {/* chirend component */}
      {/* <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature> */}
      {/* {YoutubeData.map((item, index) => (
        <YoutubeItem
          key={item.id}
          author={item.author}
          avatar={item.avatar}
          img={item.img}
          width={500}
        ></YoutubeItem>
      ))} */}
      {/* youtube */}
      
      {/* <YoutubeList> */}
      {/* {name} */}
        {/* {Children: html, component, text, varibale} */}
      {/* </YoutubeList> */}

      {/* state */}
      {/* <Toggle></Toggle>
      <Counter></Counter> */}

      {/* Game */}
      <Game></Game> 
    </div>
  );
}

export default App;
