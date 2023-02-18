import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button Component', () => {
  it('should render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  it('should render with "clear" theme class name', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
