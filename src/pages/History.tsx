import React from 'react';
import { useAppSelector } from '../app/hooks';
import { Header } from '../components/Header';

export const History: React.FC = () => {
  const history = useAppSelector(state => state.history);

  return (
    <>
      <Header />
      <section className="section is-flex is-flex-direction-column is-align-items-center">
        {history.length !== 0 ? (
          <div className="container is-flex is-flex-direction-column is-align-items-center">
            <h1 className="title">Історія перевірок</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>№</th>
                  <th>Дата</th>
                  <th>Результат</th>
                </tr>
              </thead>
              <tbody>
                {history.map((word, i) => (
                  <tr key={word.id}>
                    <th>{i + 1}</th>
                    <th>{word.date}</th>
                    <th>
                      {word.progress}
                      %
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h1 className="title">Перевірок немає</h1>
        )}
      </section>
    </>
  );
};
