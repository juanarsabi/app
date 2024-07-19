import { Link } from "react-router-dom";

export function ModuleItem({ to, item, imageURL }) {
  return (
    <Link to={to} className="flex justify-center items-center hover:bg-sky-50">
      <img src={imageURL} alt="" className="w-32" />
      <p className="mt-2 text-sky-800">{item}</p>
    </Link>
  );
}
