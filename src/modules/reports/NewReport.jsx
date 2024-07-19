import { NewConnection } from "../../components/NewConnection";

export function NewReport() {
  const proyectList = ["Proyecto 1", "Proyecto 2", "Proyecto 3"];
  return (
    <NewConnection to="/reports" proyectList={proyectList}>
      <span>
        Selecciona un archivo <strong>Power BI</strong> con extensión{" "}
        <strong>.pbi</strong>.
      </span>
    </NewConnection>
  );
}
