import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import Specials from "../../Components/Specials/Specials";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Bio from "../../Components/Bio/Bio";

export default function MainComponent() {
  return (
    <>
      <Header />
      <Banner />
      <Specials />
      <Testimonials />
      <Bio />
      <Footer />
    </>
  );
}
