import React from 'react';
import PropTypes from 'prop-types';

export class TrendingComponent extends React.Component {
  componentWillMount() {
    console.log('hi');
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
