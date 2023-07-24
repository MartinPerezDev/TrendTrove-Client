import React from "react";

const PaymentForm = ({ submitOrder, handleInputChangePayment }) => {
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
          onSubmit={submitOrder}
        >
          <div className="flex  flex-wrap items-center w-full">
            <label for="name" className="w-40">
              Seleccione el tipo de tarjeta
            </label>
            <select
              name="method"
              onChange={handleInputChangePayment}
              className="w-full border-2 p-1 my-4 rounded text-gray-200 border-gray-400 bg-gray-900"
            >
              <option value="" defaultValue="" selected>
                Seleccione una opción
              </option>
              <option value="debito">Debito</option>
              <option value="credito">Credito</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center w-full">
            <label for="name" className="w-40">
              Nombre como aparece en la tarjeta
            </label>
            <input
              type="text"
              name="cardName"
              placeholder="Nombre y apellido"
              className="w-full border-2 p-1 my-4 rounded border-gray-400"
              onChange={handleInputChangePayment}
            />
          </div>

          <div className="flex flex-wrap items-center w-full">
            <label for="name" className="w-40">
              Número de tarjeta
            </label>
            <input
              type="text"
              name="cardNumber"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              className="w-full border-2 p-1 my-4 rounded border-gray-400"
              onChange={handleInputChangePayment}
            />
          </div>

          <div className="flex flex-wrap items-center w-full">
            <label for="name" className="w-40">
              Fecha de vencimiento
            </label>
            <input
              type="text"
              name="expireDate"
              placeholder="MM/AA"
              className="w-full border-2 p-1 my-4 rounded border-gray-400"
              onChange={handleInputChangePayment}
            />
          </div>

          <div className="flex flex-wrap items-center w-full">
            <label for="name" className="w-40">
              Codigo de seguridad
            </label>
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              className="w-full border-2 p-1 my-4 rounded border-gray-400"
              onChange={handleInputChangePayment}
            />
          </div>

          <div className="flex flex-wrap items-center w-full">
            <input
              type="submit"
              value="Finalizar compra"
              className="w-full border-2 p-1 my-4 rounded text-gray-200 border-gray-400 bg-gray-900"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
