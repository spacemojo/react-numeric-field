'use strict'

var React = require('react');
var UUID = require('uuid');

var NumericField = React.createClass({

  getInitialState: function() {
    this.id = UUID.v4();
    this.currentValue = (this.props.value == undefined) ? "" : this.processInitialValue(this.props.value);
    return null;
  },

  processInitialValue: function(value) {
    var str = "";
    for(var c in value) {
      if(!(isNaN(value[c]) || value[c] == ' ')) {
        str += value[c];
      }
    }
    return str;
  },

  onChange: function(event) {

    var inputValue = event.nativeEvent.target.value;

    if(inputValue.length > 0) {
      var char = inputValue[inputValue.length - 1];
      if(isNaN(char) || char == ' ') {
        document.getElementById(this.id).value = inputValue.substring(0, inputValue.length - 1);
        return;
      } else {
        this.currentValue = inputValue;
      }
    } else {
      this.currentValue = "";
    }

    this.props.setValue(this.currentValue);

  },

  render: function() {
    return (
      <div>
        <label htmlFor={this.id}>{this.props.name}</label>
        <input style={{color: "#000000"}} type="text" className="u-full-width"
         placeholder={this.props.name} id={this.id} defaultValue={this.currentValue} onChange={this.onChange} />
      </div>
    )
  }

});

module.exports = NumericField;
