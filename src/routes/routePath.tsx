import { Link } from "react-router-dom";
import Icon from "@/components/ui/Icons";

export const routePath = [
    {
        index: true,
        path: '',
        icon: 'fas fa-home',
        title: 'Trang chủ',
        component: <Home />
    },
    {
        index: false,
        path: 'about',
        icon: 'fas fa-info-circle',
        title: 'Thông tin',
        component: <About />
    },
    {
        index: false,
        path: 'dashboard',
        icon: 'fas fa-tachometer-alt',
        title: 'Quản lí danh mục',
        component: <Dashboard />
    },
    {
        index: false,
        path: '*',
        component: <NoMatch />
    }
];

function Home() {
    return (
        <div>
            <h2>Home</h2>
           <Icon iconName="backpack" size="lg" color="success" />

        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}