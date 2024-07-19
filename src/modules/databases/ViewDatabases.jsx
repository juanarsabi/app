import { useEffect, useState } from "react";
import { ViewTable } from "../../components/ViewTable";

import {
  jeyson_bd_rows,
  jeyson_bd_download,
  jeyson_bd_view,
  juan_bd_rows,
  juan_bd_download,
  juan_bd_view,
  laura_bd_rows,
  laura_bd_download,
  laura_bd_view,
} from "../../utils/msalData";

export function ViewDatabases({ user }) {
  const tittles = [
    "Proyecto",
    "Archivo",
    "Fecha Conexión",
    "Última modificación",
    "Responsable",
  ];

  const [rows, setRows] = useState([]);
  const [download, setDownload] = useState([]);
  const [view, setView] = useState([]);

  useEffect(() => {
    switch (user) {
      case "jeyson":
        setRows(jeyson_bd_rows);
        setDownload(jeyson_bd_download);
        setView(jeyson_bd_view);
        break;
      case "juan":
        setRows(juan_bd_rows);
        setDownload(juan_bd_download);
        setView(juan_bd_view);
        break;
      case "laura":
        setRows(laura_bd_rows);
        setDownload(laura_bd_download);
        setView(laura_bd_view);
        break;
      default:
        break;
    }
  }, []);

  return (
    <ViewTable
      to="/databases"
      rows={rows}
      tittles={tittles}
      download={download}
      view={view}
    />
  );
}
