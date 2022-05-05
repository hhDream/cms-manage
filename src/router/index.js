/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2022-03-29 15:30:29
 * @LastEditTime: 2022-03-29 15:38:25
 * @LastEditors: Fenghua Zhang
 */
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from '@/views/login/Login';
import Home from '@/views/home/Home';
import App from '../App';
import Notfound from '../views/404/Notfound';

const BaseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='*' element={<Notfound />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default BaseRouter;