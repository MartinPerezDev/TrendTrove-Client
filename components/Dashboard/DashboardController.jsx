import RoutesAdmin from "../RoutesAdmin";
import ProductForm from "./Form/ProductForm";

const DashboardController = () => {
  return (
    <RoutesAdmin>
      <div className="p-2">
        <h1>Dashboard</h1>
        
        {/* <ProductForm /> */}
      </div>
    </RoutesAdmin>
  );
};

export default DashboardController;
