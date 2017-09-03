import React from 'react';
import PropTypes from 'prop-types';

class TrendingComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getTrendingGifs();
  }

  render() {
    const {
      data,
    } = this.props;

    return (
      <div>
        {data.map(() => (
          <div>Hi</div>
        ))}
      </div>
    );
  }
}

TrendingComponent.propTypes = {
  data: PropTypes.data,
  getTrendingGifs: PropTypes.func.isRequired,
};
