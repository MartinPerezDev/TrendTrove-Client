import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ClipLoader
        color={"#0e747d"}
        loading={true}
        size={50}
        className="-mt-60"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
