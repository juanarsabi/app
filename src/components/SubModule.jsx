import { Link } from "react-router-dom";

export function SubModule({ to, children }) {
  return (
    <>
      <Link to={to} className="text-sky-700">
        <i className="lni lni-arrow-left"></i>
        <span className="ml-2">Volver</span>
      </Link>
      <hr className="py-2" />
      {children}
    </>
  );
}
