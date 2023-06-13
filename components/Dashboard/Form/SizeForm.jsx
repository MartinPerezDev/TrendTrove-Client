const SizeForm = ({
  handleSize,
  options,
  sizeSelected,
  setSizeSelected,
}) => {
  const handleCheckboxChange = (option) => {
    const newSelected = sizeSelected.includes(option)
      ? sizeSelected.filter((item) => item !== option)
      : [...sizeSelected, option];

    setSizeSelected(newSelected);
    handleSize(newSelected);
  };

  return (
    <>
      <hr />
      <div className="flex flex-col py-3">
        <h2>Talla</h2>
        <div className="flex flex-wrap w-full">
          {options.map((option, key) => (
            <label key={key} className="flex items-center space-x-2 p-3 ml-5">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                checked={sizeSelected.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
      <hr />
    </>
  );
};

export default SizeForm;
