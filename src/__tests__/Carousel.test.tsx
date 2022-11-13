/**
 * @jest-environment jsdom
 */

import { expect, test, describe } from '@jest/globals';
import { render } from '@testing-library/react';

import Carousel from '../Carousel';

describe('<Carousel />', () => {
  test('lets user click on thumbnail to make them the hero image', async () => {
    const images = ['1.jpg', '2.jpg', '3.jpg'];
    const carousel = render(<Carousel images={images} />);

    const hero = (await carousel.findByTestId('hero')) as HTMLImageElement;
    expect(hero.src).toContain(images[0]);

    for (let i = 0; i < images.length; i++) {
      const image = images[i];

      const thumb = await carousel.findByTestId(`thumbnail-${i}`);
      thumb.click();

      expect(hero.src).toContain(image);
      expect(thumb.classList).toContain('active');
    }
  });
});
