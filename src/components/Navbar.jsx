import { toast } from "sonner";

import { useNavigate } from "react-router-dom";

export function Navbar({ supabase }) {
  const navigate = useNavigate();

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(error);
    }
    navigate("/");
  }
  return (
    <nav className="bg-sky-700 flex flex-row-reverse h-10">
      <div className="grid grid-cols-2 divide-x">
        <button
          className="text-white w-100 flex items-center hover:bg-[#428DBF] px-2"
          onClick={() => {
            signOut();
          }}
        >
          Salir
        </button>
      </div>
    </nav>
  );
}
