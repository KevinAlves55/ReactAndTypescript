import { BrowserRouter, Routes as Switch, Navigate, Route } from 'react-router-dom';
import { Dashboard, Login } from '../pages';

export const Routes = () => {

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/entar" element={<Login />} />
                <Route path="/pagina-inicial" element={<Dashboard />} />

                <Route path="*" element={<Navigate to="/pagina-inicial" />} />
            </Switch>
        </BrowserRouter>
    );

};