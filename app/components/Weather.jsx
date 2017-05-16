var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
    // return {
    //   location: 'Miami',
    //   temp: 88
    // }
  },
  handleSearch: function(location) {
    var that = this;

    that.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({
        isLoading: false
      });
      alert(errorMessage);
    });
  },
  render: function () {
    // var location = this.state.location;
    // var temp = this.state.temp;
    var {isLoading, location, temp} = this.state;

    function renderMessage () {
      if(isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if(temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return(
      <div>
        <h2>Hi Weather</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
