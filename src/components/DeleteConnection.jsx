import { SubModule } from "./SubModule";
import { Table } from "./Table";
import { TRow } from "./Table";

export function DeleteConnection({ to, rows, tittles }) {
  return (
    <SubModule to={to}>
      <Table tittles={tittles}>
        {rows.map((row) => (
          <TRow row={row.row} />
        ))}
      </Table>
    </SubModule>
  );
}
