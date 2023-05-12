import React from 'react';
import { useState, useEffect } from 'react';

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
          <th>ID</th>
          <th>Data e Ora</th>
          <th>Totale</th>
          <th>Nome Utente</th>
          <th>Cognome</th>
          <th>Email</th>
          <th>Telefono</th>
          <th>Ritiro</th>
          <th>Prodotti</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.data_ora}</td>
            <td>{item.totale}</td>
            <td>{item.nome_user}</td>
            <td>{item.cognome}</td>
            <td>{item.email}</td>
            <td>{item.telefono}</td>
            <td>{item.ritiro}</td>
            <td>
              <ul>
                {item.prodotti.map((prodotto, index) => (
                  <li key={index}>{prodotto.nome}</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
