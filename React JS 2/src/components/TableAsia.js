import React from "react";
import './Table.css';

function TableAsia () {

    const data = [
        { id: "1", continent: "Asia", country: "Afghanistan", beginning: "2001", deaths: "~149.000,00" },
        { id: "2", continent: "Asia", country: "Armenia", beginning: "1988", deaths: "~30.000,00" },
        { id: "3", continent: "Asia", country: "Chechnya", beginning: "1999", deaths: "~100.000,00" },
        { id: "4", continent: "Asia", country: "China", beginning: "2007", deaths: "~1.000,00" },
        { id: "5", continent: "Asia", country: "India", beginning: "1947", deaths: "~100.000,00" },
        { id: "6", continent: "Asia", country: "India", beginning: "1980", deaths: "~10.000,00" },
        { id: "7", continent: "Asia", country: "India", beginning: "1979", deaths: "~40.000,00" },
        { id: "8", continent: "Asia", country: "Israel", beginning: "1948", deaths: "~120.000,00" },
        { id: "9", continent: "Asia", country: "Iran", beginning: "2004", deaths: "~1.000,00" },
        { id: "10", continent: "Asia", country: "Iraq", beginning: "2014", deaths: "~100.000,00" },
        { id: "11", continent: "Asia", country: "Myanmar", beginning: "1948", deaths: "~100.000,00" },
        { id: "12", continent: "Asia", country: "Pakistan", beginning: "2004", deaths: "~3.300,00" },
        { id: "13", continent: "Asia", country: "Philippines", beginning: "1969", deaths: "~40.000,00" },
        { id: "14", continent: "Asia", country: "Philippines", beginning: "1971", deaths: "~100.000,00" },
        { id: "15", continent: "Asia", country: "Syria", beginning: "2011", deaths: "~470.000,00" },
        { id: "16", continent: "Asia", country: "Thailand", beginning: "2004", deaths: "~6.000,00" },
        { id: "17", continent: "Asia", country: "Turkey", beginning: "1984", deaths: "~475.500,00" },
        { id: "18", continent: "Asia", country: "South Korea", beginning: "1953", deaths: "~900,00" },
        { id: "19", continent: "Asia", country: "Yemen", beginning: "2004", deaths: "~10.000,00" },
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

export default TableAsia;