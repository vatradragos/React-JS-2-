import React from "react";
import './Table.css';

function TableNorthAmerica () {

    const data = [
        { id: "1", continent: "North America", country: "Mexico", beginning: "2006", deaths: "~100.000,00" }
      ]
        

    return (
        <>
        <div className="table">
      <table>
        <tbody>
          <tr>
          <th>#</th>
            <th>CONTINENT</th>
            <th>COUNTRY</th>
            <th>BEGINNING</th>
            <th>DEATHS</th>
          </tr>
        </tbody>
        {data.map((val, key) => {
          return (
            <tbody>
              <tr key={key} className="index">
                <td>{val.id}</td>
                <td>{val.continent}</td>
                <td>{val.country}</td>
                <td>{val.beginning}</td>
                <td>{val.deaths}</td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
    </>
    )
}

export default TableNorthAmerica;