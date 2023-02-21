import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '../../../shared/lib';
import { Counter } from './Counter';

describe('Counter Component', () => {
  it('should render correctly', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  it('should incerement', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    });
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  it('should decrement', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    });
    fireEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
