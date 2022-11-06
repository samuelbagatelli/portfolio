import React from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Header from './components/Header';
import Presentation from './components/Presentation';

export default function App() {
  return (
    <SimpleBar forceVisible="y" style={{ maxHeight: '100vh' }} autoHide={false}>
      <main>
        <Header />
        <Presentation />
      </main>
    </SimpleBar>
  );
}
