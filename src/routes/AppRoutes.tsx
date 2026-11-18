import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import CreateEnterprise from "../feature/enterprise/createEnterprise/pages/CreateEnterprisePage";

export default function AppRoutes() {
    return(
        <Routes>

            <Route element={<MainLayout />}>
                <Route path="/enterprise/create" element={<CreateEnterprise />}/>
            </Route>

        </Routes>

    );
}