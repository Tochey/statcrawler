import Navbar from "./navbar/navbar";
// import Footer from "./footer/footer";

const Layout = ({ children }) => {
    return (
        <>
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
        </>
    )
}

export default Layout