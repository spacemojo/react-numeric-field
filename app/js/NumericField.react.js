'use strict'

var React = require('react');
var UUID = require('uuid');

var NumericField = React.createClass({

  getInitialState: function() {
    this.id = UUID.v4();
    this.currentValue = (this.props.value == undefined) ? "" : this.processValue(this.props.value);
    return null;
  },

  processValue: function(value) {
    return value.split("").filter((char) => !(isNaN(char) || char == ' ')).join("");
  },

  onChange: function(event) {

    let inputValue = event.nativeEvent.target.value;

    let parsed = this.processValue(inputValue);
    document.getElementById(this.id).value = parsed;

    this.currentValue = parsed;
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
