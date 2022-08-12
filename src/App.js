import { Route, Routes } from "react-router-dom";
import Dashboard from "./features/Dashboard/dashboard";
import LoginView from "./features/Login/login_view";
import MenuAdd from "./features/Menu/menu_add";
import MenuList from "./features/Menu/menu_list";
import OrderView from "./features/Order/order_view";
import TableAdd from "./features/Table/table_add";
import TableList from "./features/Table/table_list";
import Navbar from "./shared/component/navbar";
import ProtectedRoute from "./shared/component/ProtectedRoute";
import { AuthProvider } from "./shared/hook/useAuth";

export default function xApp() {
    return (
        <AuthProvider>
            <Routes>
                <Route index element={<LoginView></LoginView>}></Route>
                <Route element={<ProtectedRoute></ProtectedRoute>}>
                    <Route path="main" element={<Navbar></Navbar>}>
                        <Route index element={<Dashboard></Dashboard>}></Route>
                        <Route path="order" element={<OrderView></OrderView>}>
                        </Route>
                        <Route path="menus" element={<MenuList></MenuList>}>
                            <Route path="new" element={<MenuAdd></MenuAdd>}></Route>
                        </Route>
                        <Route path="tables" element={<TableList></TableList>}>
                            <Route path="new" element={<TableAdd></TableAdd>}></Route>
                        </Route>

                    </Route>
                </Route>
                <Route
                    path="*"
                    element={
                        <main style={{padding: "1rem"}}>
                            <p>Oopss... page not found</p>
                        </main>
                    }>

                </Route>
            </Routes>
        </AuthProvider>
    )
}