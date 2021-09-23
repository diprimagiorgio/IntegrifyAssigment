import { render, screen } from '@testing-library/react';
import App from './App';
import UserDetails from './components/UserDetails'
import ReactDOM from 'react-dom';
import { MemoryRouter } from "react-router-dom";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
it('test no user found', () => {
  render(
    <MemoryRouter initialEntries={["/users/200"]}>
      <UserDetails />
    </MemoryRouter>
  );
  expect(screen.getByText('User not found!')).toBeInTheDocument();
});
// TODO: test when the data are loaded. After get, when state changes
