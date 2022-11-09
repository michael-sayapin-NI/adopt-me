import { Component } from 'react';

export class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" width="400" height="400" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              src={photo}
              alt="animal thumbnail"
              className={index === active ? 'active' : ''}
              width="100"
              height="100"
              key={photo}
            />
          ))}
        </div>
      </div>
    );
  }
}
