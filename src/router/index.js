/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2022-03-29 15:30:29
 * @LastEditTime: 2022-03-29 15:38:25
 * @LastEditors: Fenghua Zhang
 */
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Login from '../views/login/Login';

const BaseRouter = ()=>(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />}></Route>
        </Routes>
    </BrowserRouter>
)

export default BaseRouter;