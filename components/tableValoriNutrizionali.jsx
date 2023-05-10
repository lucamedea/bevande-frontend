import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes, useRoutes } from 'react-router-dom';

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Effettua la richiesta API per recuperare i dati dal database
    fetch("http://bevanderia.altervista.org/bevandeapi/API/valori_nutrizionali/getArchiveNutritionalValues.php")
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
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.nome}</td>
            <td>{item.val_nome}</td>
            <td>{item.valore}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
