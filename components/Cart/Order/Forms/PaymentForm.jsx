import BoxForm from "@/components/BoxForm";

const PaymentForm = ({ handleInputChange, handleSubmit, isSubmitting }) => {
  const classBoxInput = "flex flex-col w-full items-center py-2";
  const classInput = "w-5/6 border-2 py-3 px-2 my-4 rounded-md border-none";
  return (
    <BoxForm
      title="Complete sus datos de pago para realizar la compra"
      type="order-payment"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full py-4 flex flex-col items-center"
      >
        <div className={classBoxInput}>
          <p className="w-5/6">TIPO DE TARJETA</p>
          <select
            name="method"
            onChange={handleInputChange}
            defaultValue=""
            className="w-5/6 border-2 py-3 px-2 my-4 rounded border-gray-400 bg-gray-900"
          >
            <option value="">Seleccione un método de pago</option>
            <option value="debito">Debito</option>
            <option value="credito">Credito</option>
          </select>
        </div>
        <div className={classBoxInput}>
          <p className="w-5/6">NOMBRE COMO APARECE EN LA TARJETA</p>
          <input
            type="text"
            name="cardName"
            placeholder="full name"
            className={`${classInput} text-gray-800`}
            onChange={handleInputChange}
          />
        </div>
        <div className={classBoxInput}>
          <p className="w-5/6">NÚMERO DE TARJETA</p>
          <input
            type="number"
            name="cardNumber"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            className={`${classInput} text-gray-800`}
            onChange={handleInputChange}
          />
        </div>
        <div className={classBoxInput}>
          <p className="w-5/6">FECHA DE VENCIMIENTO</p>
          <input
            type="number"
            name="expireDate"
            placeholder="MM/AA"
            className={`${classInput} text-gray-800`}
            onChange={handleInputChange}
          />
        </div>
        <div className={classBoxInput}>
          <p className="w-5/6">CÓDIGO DE SEGURIDAD</p>
          <input
            type="number"
            name="cvv"
            placeholder="CVV"
            className={`${classInput} text-gray-800`}
            onChange={handleInputChange}
          />
        </div>
        <input
          type="submit"
          value={isSubmitting === true ? "Enviando..." : "Finalizar compra"}
          className={`${classInput} text-gray-200 bg-gray-900`}
          disabled={isSubmitting}
        />
      </form>
    </BoxForm>
  );
};

export default PaymentForm;
