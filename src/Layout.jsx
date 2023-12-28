import { Outlet } from "react-router";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Header from "./header";


export default function Layout() {
  return (
    <div>
        <Header title="CIGNO"/>
        <Navigation/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
