import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

const Layout = ({ children }) => {
    return (
        <>
        <Navbar />
        <Footer />
        <main>{children}</main>
        </>
    )
}

export default Layout