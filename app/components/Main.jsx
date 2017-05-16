var React = require('react');
var Nav =  require('Nav');
var Weather = require('Weather');

// var Main = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Nav/>
//         <h2>Main component</h2>
//         {this.props.children}
//       </div>
//     );
//   }
//
// });

// Stateless Functional Components syntax
// PAY ATTENTION TO 'this' SYNTAX HERE

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <h2>Main component</h2>
      {props.children}
    </div>
  );
};

module.exports = Main;
