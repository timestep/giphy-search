import React from 'react';
import PropTypes from 'prop-types';

export class TrendingComponent extends React.Component {
  componentWillMount() {
    this.props.getTrendingGifs();
  }

  render() {
    const {
      images = [],
    } = this.props;

    return (
      <div>
        {images.map(img => (
          <img src={img.downsized_medium.url}/>
        ))}
      </div>
    );
  }
}

TrendingComponent.propTypes = {
  images: PropTypes.any,
  getTrendingGifs: PropTypes.func.isRequired,
};
