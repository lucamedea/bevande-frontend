import React, { useState, useEffect } from 'react';

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
          <th>nome</th>
          <th>prezzo</th>
          <th>descrizione</th>
          <th>id_categoria</th>
          <th>quantita</th>
          <th>attivo</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.nome}</td>
            <td>{item.prezzo}</td>
            <td>{item.descrizione}</td>
            <td>{item.id_categoria}</td>
            <td>{item.quantita}</td>
              {item.active == 1 ? <td>Attivo</td> : <td>Passivo</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
