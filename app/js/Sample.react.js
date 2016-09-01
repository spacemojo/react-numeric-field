'use strict'

var React = require('react');
var NumericField = require('./NumericField.react');

var Sample = React.createClass({

  getInitialState: function() {
    this.currentValue = "";
    return null;
  },

  mySetValue: function(value) {
    this.currentValue = value;
    this.setState({render: true});
  },

  render: function() {

    return (
      <div>
        <h3>This is a sample app to test the react-numeric-field component</h3>
        <p>In the 'Sample.react.js' component, the NumericField is used as such : </p>
        <pre>
          &lt;NumericField name="Numeric field in sample app" setValue={'\u007bthis.mySetValue\u007d'} /&gt;
        </pre>
        <p>Resulting in : </p>
        <NumericField name="Numeric field in sample app" setValue={this.mySetValue} />
        <p>This is the value in the NumericField : {this.currentValue}</p>
        <h5>OPTIONAL</h5>
        <p>You can always set the "value" property to initialize the field, like so : </p>
        <pre>
          &lt;NumericField name="Numeric field in sample app" setValue={'\u007bthis.mySetValue\u007d'} value="123" /&gt;
        </pre>
      </div>
    )

  }

});

module.exports = Sample;
