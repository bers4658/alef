import { createRouter, createWebHashHistory } from 'vue-router'
import Preview from "../components/Preview"
import Forma from "../components/Forma"

const routes = [
    {
        path: '/preview',
        name: 'Форма',
        component: Preview
    },
    {
        path: '/forma',
        name: 'Превью',
        component: Forma
    },
]

const router = createRouter({ history: createWebHashHistory(), routes })
export default router