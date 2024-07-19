import { Button } from "../../components/Button";
import { DeleteConnection } from "../../components/DeleteConnection";

export function DeleteReport() {
  const tittles = [
    "Proyecto",
    "Archivo",
    "Última modificación",
    "Responsable",
    "Eliminar",
  ];

  const rows = [
    {
      row: [
        "ArsaBI",
        "MyFile.pbi",
        "2024/02/12",
        "Juan Quesada",
        <Button text="Eliminar" onClick={() => {}} />,
      ],
    },
    {
      row: [
        "PlisBI",
        "MyFile.pbi",
        "2024/02/12",
        "Juan Quesada",
        <Button text="Eliminar" onClick={() => {}} />,
      ],
    },
    {
      row: [
        "ArsaBI",
        "MyFile.pbi",
        "2024/02/12",
        "Juan Quesada",
        <Button text="Eliminar" onClick={() => {}} />,
      ],
    },
    {
      row: [
        "PlisBI",
        "MyFile.pbi",
        "2024/02/12",
        "Juan Quesada",
        <Button text="Eliminar" onClick={() => {}} />,
      ],
    },
  ];

  return <DeleteConnection to="/reports" tittles={tittles} rows={rows} />;
}
