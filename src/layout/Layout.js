import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

function Layout({ children }) {
  const height = { minHeight: "700px" };
  return (
    <>
      <Header />
      <div style={height}> {children} </div>
      <Footer />
    </>
  );
}

export default Layout;
