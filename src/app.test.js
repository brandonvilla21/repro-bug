/**
 * @jest-environment jsdom
 */
import React from 'react';
import {render} from '@testing-library/react';
import MyComponent from './app';
import {rest} from 'msw';
import {setupServer} from 'msw/node';

const server = setupServer(
  rest.get('/endpointA', (req, res, ctx) => {
    return res(ctx.json({greeting: 'hello there'}));
  })
);

describe('Test', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('sessionStorage error', () => {
    render(<MyComponent />);
  });
});