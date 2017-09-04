import React from 'react';
import PropTypes from 'prop-types';
const style = {
  height: '100%',
  width: '100%',
  objectFit: 'contain',
};
export class TrendingComponent extends React.Component {
  componentDidMount() {
    this.props.getTrendingGifs();
  }

  render() {
    const {
      images = [],
    } = this.props;

    return (
      <div className="h-inherit">
        <div className="f1 w-100 tc"> Trending GIFS </div>
        <div className="w-100 flex flex-row overflow-x-scroll h-inherit">
          {images.map(img => (
            <img
              alt=""
              style={style}
              key={img.id}
              src={img.images.downsized_medium.url}
            />
          ))}
        </div>
      </div>
    );
  }
}

TrendingComponent.propTypes = {
  images: PropTypes.any,
  getTrendingGifs: PropTypes.func.isRequired,
};
