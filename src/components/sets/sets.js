import React from "react";

const Sets = () => {
  return (
    <div>
      <div id="main">
      
        <div id="content">
          <h2>Choose game type:</h2>

          <table style={{ width: "100%" }}>
            <tr>
              <td>
                <div style={{ textAlign: "center" }}>
                  <a href="start.html">
                    <img src="../../images/set_cards.png"></img>
                    <br />
                    Set
                  </a>
                </div>
              </td>
              <td>
                <div style={{ textAlign: "center" }}>
                  <a href="https://smart-games.org/en/set_scrabble/">
                    <img src="../../images/set_scrabble.jpg" height="139"></img>
                    <br />
                    Set-Scrabble
                  </a>
                </div>
              </td>
              <td>
                <div style={{ textAlign: "center" }}>
                  <a href="https://smart-games.org/en/set_classic/">
                    <img src="../../images/set_cards.png"></img>
                    <br />
                    Set-Classic
                  </a>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Sets;
