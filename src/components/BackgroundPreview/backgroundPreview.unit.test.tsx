import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'Components/App/store';
import BackgroundPreview from 'Components/BackgroundPreview/BackgroundPreview';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';

beforeAll(() => {
  render(
    <Provider store={store}>
      <BackgroundPreview />
    </Provider>
  );
});

test('should display default redux state value for: backgroundFrame', () => {
  expect(screen.getByTitle('Background preview')).toHaveTextContent('backgroundFrame is 10');
});

afterAll(cleanup);