import { useMemo, useEffect } from "react";
import { useTable } from "react-table";
import classes from "../../css/styles.module.css";
import DUMMY_DATA from "./DUMMY_DATA.json";
import { GROUPED_COLUMNS } from "./columnsFolha";
const dadosFolha = {};

const TableComponent = props => {
  const columns = useMemo(() => GROUPED_COLUMNS, []);
  const data = useMemo(() => DUMMY_DATA, []);
  const dadosF = useMemo(() => dadosFolha, []);

  useEffect(() => {
    props.onClickGerar(dadosF);
  }, [props, dadosF]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }); // react-table instance
  return (
    <div className={classes["table-container"]}>
      <table className={classes["table-result"]} {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => {
                return (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            dadosFolha[index] = row.values;
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
