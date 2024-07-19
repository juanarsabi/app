import { Button } from "../../components/Button";
import { Module } from "../../components/Module";
import { TRow, Table } from "../../components/Table";

export function Develop() {
  const titles = ["Día", "Hora inicio", "Hora fin", "Total", "Agendar"];
  const rows = [
    {
      row: [
        "Viernes 07 Junio 2024",
        "15:00",
        "16:00",
        "1 Hr.",
        <Button text="Confirmar" onClick={() => {}} />,
      ],
    },
    {
      row: [
        "Martes 11 Junio 2024",
        "10:00",
        "11:00",
        "1 Hr.",
        <Button text="Confirmar" onClick={() => {}} />,
      ],
    },
    {
      row: [
        "Miércoles 12 Junio 2024",
        "14:00",
        "15:00",
        "1 Hr.",
        <Button text="Confirmar" onClick={() => {}} />,
      ],
    },
    {
      row: [
        "Jueves 13 Junio 2024",
        "16:00",
        "17:00",
        "1 Hr.",
        <Button text="Confirmar" onClick={() => {}} />,
      ],
    },
    {
      row: [
        "Viernes 14 Junio 2024",
        "9:00",
        "10:00",
        "1 Hr.",
        <Button text="Confirmar" onClick={() => {}} />,
      ],
    },
    {
      row: [
        "Lunes 17 Junio 2024",
        "13:00",
        "14:00",
        "1 Hr.",
        <Button text="Confirmar" onClick={() => {}} />,
      ],
    },
  ];

  const engineers = ["David Alejandro", "Laura Sarmiento"];

  return (
    <Module title="Agendar reunión">
      <form action="#">
        <div className="mb-3">
          <label htmlFor="">Seleccione un ingeniero:</label>
          <select
            id="project"
            className="border border-slate-300 rounded-sm p-1 my-2 w-full"
          >
            {engineers.map((engineer) => (
              <option value={engineer}>{engineer}</option>
            ))}
          </select>
          <hr />
        </div>
        <div className="mb-3">
          <label htmlFor="">Escriba el asunto de la reunión:</label>
          <input
            type="text"
            className="border border-slate-300 rounded-sm p-1 my-2 w-full"
          />
          <hr />
        </div>
        <div className="mb-3">
          <label htmlFor="">Escriba una breve descripción de la reunión:</label>
          <textarea
            id="file"
            rows={3}
            className="border border-slate-300 rounded-sm p-1 my-2 w-full"
          />
          <hr />
        </div>
        <div className="mb-3">
          <label htmlFor="">Seleccione una fecha: </label>
          <input
            placeholder="Selecciona una de las fechas disponibles"
            type="text"
            className="border border-slate-300 rounded-sm p-1 my-2 w-full"
            disabled
          />
          <div className="text-sm text-gray-500 mb-4">
            <span>
              {" "}
              <strong>Campo no editable</strong>, por favor selecciona una fecha
              disponible.
            </span>
          </div>
          <Table tittles={titles}>
            {rows.map((row) => (
              <TRow row={row.row} />
            ))}
          </Table>
        </div>
        <Button text="Agendar reunión" onClick={() => {}} />
      </form>
    </Module>
  );
}
