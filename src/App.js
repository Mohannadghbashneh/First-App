import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import data from "./components/Json.json";
import SelectedBeast from "./components/SelectedBeast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beastData: data,
      displayModal: false,
      selectedBeast: {}
    };
  }
  showModal = (name) => {

    const selectedBeast = data.find(beast => beast.title === name);
    this.setState({selectedBeast, displayModal:true});
  }
  hideModal = () => {this.setState({displayModal: false});
  }

  
  render() {
    return (
      <div>
        <Header />
        <div>
          <Main
            showModal={this.showModal}
            beasts={this.state.beastData}
          />
          <SelectedBeast
          displayModal={this.state.displayModal}
          hideModal={this.hideModal}
          selectedBeast={this.state.selectedBeast} />
          
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;