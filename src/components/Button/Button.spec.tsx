import React from 'react';
import { screen, render } from '@testing-library/react';

import { Primary } from './Button.stories';

describe('Button', () => {
  it("should have 'Button' as content", () => {
    // Arrange
    render(<Primary />);

    // Act

    // Assert
    const btn = screen.getByRole('button');
    expect(btn.innerHTML).toEqual('Button');
  });
});
