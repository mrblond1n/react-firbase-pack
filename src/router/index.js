import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';


export const pages = [
    {component: Home, path: '/', label: 'Главная', isEmpty: false, protect: true},
    {component: SignIn, path: '/sign_in', label: 'Вход', isEmpty: true},
    {component: SignUp, path: '/sign_up', label: 'Регистрация', isEmpty: true},
];
