// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardView from './features/dashboard_view';
import Login from './shared/component/login_view';

function App() {
  return (
    <>
      {/* <Login/> */}
      <DashboardView/>
    </>
  );
}

export default App;
