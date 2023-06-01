import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/pages/LoginPage";
import ProductsPage from "@/pages/ProductsPage";
import AboutUsPage from "@/pages/AboutUs";


const routes = [
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/',
        component: AboutUsPage
    },
    {
        path: '/products',
        component: ProductsPage
    },
]

const router = createRouter(
    {
        routes,
        history: createWebHistory(process.env.BASE_URL)
    }
)

export default router;