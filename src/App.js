import React, { Component } from "react";
import Title from "./components/title";
import Description from "./components/description";
import Image from "./components/image";
import logo from "./images/Adinkrahene-PNG.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="Body">
        <Image img={logo} />
        <div className="Content">
          <Title title="The AdinkraHene Symbol" />{" "}
          <Description sentence="It is made up of three concentric circles, each of which is contained within the other two, and it is meant to represent the oneness and interconnectedness of all things. The symbol is used to represent powerful leaders and influential figures because it embodies qualities such as charisma, leadership, and greatness." />
        </div>
      </div>
    );
  }
}
export default App;
