import { Module } from "../../components/Module";
import { ModuleItem } from "../../components/ModuleItem";

export function DatabaseManagement() {
  return (
    <Module title="Gestion bases de datos">
      <div className="grid grid-cols-3 gap-9 p-9">
        <ModuleItem
          item="Ver conexiones"
          imageURL="/assets/img/items/ver-conexiones.png"
          to="/databases/view"
        />
        <ModuleItem
          item="Nueva conexión"
          imageURL="assets/img/items/nueva-conexion.png"
          to="/databases/new"
        />
        <ModuleItem
          item="Eliminar conexión"
          imageURL="assets/img/items/eliminar-conexion.png"
          to="/databases/delete"
        />
      </div>
    </Module>
  );
}
