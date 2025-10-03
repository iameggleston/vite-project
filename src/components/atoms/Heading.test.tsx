import { screen, render } from '@testing-library/react';

import Heading from 'src/components/atoms/Heading';

describe('Rendering', () => {
  it('Should render heading elements correctly', () => {
    const text = 'test';
    render(<Heading text={text} />);
    expect(screen.getByRole('heading').textContent).toEqual('test');
  });
});

