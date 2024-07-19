function THead({ tittle }) {
  return (
    <th className="border border-slate-300 bg-slate-100 py-2">{tittle}</th>
  );
}

export function TRow({ row }) {
  return (
    <tr>
      {row.map((cell) => (
        <td className="border border-slate-200 text-gray-600 px-4 py-1">
          {cell}
        </td>
      ))}
    </tr>
  );
}

export function Table({ tittles, children }) {
  return (
    <table className="table-auto border-collapse border border-slate-400 w-full">
      <thead>
        <tr>
          {tittles.map((tittle) => (
            <THead tittle={tittle} />
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
