import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes, useRoutes } from 'react-router-dom';

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Effettua la richiesta API per recuperare i dati dal database
    fetch("http://bevanderia.altervista.org/bevandeapi/API/prodotto/getArchiveProducts.php")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch(error => {
        console.error('Errore nella richiesta:', error);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>prodotto</th>
          <th>descrizione</th>
          <th>prezzo</th>
          <th>categoria</th>
          <th>quantita</th>
          <th>attivo</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.nome}</td>
            <td>{item.descrizione}</td>
            <td>{item.prezzo}</td>
            <td>{item.categoria_nome}</td>
            <td>{item.quantita}</td>
            <td>{item.active}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
