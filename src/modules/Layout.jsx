import { Route, Routes } from "react-router-dom";

import { Navbar } from "../components/Navbar";

import { Sidebar, SidebarItem, sideBarItems } from "../components/Sidebar";

import { Develop } from "./develop";
import { Training } from "./training";
import { Documents } from "./documents";
import { ReportManagement } from "./reports";
import { NewReport } from "./reports/NewReport";
import { ViewReports } from "./reports/ViewReport";
import { DeleteReport } from "./reports/DeleteReport";
import { DatabaseManagement } from "./databases";
import { NewDatabase } from "./databases/NewDatabase";
import { ViewDatabases } from "./databases/ViewDatabases";
import { DeleteDatabase } from "./databases/DeleteDatabase";

import { useState } from "react";

import {
  Arsabi,
  Lanuza,
  PlisBI,
  Visitas,
  VisitasArsabi,
} from "./reports/Report";

export function Layout({ supabaseClient, userData }) {
  const modules = sideBarItems;

  const [user, setUser] = useState(userData);

  return (
    <div className="flex">
      <Sidebar>
        {modules.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            text={item.text}
            active={item.active}
            alert={item.alert}
            to={item.to}
          />
        ))}
      </Sidebar>
      <main className="grow bg-[#FBFCFC]">
        <Navbar supabase={supabaseClient} />
        <div className="container mx-auto p-5">
          <Routes>
            <Route path="/" element={<h1>Bienvenid@!</h1>} />
            <Route path="/databases" element={<DatabaseManagement />} />
            <Route path="/databases/new" element={<NewDatabase />} />
            <Route
              path="/databases/view"
              element={<ViewDatabases user={"user.nombre.toLowerCase()"} />}
            />
            <Route path="/databases/delete" element={<DeleteDatabase />} />
            <Route path="/reports" element={<ReportManagement />} />
            <Route path="/reports/new" element={<NewReport />} />
            <Route
              path="/reports/view"
              element={<ViewReports user={"user.nombre.toLowerCase()"} />}
            />
            <Route path="/reports/lanuza" element={<Lanuza />} />
            <Route path="/reports/visitas" element={<Visitas />} />
            <Route path="/reports/plisbi" element={<PlisBI />} />
            <Route path="/reports/arsabi" element={<Arsabi />} />
            <Route path="/reports/arsabi-visitas" element={<VisitasArsabi />} />
            <Route path="/reports/delete" element={<DeleteReport />} />
            <Route path="/develop" element={<Develop />} />
            <Route
              path="/documents"
              element={<Documents user={"user.nombre.toLowerCase()"} />}
            />
            <Route path="/training" element={<Training />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
