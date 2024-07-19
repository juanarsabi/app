import { Button } from "../../components/Button";
import { DeleteConnection } from "../../components/DeleteConnection";

export function DeleteDatabase() {
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
        "MyFile.xsl",
        "2024/02/12",
        "Juan Quesada",
        <Button text="Eliminar" onClick={() => {}} />,
      ],
    },
    {
      row: [
        "PlisBI",
        "MyFile.xsl",
        "2024/02/12",
        "Juan Quesada",
        <Button text="Eliminar" onClick={() => {}} />,
      ],
    },
    {
      row: [
        "ArsaBI",
        "MyFile.xsl",
        "2024/02/12",
        "Juan Quesada",
        <Button text="Eliminar" onClick={() => {}} />,
      ],
    },
    {
      row: [
        "PlisBI",
        "MyFile.xsl",
        "2024/02/12",
        "Juan Quesada",
        <Button text="Eliminar" onClick={() => {}} />,
      ],
    },
  ];

  return <DeleteConnection to="/databases" tittles={tittles} rows={rows} />;
}
