import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';


export default function Home() {
  return (
    <div style={{ flex: 1, padding: '24px', background: '#fff' }}>
      <Link to="/home/alternative">
        Home com conteudo
      </Link>
      <h1>Content</h1>
    </div>
  );
}
