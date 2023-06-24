import React from "react";

const LoginForm = ({
  handleInputChange,
  handleSubmit,
  user,
  isButtonDisabled,
}) => {
  return (
    <div className="w-full py-14 flex justify-center">
      <div className="w-5/6 my-5 py-5 flex flex-col border rounded">
        <div
          title="head"
          className="w-full pt-5 flex items-center justify-center"
        >
          <p className="text-xl w-5/6">
            Completa los datos para iniciar sesion
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full py-4 flex flex-col items-center"
        >
          <input
            type="email"
            onChange={handleInputChange}
            name="email"
            placeholder="email"
            value={user.email}
            className="w-5/6 border-2 p-1 my-4 rounded border-gray-400"
          />
          <input
            type="password"
            onChange={handleInputChange}
            name="password"
            placeholder="contraseña"
            value={user.password}
            className="w-5/6 border-2 p-1 my-4 rounded border-gray-400"
          />
          <input
            type="submit"
            value="Iniciar Sesion"
            className="w-5/6 border-2 p-1 my-4 rounded text-gray-200 border-gray-400 bg-gray-900"
            disabled={isButtonDisabled}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
