import { useEffect, useState } from "react";

import { ViewTable } from "../../components/ViewTable";
import { Link } from "react-router-dom";

export function ViewReports({ user }) {
  const tittles = [
    "Proyecto",
    "Archivo",
    "Fecha Conexión",
    "Última modificación",
    "Responsable",
    "Ver reporte",
  ];

  const [rows, setRows] = useState([]);

  const jeyson_report_rows = [
    {
      row: [
        "1.Informe_General_Arsa",
        "Inf. Ventas BI.pbix",
        "2024/02/12",
        "2024/02/19",
        "Jeyson Ariza",
        <Link
          to="/reports/arsabi"
          className="bg-sky-800 hover:bg-yellow-500 w-full p-2 text-white rounded-sm"
        >
          Ver reporte
        </Link>,
      ],
    },
    {
      row: [
        "2.Informe_ventas",
        "Inf. Ventas BI.pbix",
        "2024/02/12",
        "2024/02/19",
        "Jeyson Ariza",
        <Link
          to="/reports/arsabi-visistas"
          className="bg-sky-800 hover:bg-yellow-500 w-full p-2 text-white rounded-sm"
        >
          Ver reporte
        </Link>,
      ],
    },
  ];

  const juan_report_rows = [
    {
      row: [
        "1.Lanuza",
        "Lanuza Group BI.pbix",
        "2024/02/12",
        "2024/02/19",
        "Juan Quesada",
        <Link
          to="/reports/lanuza"
          className="bg-sky-800 hover:bg-yellow-500 w-full p-2 text-white rounded-sm"
        >
          Ver reporte
        </Link>,
      ],
    },
    {
      row: [
        "2.BI_Visitas",
        "Inf. Lanuza Group - Visitas BI.pbix",
        "2024/02/12",
        "2024/02/19",
        "Juan Quesada",
        <Link
          to="/reports/visitas"
          className="bg-sky-800 hover:bg-yellow-500 w-full p-2 text-white rounded-sm"
        >
          Ver reporte
        </Link>,
      ],
    },
  ];

  const laura_report_rows = [
    {
      row: [
        "1.Informe_Gerencial",
        "Inf. Ventas BI.pbix",
        "2024/02/12",
        "2024/02/19",
        "Laura Sarmiento",
        <Link
          to="/reports/plisbi"
          className="bg-sky-800 hover:bg-yellow-500 w-full p-2 text-white rounded-sm"
        >
          Ver reporte
        </Link>,
      ],
    },
  ];

  useEffect(() => {
    switch (user) {
      case "jeyson":
        setRows(jeyson_report_rows);
        break;
      case "juan":
        setRows(juan_report_rows);
        break;
      case "laura":
        setRows(laura_report_rows);
        break;
      default:
        setRows([]);
    }
  }, []);

  return <ViewTable to="/reports" tittles={tittles} rows={rows} />;
}
