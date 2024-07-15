
import {AiFillDashboard, AiOutlineUser} from 'react-icons/ai'
const routes = [
    {
        label:'Dashboard',
        link:'/Adminpanel',
        icon: <AiFillDashboard size={22}/>
    },
    {
        label:'Handle Products',
        link:'/ProductForm',
        icon:<AiOutlineUser size={22}/>
    },
    {
        label:'All Products',
        link:'/ProductList',
        icon:<AiOutlineUser size={22}/>
    }
]

export default routes