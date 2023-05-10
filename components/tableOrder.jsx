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
          <th>data_ora</th>
          <th>totale</th>
          <th>nome_cliente</th>
          <th>cognome_cliente</th>
          <th>email_cliente</th>
          <th>telefono_cliente</th>
          <th>indirizzo_cliente</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.data_ora}</td>
            <td>{item.totale}</td>
            <td>{item.nome_cliente}</td>
            <td>{item.cognome_cliente}</td>
            <td>{item.email_cliente}</td>
            <td>{item.telefono_cliente}</td>
            <td>{item.indirizzo_cliente}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
