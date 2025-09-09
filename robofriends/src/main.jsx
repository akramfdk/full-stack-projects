// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
// import Card from './Card.jsx';
// import {robots} from './robots.jsx';
import CardList from './CardList.jsx';

createRoot(document.getElementById('root')).render(
  <CardList />
)
