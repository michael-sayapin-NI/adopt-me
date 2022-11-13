/**
 * @jest-environment jsdom
 */

import { expect, test, describe } from '@jest/globals';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';

import Pet from '../Pet';

describe('<Pet />', () => {
  test('displays a default thumbnail', async () => {
    const pet = render(
      <StaticRouter location="/">
        <Pet
          animal="dog"
          images={[]}
          location="Israel"
          breed="Husky"
          id={1}
          name="Max"
        />
      </StaticRouter>
    );

    const petThumbnail = (await pet.findByTestId(
      'thumbnail'
    )) as HTMLImageElement;
    expect(petThumbnail.src).toContain('none.jpg');
  });

  test('displays a non default thumbnail', async () => {
    const pet = render(
      <StaticRouter location="/">
        <Pet
          images={['1.jpg', '2.jpg', '3.jpg']}
          animal="dog"
          location="Israel"
          breed="Husky"
          id={1}
          name="Max"
        />
      </StaticRouter>
    );

    const petThumbnail = (await pet.findByTestId(
      'thumbnail'
    )) as HTMLImageElement;
    expect(petThumbnail.src).toContain('1.jpg');
  });
});
