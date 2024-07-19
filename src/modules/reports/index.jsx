import { Module } from "../../components/Module";
import { ModuleItem } from "../../components/ModuleItem";

export function ReportManagement() {
  return (
    <Module title="Gestion de reportes">
      <div className="grid grid-cols-3 gap-9 p-9">
        <ModuleItem
          item="Ver conexiones"
          imageURL="/assets/img/items/ver-reportes.png"
          to="/reports/view"
        />
        <ModuleItem
          item="Nueva conexión"
          imageURL="assets/img/items/nuevo-reporte.png"
          to="/reports/new"
        />
        <ModuleItem
          item="Eliminar conexión"
          imageURL="assets/img/items/eliminar-reporte.png"
          to="/reports/delete"
        />
      </div>
    </Module>
  );
}
