import React from 'react'
import { Link } from 'react-router-dom'


const Header =()=>{
    return(<div id="main">
   <div id="cap">
      <div className="top_header">
        <div id="announce">
          <a
            title="Set - online card game"
            href="https://smart-games.org/en/set/"
            >SET</a
          >
          |
          <a
            title="Tetravex - online game"
            href="https://smart-games.org/en/tetravex"
            >Tetravex</a
          >
          |
          <a
            title="Sudoku - online game"
            href="https://smart-games.org/en/sudoku"
            >Sudoku</a
          >
        </div>
        <div className="right">
          <div className="right" id="flag_container">
            <div id="flagRu">
              <a href="https://smart-games.org/ru/"
                ><img src="../../../images/flag_ru.gif" alt="ru"
              /></a>
            </div>
            <div id="flagEn">
              <a href="https://smart-games.org/en/"
                ><img src="../../../images/flag_en.gif" alt="en"
              /></a>
            </div>
          </div>
          <div className="right">
            <a href="https://smart-games.org/en/main"
              ><img src="../../../images/smart_games.png" alt="url logo"
            /></a>
          </div>
        </div>
      </div>

      <div id="leftCorner"></div>

      <div id="centerMenu">
        <div id="mainMenuLeft">
          <ul className="mainMenu">
            <li className="firstMenu">
              <a href="https://smart-games.org/en/set/start/">New Game</a>
            </li>
            <li className="firstMenu"><Link to="/rules">Rules</Link></li>
          </ul>
        </div>

        <div id="setCards">
          <img src={require("../assets/images/set_cards.png")} alt="logo" />
        </div>

        <div id="mainMenuRight">
          <ul className="mainMenu">
            <li className="firstMenu">
              <a href="../registration.html">Registration</a>
            </li>
            <li className="firstMenu"><a href="../login.html">Sign-in</a></li>
          </ul>
        </div>
      </div>

      <div id="rightCorner"></div>
    </div>
    </div>)
}
export default Header