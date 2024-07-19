import { SubModule } from "./SubModule";
import { Table } from "./Table";
import { TRow } from "./Table";

export function ViewTable({ to, rows, tittles, download, view }) {
  return (
    <SubModule to={to}>
      <Table tittles={tittles}>
        {rows.map((row) => (
          <TRow key={row} row={row.row} />
        ))}
      </Table>
    </SubModule>
  );
}
