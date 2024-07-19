import { Button } from "./Button";
import { SubModule } from "./SubModule";

export function NewConnection({ to, proyectList, children }) {
  return (
    <SubModule to={to}>
      <form action="#">
        <div className="grid grid-cols-2 mb-4">
          <div className="p-2">
            <label htmlFor="project">Proyecto: </label>
            <select
              id="project"
              className="border border-slate-300 rounded-sm p-1 my-2 w-full"
            >
              {proyectList.map((proyect) => (
                <option key={proyect} value={proyect}>
                  {proyect}
                </option>
              ))}
            </select>
            <span className="text-gray-500">Selecciona un proyecto.</span>
          </div>
          <div className="p-2">
            <label htmlFor="file">Documento: </label>
            <input
              id="file"
              type="file"
              className="border border-slate-300 rounded-sm p-1 my-2 w-full"
            />
            <span className="text-gray-500">{children}</span>
          </div>
        </div>
        <Button text="Cargar" onClick={() => {}} />
      </form>
    </SubModule>
  );
}
