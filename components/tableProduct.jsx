import React from 'react';
import { useState, useEffect } from 'react';

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
          <th>Prodotto</th>
          <th>Descrizione</th>
          <th>Prezzo</th>
          <th>Categoria</th>
          <th>Quantità</th>
          <th>Attivo</th>
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
            <td>{item.active == 1 ? 'Attivo' : 'Disattivo'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
