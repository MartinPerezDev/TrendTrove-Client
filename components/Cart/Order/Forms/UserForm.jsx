import BoxForm from "@/components/BoxForm";

const UserForm = ({ handleInputChange, handleSubmit }) => {
  const classBoxInput = "flex flex-col w-full items-center py-2";
  const classInput = "w-5/6 border-2 py-3 px-2 my-4 rounded-md border-none";
  return (
    <BoxForm
      title="Complete con sus datos para continuar con la compra"
      type="order-user"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full py-4 flex flex-col items-center"
      >
        <div className={classBoxInput}>
          <p className="w-5/6">NOMBRE</p>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleInputChange}
            className={`${classInput} text-gray-800`}
          />
        </div>
        <div className={classBoxInput}>
          <p className="w-5/6">EMAIL</p>
          <input
            type="text"
            name="email"
            placeholder="email@gmail.com"
            onChange={handleInputChange}
            className={`${classInput} text-gray-800`}
          />
        </div>
        <div className={classBoxInput}>
          <p className="w-5/6">DIRECIÓN DE ENTREGA</p>
          <input
            type="text"
            name="address"
            placeholder="address"
            onChange={handleInputChange}
            className={`${classInput} text-gray-800`}
          />
        </div>
        <input
          type="submit"
          value="Continuar con la compra"
          className={`${classInput} text-gray-200 bg-gray-900`}
        />
      </form>
    </BoxForm>
  );
};

export default UserForm;
