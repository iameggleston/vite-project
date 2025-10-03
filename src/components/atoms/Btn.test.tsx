import { render, screen } from '@testing-library/react';

import Btn from 'src/components/atoms/Btn';

describe('Rendering', () => {
  it('Should render link elements correctly', () => {
    render(<Btn />);
    expect(screen.getByRole('link').textContent).toEqual('一覧へ');
  });
});

