import { Button } from "antd";
import Jumbotron from "../../components/cards/Jumbotron";
import AdminMenu from "../../components/nav/AdminMenu";
import { useAuth } from "../../context/auth";

function UserDashboard() {
  // context
  const [auth, setAuth] = useAuth();

  return (
    <>
      <Jumbotron title={`Hello, ${auth?.user?.firstName}`} subtitle="Admin Dashboard" />

      <div className="my-5">
        <Button type="primary">Ant Button</Button>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="p-3 mt-2 mb-2 h4 bg-light">Admin Information</div>

            <ul className="list-group">
              <li className="list-group-item">{auth?.user?.name}</li>
              <li className="list-group-item">{auth?.user?.email}</li>
              <li className="list-group-item">Admin</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
