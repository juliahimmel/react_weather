var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     // var location = this.props.location;
//     // var temp = this.props.temp;
//     var {location, temp} = this.props;
//     return(
//       <div>
//         <p>Location is {location} and temp is {temp}</p>
//       </div>
//     );
//   }
// });

// Stateless Functional Components syntax

// var WeatherMessage = (props) => {
var WeatherMessage = ({location, temp}) => {
  // var {location, temp} = props;
  return(
    <div>
      <p>Location is {location} and temp is {temp}</p>
    </div>
  );
};

module.exports = WeatherMessage;
