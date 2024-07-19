import "./index.css";
import { Auth } from "@supabase/auth-ui-react";
import { createClient } from "@supabase/supabase-js";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import { Login } from "./modules/login";
import { Layout } from "./modules/Layout";

import { Toaster } from "sonner";
import { useState, useEffect } from "react";

const supabase = createClient(
  `${process.env.REACT_APP_SUPABASE_URL}`,
  `${process.env.REACT_APP_SUPABASE_KEY}`
);

export default function App() {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { data, error } = await supabase
        .from("usuario_info")
        .select("*")
        .eq("id", `${user.id}`);

      if (!error) {
        setUser(data[0]);
      }
    }
    if (session) {
      getUser();
      console.log(user);
    }
  }, [session]);

  if (!session) {
    return (
      <>
        <Login>
          <Auth
            providers={[]}
            showLinks={false}
            supabaseClient={supabase}
            localization={{
              variables: {
                sign_in: {
                  email_label: "Correo electrónico",
                  email_input_placeholder: "Ej: correo@correo.com",
                  password_label: "Contraseña",
                  password_input_placeholder: "Tú contraseña de PlisBI",
                  button_label: "Ingresar",
                  loading_button_label: "Ingresando...",
                },
              },
            }}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: "#2E86C1",
                    brandAccent: "#2874a6",
                  },
                },
              },
            }}
          />
        </Login>
      </>
    );
  } else {
    return (
      <>
        <Toaster richColors />
        <Layout supabaseClient={supabase} userData={user} />
      </>
    );
  }
}
