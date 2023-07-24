const UserDataForm = ({ dataUserOrder, handleOrderUser, handleInputChangeUser }) => {
  return (
    <div className="w-full py-14 flex justify-center">
      <div className="w-5/6 my-5 py-5 flex flex-col justify-center items-center border rounded">
        <div
          title="head"
          className="w-full pt-5 flex items-center justify-center"
        >
          <p className="text-xl w-5/6">
            Complete el formulario con sus datos para continuar con la compra
          </p>
        </div>
        <form
          className="w-5/6 py-4 flex flex-col items-center"
          onSubmit={handleOrderUser}
        >
          <div className="flex  flex-wrap items-center w-full">
            <label for="name" className="w-40">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              onChange={handleInputChangeUser}
              value={dataUserOrder.name}
              className="w-full border-2 p-1 my-4 rounded border-gray-400"
            />
          </div>

          <div className="flex flex-wrap items-center w-full">
            <label for="name" className="w-40">
              Email
            </label>
            <input
              type="text"
              name="email"
              onChange={handleInputChangeUser}
              value={dataUserOrder.email}
              className="w-full border-2 p-1 my-4 rounded border-gray-400"
            />
          </div>

          <div className="flex flex-wrap items-center w-full">
            <label for="name" className="w-40">
              Direccion de entrega
            </label>
            <input
              type="text"
              name="address"
              onChange={handleInputChangeUser}
              value={dataUserOrder.address}
              className="w-full border-2 p-1 my-4 rounded border-gray-400"
            />
          </div>
          <div className="flex flex-wrap items-center w-full">
            <input
              type="submit"
              value="Continuar con la compra"
              className="w-full border-2 p-1 my-4 rounded text-gray-200 border-gray-400 bg-gray-900"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDataForm;
