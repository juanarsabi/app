import React from "react";

export function Login({ children }) {
  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
              <img
                src="assets/img/horizontal/principal.png"
                alt="login-image"
                className="w-32 mx-auto"
              />
            </div>
            <div className="mt-4 2xl:mt-16 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">
                Iniciar sesión
              </h1>
              <div className="w-full flex-1 mt-6 2xl:mt-12">{children}</div>
            </div>
          </div>
          <div className="flex-1 bg-[#fbfbfb] text-center hidden lg:flex">
            <div
              className="w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('assets/img/login.png')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
