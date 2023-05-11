import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes, useRoutes } from 'react-router-dom';

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Effettua la richiesta API per recuperare i dati dal database
    fetch("http://bevanderia.altervista.org/bevandeapi/API/ordine/getArchiveOrders.php")
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
          <th>Nome cliente</th>
          <th>Cognome cliente</th>
          <th>Email cliente</th>
          <th>Telefono cliente</th>
          <th>Data</th>
          <th>Totale</th>
          <th>Prodotti</th>
          <td>Ritiro</td>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.nome_user}</td>
            <td>{item.cognome}</td>
            <td>{item.email}</td>
            <td>{item.telefono}</td>
            <td>{item.data_ora}</td>
            <td>{item.totale}</td>
            <td>{item.nome_prodotto}</td>
            <td>{item.ritiro}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
