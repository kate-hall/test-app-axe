import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'jest-axe/extend-expect';
import Icon from './Icon';

describe('Icon', () => {
  it('should not have basic accessibility issues', async () => {
    const { container } = render(<Icon />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
