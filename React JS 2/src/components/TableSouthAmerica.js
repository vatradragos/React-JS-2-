import React from "react";
import './Table.css';

function TableSouthAmerica () {

    const data = [
        { id: "1", continent: "South America", country: "Colombia", beginning: "1964", deaths: "~220.000,00" }
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

export default TableSouthAmerica;