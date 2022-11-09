import { Component } from 'react';

export class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
  };
}
