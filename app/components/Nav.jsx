var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();

    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <Link to="/">Get Weather</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/examples">Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="seach" placeholder="Search weather by city" ref="search"/>
              </li>
              <li>
                <button type="submit" className="button">Search</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});
module.exports = Nav;
