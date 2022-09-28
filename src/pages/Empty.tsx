import React from 'react';
import { Header } from '../components/Header';

export const Empty = () => {
  return (
    <>
      <Header />
      <section className="section is-flex is-flex-direction-column is-align-items-center">
        <h1 className="title">Щоб зробити перевірку, добавте в словник не менше ніж 10 слів</h1>
      </section>
    </>
  );
};
