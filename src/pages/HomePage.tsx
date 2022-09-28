import React from 'react';
import { useAppSelector } from '../app/hooks';
import { Header } from '../components/Header';

export const HomePage: React.FC = () => {
  const words = useAppSelector(state => state.words);

  return (
    <>
      <Header />
      <section className="section is-flex is-flex-direction-column is-align-items-center">
        {words.length !== 0 ? (
          <div className="container is-flex is-flex-direction-column is-align-items-center">
            <h1 className="title">Словник</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>№</th>
                  <th>Слово</th>
                  <th>Переклад</th>
                </tr>
              </thead>
              <tbody>
                {words.map((word, i) => (
                  <tr key={word.id}>
                    <th>{i + 1}</th>
                    <th>{word.wordOnUkr}</th>
                    <th>{word.wordOnEng}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h1 className="title">В словнику немає слів</h1>
        )}
      </section>
    </>
  );
};
