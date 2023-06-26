import RoutesAdmin from "../RoutesAdmin";
import ProductForm from "./Form/ProductForm";

const DashboardController = () => {
  return (
    <RoutesAdmin>
      <div className="p-2">
        <h1>Dashboard</h1>
        <div title="options-list" className="flex py-5">
          <div className="border-2 border-gray-700 rounded-sm px-4 py-2 mr-4">usuarios</div>
          <div className="border-2 border-gray-700 rounded-sm px-4 py-2 mr-4">productos</div>
        </div>
        <ProductForm />
      </div>
    </RoutesAdmin>
  );
};

export default DashboardController;
