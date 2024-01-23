import MainLayout from "./layout/MainLayout";
import ProtectedRoutes from "./layout/ProtectedRoutes";

const App = () => {
  return (
    <>
      <ProtectedRoutes>
        <MainLayout />
      </ProtectedRoutes>
    </>
  );
};

export default App;
