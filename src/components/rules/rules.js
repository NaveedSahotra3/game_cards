import React from 'react'


const Rules = ()=>{

  return(<div>
        <div id="main">
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
            <li className="firstMenu"><a href="index.html">Rules</a></li>
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

    <div id="content">
      <div id="rules">
        <h1>Rules</h1>
        <p>
          The object of the game is to identify a 'Set' of three cards from 12
          cards laid out on the table. Each card has a variation of the
          following four features:
        </p>
        <p>
          1) <b>COLOR:</b> Each card is red, green, or blue. <br />
          2) <b>SYMBOL:</b> Each card contains ovals, squiggles, or diamonds.
          <br />
          3) <b>NUMBER:</b> Each card has one, two, or three symbols. <br />
          4) <b>SHADING:</b> Each card is solid, open, or striped. <br />
        </p>
        <p>
          A 'Set' consists of three cards in which each feature is EITHER the
          same on each card OR is different on each card. That is to say, any
          feature in the 'Set' of three cards is either common to all three
          cards or is different on each card.
        </p>
        <h4>Examples of sets:</h4>
        1) <b>color:</b> different on each card, <b>symbol:</b> the same on
        each card (oval), <b>number:</b> the same on each (two),
        <b>shading:</b> the same on each card (solid)
        <table className="small">
          <tr>
            <td className="card">
              <img
                classNameName="card_sign small"
                src={require('../assets/images/oval_solid_blue.png')}
                alt="oval solid blue 2 "
              />
              <br />
              <img
                className="card_sign small"
                src={require('../assets/images/oval_solid_blue.png')}
                alt="oval solid blue 2 "
              />
              <br />
            </td>
            <td className="card">
              <img
                className="card_sign small"
                src={require('../assets/images/oval_solid_red.png')}
                alt="oval solid red 2 "
              />

              <br />
              <img
                className="card_sign small"
                src={require('../assets/images/oval_solid_red.png')}
                alt="oval solid red 2 "
              />
              <br />
            </td>
            <td className="card">
              <img
                className="card_sign small"
                src={require('../assets/images/oval_solid_green.png')}
                alt="oval solid green 2 "
              />
              <br />
              <img
                className="card_sign small"
                src={require('../assets/images/oval_solid_green.png')}
                alt="oval solid green 2 "
              />
              <br />
            </td>
          </tr>
        </table>
        2) <b>color:</b> different on each card, <b>symbol:</b> different on
        each card, <b>number:</b> different on each card,
        <b>shading:</b> different on each card
        <table className="small">
          <tr>
            <td className="card">
              <img
                className="card_sign small"
                src="../../../images/diamond_striped_blue.png"
                alt="diamond striped blue 2 "
              />
              <br />
              <img
                className="card_sign small"
                src="../../../images/diamond_striped_blue.png"
                alt="diamond striped blue 2 "
              />
              <br />
            </td>
            <td className="card">
              <img
                className="card_sign small"
                src="../../../images/squiggle_solid_red.png"
                alt="squiggle solid red 1 "
              />

              <br />
            </td>
            <td className="card">
              <img
                className="card_sign small"
                src="../../../images/oval_open_green.png"
                alt="oval open green 3 "
              />
              <br />
              <img
                className="card_sign small"
                src="../../../images/oval_open_green.png"
                alt="oval open green 3 "
              />
              <br />
              <img
                className="card_sign small"
                src="../../../images/oval_open_green.png"
                alt="oval open green 3 "
              />
              <br />
            </td>
          </tr>
        </table>

        3) <b>color:</b> the same on each card (green), <b>symbol:</b> the
        same on each card (diamond), <b>number:</b> different on each card,
        <b>shading:</b> different on each card
        <table className="small">
          <tr>
            <td className="card">
              <img
                className="card_sign small"
                src="../../../images/diamond_solid_green.png"
                alt="diamond solid green 2 "
              />
              <br />
              <img
                className="card_sign small"
                src="../../../images/diamond_solid_green.png"
                alt="diamond solid green 2 "
              />
              <br />
            </td>
            <td className="card">
              <img
                className="card_sign small"
                src="../../../images/diamond_striped_green.png"
                alt="diamond striped green 3 "
              />

              <br />
              <img
                className="card_sign small"
                src="../../../images/diamond_striped_green.png"
                alt="diamond striped green 3 "
              />
              <br />
              <img
                className="card_sign small"
                src="../../../images/diamond_striped_green.png"
                alt="diamond striped green 3 "
              />
              <br />
            </td>
            <td className="card">
              <img
                className="card_sign small"
                src="../../../images/diamond_open_green.png"
                alt="diamond open green 1 "
              />
              <br />
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  </div>)


}
export default Rules