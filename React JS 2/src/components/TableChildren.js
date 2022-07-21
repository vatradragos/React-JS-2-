import React from 'react';
import { useTable, useSortBy } from 'react-table';
import './TableChildren.css';

function TableChildren() {

 const data = React.useMemo(
     () => [
        {
            col1: 'Afghanistan',
            col2: '~29.800,00',
            col3: '~20',
        },
       {
         col1: 'Algeria',
         col2: '~100,00',
         col3: '~10',
       },
       
       {
         col1: 'Armenia',
         col2: '~3.000,00',
         col3: '~10',
       },
       {
        col1: 'Chechnya',
        col2: '~20.000,00',
        col3: '~20',
      },
      {
        col1: 'China',
        col2: '~800,00',
        col3: '~8',
      },
      {
        col1: 'Colombia',
        col2: '~9.500,00',
        col3: '~20',
      },
      {
        col1: 'Congo',
        col2: '~9.500,00',
        col3: '~15',
      },
      {
        col1: 'Egipt',
        col2: '~50,00',
        col3: '~5',
      },
      {
        col1: 'India',
        col2: '~37.500,00',
        col3: '~25',
      },
      {
        col1: 'Israel',
        col2: '~21.600,00',
        col3: '~18',
      },
      {
        col1: 'Iran',
        col2: '~50,00',
        col3: '~5',
      },
      {
        col1: 'Iraq',
        col2: '~15.000,00',
        col3: '~15',
      },
      {
        col1: 'Mali',
        col2: '~280,00',
        col3: '~7',
      },
      {
        col1: 'Marocco',
        col2: '~2.100,00',
        col3: '~10',
      },
      {
        col1: 'Mexico',
        col2: '~10.000,00',
        col3: '~10',
      },
      {
        col1: 'Myanmar',
        col2: '~20.000,00',
        col3: '~20',
      },
      {
        col1: 'Nigeria',
        col2: '~3.400,00',
        col3: '~20',
      },
      {
        col1: 'Pakistan',
        col2: '~250,00',
        col3: '~8',
      },
      {
        col1: 'Philippines',
        col2: '~21.000,00',
        col3: '~15',
      },
      {
        col1: 'Somalia',
        col2: '~137.500,00',
        col3: '~25',
      },
      {
        col1: 'Sudan',
        col2: '~80.900,00',
        col3: '~20',
      },
      {
        col1: 'Syria',
        col2: '~70.500,00',
        col3: '~15',
      },
      {
        col1: 'Thailand',
        col2: '~300,00',
        col3: '~5',
      },
      {
        col1: 'Turkey',
        col2: '~85.500,00',
        col3: '~18',
      },
      {
        col1: 'South Korea',
        col2: '~45,00',
        col3: '~5',
      },
      {
        col1: 'Ukraine',
        col2: '~1.500,00 (so far)',
        col3: '~15 (so far)',
      },
      {
        col1: 'Yemen',
        col2: '~1.500,00',
        col3: '~15',
      },
     ],
     []
 )

 const columns = React.useMemo(
     () => [
       {
         Header: 'Country',
         accessor: 'col1',
       },
       {
         Header: 'Numbers (~)',
         accessor: 'col2',
       },
       {
         Header: 'Per Cent (%)',
         accessor: 'col3',
       },
     ],
     []
 )

 const {
   getTableProps,
   getTableBodyProps,
   headerGroups,
   rows,
   prepareRow,
 } = useTable({ columns, data }, useSortBy);

 return (
    <>
     <div>
        <h1 id="children-title">Children Affected by Armed Conflict</h1>
        <p id="children-subtitle">Ckick on first row to sort</p>
       <table {...getTableProps()} id="children-table">
         <thead id="children-th">
         {headerGroups.map(headerGroup => (
             <tr {...headerGroup.getHeaderGroupProps()}>
               {headerGroup.headers.map(column => (
                   <th
                       {...column.getHeaderProps(column.getSortByToggleProps())}
                   >
                     {column.render('Header')}
                     <span>
                       {column.isSorted
                           ? column.isSortedDesc
                               ? ' ⇩'
                               : ' ⇧'
                           : ''}
                    </span>
                   </th>
               ))}
             </tr>
         ))}
         </thead>
         <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
               <tr {...row.getRowProps()} className='index'>
                 {row.cells.map(cell => {
                   return (
                       <td
                           {...cell.getCellProps()}
                       >
                         {cell.render('Cell')}
                       </td>
                   )
                 })}
               </tr>
           )
         })}
         </tbody>
       </table>
     </div>
     </>
 );
}

export default TableChildren;