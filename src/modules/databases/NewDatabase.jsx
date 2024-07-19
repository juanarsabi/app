import { NewConnection } from "../../components/NewConnection";

export function NewDatabase() {
  const proyectList = ["Proyecto 1", "Proyecto 2", "Proyecto 3"];
  return (
    <NewConnection to="/databases" proyectList={proyectList}>
      <span>
        Selecciona un archivo <strong>Excel</strong> con extensión{" "}
        <strong>.xls</strong> o <strong>.xlxs</strong>.
      </span>
    </NewConnection>
  );
}
