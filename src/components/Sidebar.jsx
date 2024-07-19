import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";

export const sideBarItems = [
  {
    icon: <i className="lni lni-grid-alt"></i>,
    text: "Home",
    active: false,
    alert: false,
    to: "/",
  },
  {
    icon: <i className="lni lni-archive"></i>,
    text: "Datos",
    active: false,
    alert: false,
    to: "/databases",
  },
  {
    icon: <i className="lni lni-bar-chart"></i>,
    text: "Reportes",
    active: false,
    alert: true,
    to: "/reports",
  },
  {
    icon: <i className="lni lni-timer"></i>,
    text: "Desarrollo",
    active: false,
    alert: true,
    to: "/develop",
  },
  {
    icon: <i className="lni lni-layers"></i>,
    text: "Capacitación",
    active: false,
    alert: null,
    to: "/training",
  },
  {
    icon: <i className="lni lni-folder"></i>,
    text: "Documentos",
    active: false,
    alert: null,
    to: "/documents",
  },
];

const SidebarContext = createContext({ expanded: true });

export function Sidebar({ user, email, children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r-2 border-gray-100 shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="assets/img/principal.svg"
            className={`overflow-hidden transition-all
                ${expanded ? "w-32" : "w-0"}`}
            alt="PlisBI"
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? (
              <i className="lni lni-shift-left"></i>
            ) : (
              <i className="lni lni-shift-right"></i>
            )}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 divide-y-1">{children}</ul>
        </SidebarContext.Provider>
        <div className="border-t flex p-3">
          <img
            alt=""
            className="rounded-md w-10 h-10"
            src="assets/img/icons/principal.png"
          />
          <div
            className={`
                flex justify-between items-center
                overflow-hidden transition-all
                ${expanded ? "w-52 ml-3" : "w-0"}
              `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">{user}</h4>
              <span className="text-xs text-gray-600">{email}</span>
            </div>
            <i className="lni lni-cog"></i>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, to, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li>
      <Link
        to={to}
        className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-yellow-100 text-yellow-800"
            : "hover:bg-yellow-50 text-sky-800"
        }
      `}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-yellow-500
            ${expanded ? "" : "top-2"}
          `}
          ></div>
        )}
        {!expanded && (
          <div
            className={`
            absolute left-full rounded-md px-2 py-1 ml-6
              bg-yellow-100 text-yellow-800 text-sm
              invisible opacity-20 -translate-x-3 transition-all
              group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}
          >
            {text}
          </div>
        )}
      </Link>
    </li>
  );
}
