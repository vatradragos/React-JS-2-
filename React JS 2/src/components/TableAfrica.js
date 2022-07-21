import React, { useState } from "react";
import './Table.css';

function TableAfrica () {

    const data = [
        { id: "1", continent: "Africa", country: "Algeria", beginning: "2007", deaths: "~1.000,00" },
        { id: "2", continent: "Africa", country: "Congo", beginning: "1960", deaths: "~2.700,00" },
        { id: "3", continent: "Africa", country: "Congo", beginning: "1994", deaths: "~60.000,00" },
        { id: "4", continent: "Africa", country: "Congo", beginning: "1995", deaths: "~1.000,00" },
        { id: "5", continent: "Africa", country: "Egipt", beginning: "2011", deaths: "~1.000,00" },
        { id: "6", continent: "Africa", country: "Mali", beginning: "2012", deaths: "~4.000,00" },
        { id: "7", continent: "Africa", country: "Marocco", beginning: "1970", deaths: "~21.000,00" },
        { id: "8", continent: "Africa", country: "Nigeria", beginning: "2009", deaths: "~17.000,00" },
        { id: "9", continent: "Africa", country: "Somalia", beginning: "1988", deaths: "~550.000,00" },
        { id: "10", continent: "Africa", country: "Sudan", beginning: "2011", deaths: "~4.500,00" },
        { id: "11", continent: "Africa", country: "Sudan", beginning: "1987", deaths: "~100.000,00" },
        { id: "12", continent: "Africa", country: "Sudan", beginning: "2003", deaths: "~300.000,00" },
      ]

    const [count, setCount] = useState(0);

    return (
        <>
        <h1 id="title">Conflicts Now</h1>
        <p id="subtitle">There are now <span id="number">34</span> conflicts in the world</p>
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

export default TableAfrica;