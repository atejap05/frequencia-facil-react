import { useMemo, useContext } from "react";
import { useTable } from "react-table";
import FolhaContext from "../../context/folhaContext";
import classes from "../../css/styles.module.css";
// import DUMMY_DATA from "./DUMMY_DATA.json";
import { GROUPED_COLUMNS } from "./columnsFolha";

const TableComponent = () => {
  const columns = useMemo(() => GROUPED_COLUMNS, []);
  const ctx = useContext(FolhaContext);

  //TODO: ao clicar em preencher, a tabela é preenchida com os dados iniciais da folha de ponto
  //TODO: Apos preencher, os dados recebidos nos inputs devem ser enviados para renderizacao da folha pdf no pdfmake
  // const data = useMemo(() => DUMMY_DATA, []);
  const data = useMemo(() => ctx.folhaData.body, [ctx.folhaData.body]);

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
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    // TODO: set dataset com o dia para montagem do objeto
                    <td data-dia={index + 1} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
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
