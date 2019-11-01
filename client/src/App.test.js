import React from 'react';
import { render } from '@testing-library/react'
import App from './App';
import PlayerCard from './components/PlayerCard';


// Comment out HookComponent or these tests will fail due to the test framework finding a bug in code that does not have a bug

test("displays Women's world cup header", () => {
   const { getByText } = render(<App />);
  getByText(/Women's world Cup players ranked by search/i);
});

test('displays country p tag', () => {
  const player = { name: "Alex Morgan", country: "United States", searches: 100 };
  const { getByText } = render(<PlayerCard {...player}/>);
 getByText(/alex/i);
 getByText(/united/i);
 getByText(/searches: 100/i);
});

test('loads data from server and renders it', () => {
  const { findByText } = render(<App />);
  findByText(/alex/i);
  findByText(/united/i);
  findByText(/searches: 100/i);
});

test('loads data from server and renders it 2', () => {
  const { findByText } = render(<App />);
  findByText(/megan rap/i);
});