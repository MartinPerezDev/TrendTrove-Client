import BoxForm from "./BoxForm";
import FooterForm from "./FooterForm";

const SignupForm = ({
  handleInputChange,
  handleSubmit,
  user,
  isButtonDisabled,
}) => {
  const classBoxInput = "flex flex-col w-full items-center py-2";
  const classInput = "w-5/6 border-2 py-3 px-2 my-4 rounded-md border-none";
  return (
    <BoxForm title="Completa los datos para crear tu cuenta">
      <form
        onSubmit={handleSubmit}
        className="w-full py-4 flex flex-col items-center"
      >
        <div className={classBoxInput}>
          <p className="w-5/6">NOMBRE</p>
          <input
            type="text"
            onChange={handleInputChange}
            name="name"
            placeholder="name"
            value={user.name}
            className={`${classInput} text-gray-800`}
          />
        </div>
        <div className={classBoxInput}>
          <p className="w-5/6">EMAIL</p>
          <input
            type="email"
            onChange={handleInputChange}
            name="email"
            placeholder="email@gmail.com"
            value={user.email}
            className={`${classInput} text-gray-800`}
          />
        </div>
        <div className={classBoxInput}>
          <p className="w-5/6">CONTRASEÑA</p>
          <input
            type="password"
            onChange={handleInputChange}
            name="password"
            placeholder="password"
            value={user.password}
            className={`${classInput} text-gray-800`}
          />
        </div>
        <input
          type="submit"
          value="Crear mi cuenta"
          className={`${classInput} text-gray-200 bg-gray-900`}
          disabled={isButtonDisabled}
        />
        <FooterForm type="signup" />
      </form>
    </BoxForm>
  );
};

export default SignupForm;
