import { NavLink, Outlet, useNavigate, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Spinner from "../Spinner/Spinner";


const MainLayout = () => {



    return (
        <div>
            <section className="flex justify-between px-10 shadow-md py-7 ">
                <div>
                    <h1 className="text-2xl font-bold">Amajhon</h1>
                </div>
                <nav>
                    <ul className="flex gap-5 ">
                        <NavLink to='/' className={({isActive,isPending})=>
                            isPending? 'pending': isActive ? 'bg-emerald-300':''}>
                            Home
                        </NavLink>
                        
                        <NavLink to='/products' 
                            className={({isActive,isPending}) =>
                                isPending ? 'pending' : isActive ? 'bg-emerald-300' : ''
                            }>
                            Product
                        </NavLink>

                        <NavLink to='/dashboard'
                            className={({isActive, isPending}) =>
                                isPending ? 'pending' : isActive ? 'bg-emerald-200' : ''
                            }>
                                Dashboard
                        </NavLink>
                    </ul>
                </nav>

            </section>

            
        <div className="my-10">
            <Outlet></Outlet>

        </div>


        <Footer></Footer>


        </div>
    );
};

export default MainLayout;