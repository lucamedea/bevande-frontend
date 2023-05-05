import React, { useState, useEffect } from 'react';

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
          <th>Kcal</th>
          <th>Fats</th>
          <th>Proteine</th>
          <th>Zuccheri</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.Kcal}</td>
            <td>{item.Fats}</td>
            <td>{item.Proteins}</td>
            <td>{item.Sugars}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
