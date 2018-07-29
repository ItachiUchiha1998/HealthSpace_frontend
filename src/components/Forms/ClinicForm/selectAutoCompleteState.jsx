import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import data from 'assets/cities.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedOptionState: ''
    }
  }

  render() {
        var options = data.states;
        var placeholder = "Delhi";

    return (
      <Select
        name="form-field-name"
        value={this.props.selectedstatevalue}
        onChange={this.props.handleSelectStateChange}
        options={options}
        placeholder={placeholder}
      />
    );
  }
}

export default App;
