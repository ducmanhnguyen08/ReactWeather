var React = require('react');

var WeatherMess = (props) => {
  var {temp, location} = props;
  return (
    <h3 className="text-center">It's it {temp} in {location}</h3>
  );
}

module.exports = WeatherMess;
