import { Button } from "../../components/Button";
import { Module } from "../../components/Module";
import { TRow, Table } from "../../components/Table";

import { useEffect, useState } from "react";

export function Documents({ user }) {
  const projects = ["Proyecto 1", "Proyecto 2", "Proyecto 3"];
  const titles = [
    "Proyecto",
    "Documento",
    "Responsable",
    "Fecha de creación",
    "Fecha de modificación",
    "Acciones",
  ];
  const [rows, setRows] = useState([]);

  const jeyson_doc_rows = [
    {
      row: [
        "1.Informe_General_Arsa",
        "Plantilla.png",
        "Jeyson Ariza",
        "01/05/2024",
        "04/06/2024",
        <div className="grid grid-cols-3 gap-2 p-2">
          <a
            className="bg-sky-800 hover:bg-yellow-500 w-full p-2 text-white rounded-sm"
            href="https://arsabi-my.sharepoint.com/personal/jeyson_arsabi_co/Documents/Proyectos/1.Informe_General_Arsa/DOC/Plantilla.png"
          >
            ver
          </a>
          <a
            className="bg-sky-800 hover:bg-yellow-500 w-full p-2 text-white rounded-sm"
            href="https://arsabi-my.sharepoint.com/personal/jeyson_arsabi_co/_layouts/15/download.aspx?UniqueId=3dafd512-ca9e-41d2-99d0-735419100078&Translate=false&tempauth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfZGlzcGxheW5hbWUiOiJHcmFwaCBFeHBsb3JlciIsImFwcGlkIjoiZGU4YmM4YjUtZDlmOS00OGIxLWE4YWQtYjc0OGRhNzI1MDY0IiwiYXVkIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwL2Fyc2FiaS1teS5zaGFyZXBvaW50LmNvbUAzMDVmYzAyMi01MjE3LTQ5MWYtOTQyOS04MDNkZWUxNjFkZDEiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMTAzYWU1MzRkQGxpdmUuY29tIiwiY2lkIjoiVFdzMU5qSUo5Q0JJQXljRTFKbXE1dz09IiwiZW5kcG9pbnR1cmwiOiI5OTBBNHZrcnRicVltSW5UNlhtT0QvSGdkajRCYTVjMTNPcTVEVmozSGljPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTQ2IiwiZXhwIjoiMTcxNzcxOTY3MCIsImZhbWlseV9uYW1lIjoiQXJzYWJpIiwiZ2l2ZW5fbmFtZSI6IkpleXNvbiIsImlwYWRkciI6IjIwLjE5MC4xNTIuODgiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE3MTc3MTYwNzAiLCJwdWlkIjoiMTAwMzIwMDEwM0FFNTM0RCIsInNjcCI6Im15ZmlsZXMucmVhZCBhbGxmaWxlcy5yZWFkIG15ZmlsZXMud3JpdGUgYWxsZmlsZXMud3JpdGUgbXlhcHBmb2xkZXIud3JpdGUgYWxsc2l0ZXMucmVhZCBhbGxzaXRlcy53cml0ZSBhbGxwcm9maWxlcy5yZWFkIiwic2l0ZWlkIjoiWlRkbU5EZG1OR1F0TURZeE5pMDBZV1ZpTFRsaE9UQXRPV0V5TVRZMVpXTmtNakZsIiwidGlkIjoiMzA1ZmMwMjItNTIxNy00OTFmLTk0MjktODAzZGVlMTYxZGQxIiwidHQiOiIyIiwidXBuIjoiamV5c29uQGFyc2FiaS5jbyIsInZlciI6Imhhc2hlZHByb29mdG9rZW4ifQ.6a5HVh9SPC4Nukhl_pHCO42mry4jguFtetXcR3a92u8&ApiVersion=2.0"
          >
            descargar
          </a>
          <Button text="Eliminar" onClick={() => {}} />
        </div>,
      ],
    },
    {
      row: [
        "2.Informe_ventas",
        "4-Objetivos Semanales Abril.xlsx",
        "Jeyson Ariza",
        "05/05/2024",
        "04/06/2024",
        <div className="grid grid-cols-3 gap-2 p-2">
          <a
            className="bg-sky-800 hover:bg-yellow-500 w-full p-2 text-white rounded-sm"
            href="https://arsabi-my.sharepoint.com/personal/jeyson_arsabi_co/Documents/Proyectos/2.Informe_Visitas/DOC/Link%20Informe%20PBI.txt"
          >
            ver
          </a>
          <a
            className="bg-sky-800 hover:bg-yellow-500 w-full p-2 text-white rounded-sm"
            href="https://arsabi-my.sharepoint.com/personal/jeyson_arsabi_co/_layouts/15/download.aspx?UniqueId=7bd12fa2-9013-42d6-b82c-72a565a48005&Translate=false&tempauth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfZGlzcGxheW5hbWUiOiJHcmFwaCBFeHBsb3JlciIsImFwcGlkIjoiZGU4YmM4YjUtZDlmOS00OGIxLWE4YWQtYjc0OGRhNzI1MDY0IiwiYXVkIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwL2Fyc2FiaS1teS5zaGFyZXBvaW50LmNvbUAzMDVmYzAyMi01MjE3LTQ5MWYtOTQyOS04MDNkZWUxNjFkZDEiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMTAzYWU1MzRkQGxpdmUuY29tIiwiY2lkIjoieTVlK0l4V0V1RzhNWW9rNVExVXRlQT09IiwiZW5kcG9pbnR1cmwiOiIreFFtYkZJbE9QV3NUQXV5NVAzaEg0NEJ0ZDQwRS9YMjlwVEtQSkw1dnRFPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTQ2IiwiZXhwIjoiMTcxNzcyMDY3NCIsImZhbWlseV9uYW1lIjoiQXJzYWJpIiwiZ2l2ZW5fbmFtZSI6IkpleXNvbiIsImlwYWRkciI6IjQwLjEyNi4yNC4xNTIiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE3MTc3MTcwNzQiLCJwdWlkIjoiMTAwMzIwMDEwM0FFNTM0RCIsInNjcCI6Im15ZmlsZXMucmVhZCBhbGxmaWxlcy5yZWFkIG15ZmlsZXMud3JpdGUgYWxsZmlsZXMud3JpdGUgbXlhcHBmb2xkZXIud3JpdGUgYWxsc2l0ZXMucmVhZCBhbGxzaXRlcy53cml0ZSBhbGxwcm9maWxlcy5yZWFkIiwic2l0ZWlkIjoiWlRkbU5EZG1OR1F0TURZeE5pMDBZV1ZpTFRsaE9UQXRPV0V5TVRZMVpXTmtNakZsIiwidGlkIjoiMzA1ZmMwMjItNTIxNy00OTFmLTk0MjktODAzZGVlMTYxZGQxIiwidHQiOiIyIiwidXBuIjoiamV5c29uQGFyc2FiaS5jbyIsInZlciI6Imhhc2hlZHByb29mdG9rZW4ifQ.vzcam-SyntCwFwuSivnjwbPMTcWVdFgXGIyychi0A94&ApiVersion=2.0"
          >
            descargar
          </a>
          <Button text="Eliminar" onClick={() => {}} />
        </div>,
      ],
    },
    {
      row: [
        "2.Informe_ventas",
        "5-Objetivos Semanales Mayo.xlsx",
        "Jeyson Ariza",
        "15/05/2024",
        "04/06/2024",
        <div className="grid grid-cols-3 gap-2 p-2">
          <a
            className="bg-sky-800 hover:bg-yellow-500 w-full p-2 text-white rounded-sm"
            href="https://arsabi-my.sharepoint.com/personal/jeyson_arsabi_co/_layouts/15/Doc.aspx?sourcedoc=%7B3823EA45-47BB-468D-B4DA-21F033E2DC53%7D&file=5-Objetivos%20Semanales%20Mayo.xlsx&action=default&mobileredirect=true"
          >
            ver
          </a>
          <a
            className="bg-sky-800 hover:bg-yellow-500 w-full p-2 text-white rounded-sm"
            href="https://arsabi-my.sharepoint.com/personal/jeyson_arsabi_co/_layouts/15/download.aspx?UniqueId=1e787a38-e6e6-4a0b-b8c7-c9f731e0c64c&Translate=false&tempauth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfZGlzcGxheW5hbWUiOiJHcmFwaCBFeHBsb3JlciIsImFwcGlkIjoiZGU4YmM4YjUtZDlmOS00OGIxLWE4YWQtYjc0OGRhNzI1MDY0IiwiYXVkIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwL2Fyc2FiaS1teS5zaGFyZXBvaW50LmNvbUAzMDVmYzAyMi01MjE3LTQ5MWYtOTQyOS04MDNkZWUxNjFkZDEiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMTAzYWU1MzRkQGxpdmUuY29tIiwiY2lkIjoieTVlK0l4V0V1RzhNWW9rNVExVXRlQT09IiwiZW5kcG9pbnR1cmwiOiJPL0dxMnVCV0lmSk5DMWtiNXBWdXVLcXNySnVqYnNXUzhYZ0ZtOUlzaURZPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTQ2IiwiZXhwIjoiMTcxNzcyMDY3NCIsImZhbWlseV9uYW1lIjoiQXJzYWJpIiwiZ2l2ZW5fbmFtZSI6IkpleXNvbiIsImlwYWRkciI6IjQwLjEyNi4yNC4xNTIiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE3MTc3MTcwNzQiLCJwdWlkIjoiMTAwMzIwMDEwM0FFNTM0RCIsInNjcCI6Im15ZmlsZXMucmVhZCBhbGxmaWxlcy5yZWFkIG15ZmlsZXMud3JpdGUgYWxsZmlsZXMud3JpdGUgbXlhcHBmb2xkZXIud3JpdGUgYWxsc2l0ZXMucmVhZCBhbGxzaXRlcy53cml0ZSBhbGxwcm9maWxlcy5yZWFkIiwic2l0ZWlkIjoiWlRkbU5EZG1OR1F0TURZeE5pMDBZV1ZpTFRsaE9UQXRPV0V5TVRZMVpXTmtNakZsIiwidGlkIjoiMzA1ZmMwMjItNTIxNy00OTFmLTk0MjktODAzZGVlMTYxZGQxIiwidHQiOiIyIiwidXBuIjoiamV5c29uQGFyc2FiaS5jbyIsInZlciI6Imhhc2hlZHByb29mdG9rZW4ifQ.EUGW7yQqbI0hsI2dys1UPRspUgkQ3UEJHa13GSF58x0&ApiVersion=2.0"
          >
            descargar
          </a>
          <Button text="Eliminar" onClick={() => {}} />
        </div>,
      ],
    },
    {
      row: [
        "2.Informe_ventas",
        "Fondo 1280x1500 Arsa BI.png",
        "Jeyson Ariza",
        "15/05/2024",
        "01/05/2024",
        <div className="grid grid-cols-3 gap-2 p-2">
          <a
            className="bg-sky-800 hover:bg-yellow-500 w-full p-2 text-white rounded-sm"
            href="https://arsabi-my.sharepoint.com/personal/jeyson_arsabi_co/_layouts/15/Doc.aspx?sourcedoc=%7BF923DA32-EA37-4D19-860D-188AA4461502%7D&file=4-Objetivos%20Semanales%20Abril.xlsx&action=default&mobileredirect=true"
          >
            ver
          </a>
          <a
            className="bg-sky-800 hover:bg-yellow-500 w-full p-2 text-white rounded-sm"
            href="https://arsabi-my.sharepoint.com/personal/jeyson_arsabi_co/_layouts/15/download.aspx?UniqueId=f923da32-ea37-4d19-860d-188aa4461502&Translate=false&tempauth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfZGlzcGxheW5hbWUiOiJHcmFwaCBFeHBsb3JlciIsImFwcGlkIjoiZGU4YmM4YjUtZDlmOS00OGIxLWE4YWQtYjc0OGRhNzI1MDY0IiwiYXVkIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwL2Fyc2FiaS1teS5zaGFyZXBvaW50LmNvbUAzMDVmYzAyMi01MjE3LTQ5MWYtOTQyOS04MDNkZWUxNjFkZDEiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMTAzYWU1MzRkQGxpdmUuY29tIiwiY2lkIjoieTVlK0l4V0V1RzhNWW9rNVExVXRlQT09IiwiZW5kcG9pbnR1cmwiOiJkRGN6S29WQUJ4M3VLSS81RGY1alV1R05iZ3BZeUEwa0FQSFh1bFFBalRBPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTQ2IiwiZXhwIjoiMTcxNzcyMDY3NCIsImZhbWlseV9uYW1lIjoiQXJzYWJpIiwiZ2l2ZW5fbmFtZSI6IkpleXNvbiIsImlwYWRkciI6IjQwLjEyNi4yNC4xNTIiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE3MTc3MTcwNzQiLCJwdWlkIjoiMTAwMzIwMDEwM0FFNTM0RCIsInNjcCI6Im15ZmlsZXMucmVhZCBhbGxmaWxlcy5yZWFkIG15ZmlsZXMud3JpdGUgYWxsZmlsZXMud3JpdGUgbXlhcHBmb2xkZXIud3JpdGUgYWxsc2l0ZXMucmVhZCBhbGxzaXRlcy53cml0ZSBhbGxwcm9maWxlcy5yZWFkIiwic2l0ZWlkIjoiWlRkbU5EZG1OR1F0TURZeE5pMDBZV1ZpTFRsaE9UQXRPV0V5TVRZMVpXTmtNakZsIiwidGlkIjoiMzA1ZmMwMjItNTIxNy00OTFmLTk0MjktODAzZGVlMTYxZGQxIiwidHQiOiIyIiwidXBuIjoiamV5c29uQGFyc2FiaS5jbyIsInZlciI6Imhhc2hlZHByb29mdG9rZW4ifQ.mm_B-ShypLjnHDKljc6CDpGkCz0S1OE0mb6ziyW4pgg&ApiVersion=2.0"
          >
            descargar
          </a>
          <Button text="Eliminar" onClick={() => {}} />
        </div>,
      ],
    },
  ];

  const juan_doc_rows = [
    {
      row: [
        "1.Lanuza",
        "Ver imagen.txt",
        "Juan Quezada",
        "01/04/2024",
        "05/06/2024",
        <div className="grid grid-cols-3 gap-2 p-2">
          <a
            className="bg-sky-800 hover:bg-yellow-500 w-full p-2 text-white rounded-sm"
            href="https://arsabi-my.sharepoint.com/personal/juan_quesada_arsabi_co/Documents/Proyectos/1.Lanuza/DOC/Ver%20imagen.txt"
          >
            ver
          </a>
          <a
            className="bg-sky-800 hover:bg-yellow-500 w-full p-2 text-white rounded-sm"
            href="https://arsabi-my.sharepoint.com/personal/juan_quesada_arsabi_co/_layouts/15/download.aspx?UniqueId=92b4d378-63c6-4e99-b593-def72f74ed61&Translate=false&tempauth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfZGlzcGxheW5hbWUiOiJHcmFwaCBFeHBsb3JlciIsImFwcGlkIjoiZGU4YmM4YjUtZDlmOS00OGIxLWE4YWQtYjc0OGRhNzI1MDY0IiwiYXVkIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwL2Fyc2FiaS1teS5zaGFyZXBvaW50LmNvbUAzMDVmYzAyMi01MjE3LTQ5MWYtOTQyOS04MDNkZWUxNjFkZDEiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMzZiODJkODhlQGxpdmUuY29tIiwiY2lkIjoiek15ZGZUU1lFRU9PRnZnMnhaUE5Fdz09IiwiZW5kcG9pbnR1cmwiOiJ3cjZHcnNwUnpLSThFTTNkUk1PeW9BK1h5cXR0UDJFbmMxMTh3OTk5bXhzPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTUyIiwiZXhwIjoiMTcxNzcyMjUzMSIsImZhbWlseV9uYW1lIjoiUXVlc2FkYSIsImdpdmVuX25hbWUiOiJKdWFuIiwiaXBhZGRyIjoiNDAuMTI2LjI0LjE1MiIsImlzbG9vcGJhY2siOiJUcnVlIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTcxNzcxODkzMSIsInB1aWQiOiIxMDAzMjAwMzZCODJEODhFIiwic2NwIjoibXlmaWxlcy5yZWFkIGFsbGZpbGVzLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxzaXRlcy53cml0ZSBhbGxwcm9maWxlcy5yZWFkIiwic2lnbmluX3N0YXRlIjoiW1wia21zaVwiXSIsInNpdGVpZCI6Ik1URmxZak16TkdJdE9XVTRPQzAwTVRRMExXSTRNalF0TlROaE5tVXdNMlJpT0RsbSIsInRpZCI6IjMwNWZjMDIyLTUyMTctNDkxZi05NDI5LTgwM2RlZTE2MWRkMSIsInR0IjoiMiIsInVwbiI6Imp1YW4ucXVlc2FkYUBhcnNhYmkuY28iLCJ2ZXIiOiJoYXNoZWRwcm9vZnRva2VuIn0.mhkDXUr-mVIxwcX9o_vLu84849kSZRaxW275zE4Zipk&ApiVersion=2.0"
          >
            descargar
          </a>
          <Button text="Eliminar" onClick={() => {}} />
        </div>,
      ],
    },
    {
      row: [
        "2.BI_Visitas",
        "TD Busqueda de terceros.xlsx",
        "Juan Quezada",
        "01/04/2024",
        "05/06/2024",
        <div className="grid grid-cols-3 gap-2 p-2">
          <a
            className="bg-sky-800 hover:bg-yellow-500 w-full p-2 text-white rounded-sm"
            href="https://arsabi-my.sharepoint.com/personal/juan_quesada_arsabi_co/_layouts/15/Doc.aspx?sourcedoc=%7BDA499448-304D-40E4-BC6F-A2F74F01ECD5%7D&file=TD%20Busqueda%20de%20terceros.xlsx&action=default&mobileredirect=true"
          >
            ver
          </a>
          <a
            className="bg-sky-800 hover:bg-yellow-500 w-full p-2 text-white rounded-sm"
            href="https://arsabi-my.sharepoint.com/personal/juan_quesada_arsabi_co/_layouts/15/download.aspx?UniqueId=da499448-304d-40e4-bc6f-a2f74f01ecd5&Translate=false&tempauth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfZGlzcGxheW5hbWUiOiJHcmFwaCBFeHBsb3JlciIsImFwcGlkIjoiZGU4YmM4YjUtZDlmOS00OGIxLWE4YWQtYjc0OGRhNzI1MDY0IiwiYXVkIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwL2Fyc2FiaS1teS5zaGFyZXBvaW50LmNvbUAzMDVmYzAyMi01MjE3LTQ5MWYtOTQyOS04MDNkZWUxNjFkZDEiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHwxMDAzMjAwMzZiODJkODhlQGxpdmUuY29tIiwiY2lkIjoiN21SWkR6QnZoVWlUbEpUaGZZSVFTZz09IiwiZW5kcG9pbnR1cmwiOiJHOFp5TkdXRC95ek5wMWRnQXFPcGhoOVkveE1SMzlSOVpiNUE0WjY5NWg0PSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTUyIiwiZXhwIjoiMTcxNzcyMjc1NSIsImZhbWlseV9uYW1lIjoiUXVlc2FkYSIsImdpdmVuX25hbWUiOiJKdWFuIiwiaXBhZGRyIjoiNDAuMTI2LjI0LjE1MiIsImlzbG9vcGJhY2siOiJUcnVlIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTcxNzcxOTE1NSIsInB1aWQiOiIxMDAzMjAwMzZCODJEODhFIiwic2NwIjoibXlmaWxlcy5yZWFkIGFsbGZpbGVzLnJlYWQgYWxsc2l0ZXMucmVhZCBhbGxzaXRlcy53cml0ZSBhbGxwcm9maWxlcy5yZWFkIiwic2lnbmluX3N0YXRlIjoiW1wia21zaVwiXSIsInNpdGVpZCI6Ik1URmxZak16TkdJdE9XVTRPQzAwTVRRMExXSTRNalF0TlROaE5tVXdNMlJpT0RsbSIsInRpZCI6IjMwNWZjMDIyLTUyMTctNDkxZi05NDI5LTgwM2RlZTE2MWRkMSIsInR0IjoiMiIsInVwbiI6Imp1YW4ucXVlc2FkYUBhcnNhYmkuY28iLCJ2ZXIiOiJoYXNoZWRwcm9vZnRva2VuIn0.JcU9zkULuRNMIO4zzfAocD6l-kObVPbrfznmkUj4uzU&ApiVersion=2.0"
          >
            descargar
          </a>
          <Button text="Eliminar" onClick={() => {}} />
        </div>,
      ],
    },
  ];

  const laura_doc_rows = [
    {
      row: [],
    },
  ];

  useEffect(() => {
    switch (user) {
      case "jeyson":
        setRows(jeyson_doc_rows);
        break;
      case "juan":
        setRows(juan_doc_rows);
        break;
      case "laura":
        setRows(laura_doc_rows);
        break;
      default:
        setRows([]);
    }
  }, [user]);

  return (
    <Module title="Buscar documento">
      <form
        action="#"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-4"
      >
        <div>
          <label htmlFor="project">Proyecto</label>
          <select
            id="project"
            className="border border-slate-300 rounded-sm p-1 my-2 w-full"
          >
            {projects.map((proyect) => (
              <option value={proyect}>{proyect}</option>
            ))}
          </select>
          <span className="text-sm">Selecciona un proyecto. </span>
        </div>
        <div>
          <label htmlFor="document">Documento</label>
          <input
            type="text"
            id="document"
            placeholder="ManualUsuario.docx"
            className="border border-slate-300 rounded-sm p-1 my-2 w-full"
          />
          <span className="text-sm">Ingresa el nombre del documento.</span>
        </div>
        <div>
          <label htmlFor="assigne">Responsable</label>
          <input
            type="text"
            id="assigne"
            placeholder="Juan Perez"
            className="border border-slate-300 rounded-sm p-1 my-2 w-full"
          />
          <span className="text-sm">Responsable del documento. </span>
        </div>
        <div className="flex justify-center items-center">
          <Button onClick={() => {}} text="Buscar" />
        </div>
      </form>
      <hr />
      <Table tittles={titles}>
        {rows.map((row) => (
          <TRow row={row.row} />
        ))}
      </Table>
    </Module>
  );
}
