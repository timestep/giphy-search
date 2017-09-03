import React from 'react';
import PropTypes from 'prop-types';

export class TrendingComponent extends React.Component {
  componentDidMount() {
    this.props.getTrendingGifs();
  }

  render() {
    const {
      images = [],
    } = this.props;

    return (
      <div>
        {images.map(img => (
          <img
            alt=""
            key={img.id}
            src={img.images.downsized_medium.url}
          />
        ))}
      </div>
    );
  }
}

TrendingComponent.propTypes = {
  images: PropTypes.any,
  getTrendingGifs: PropTypes.func.isRequired,
};
