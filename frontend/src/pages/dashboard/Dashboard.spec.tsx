import { render } from 'react-testing-library';
import Dashboard from './Dashboard';

test('init GameTotaler', () => {
  const myName: string = 'Dashboard';
  const { getByText } = render(
  );
  expect(getByText(`Hello, ${Dashboard}`)).toBeTruthy();
});