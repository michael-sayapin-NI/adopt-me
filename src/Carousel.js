import { Component } from 'react';

export class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: Number.parseInt(event.target.dataset.index, 10),
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" width="400" height="400" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              src={photo}
              alt="animal thumbnail"
              className={index === active ? 'active' : ''}
              data-index={index}
              width="100"
              height="100"
              onClick={this.handleIndexClick}
              key={photo}
            />
          ))}
        </div>
      </div>
    );
  }
}
