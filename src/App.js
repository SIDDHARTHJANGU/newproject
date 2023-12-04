import "./App.css";
import Creating from "./Components/Creating";
import { Discover } from "./Components/Discover";
import Gallery from "./Components/Gallery";
import { Interior } from "./Components/Interior";
import Myfooter from "./Components/Myfooter";
import { Myheader } from "./Components/Myheader";
import Newsletter from "./Components/Newsletter";
import SatisfiedClient from "./Components/SatisfiedClient";
import WelcomeToRP from "./Components/WelcomeToRP";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BackToTop from "./Components/BackToTop";
// import { Preloader } from "./Components/Preloader";

function App() {
  return (
    <div className=" overflow-hidden">
      {/* <Preloader /> */}
      <BackToTop />
      <Myheader />
      <WelcomeToRP />
      <Interior />
      <Gallery />
      <SatisfiedClient />
      <Discover />
      <Creating />
      <Newsletter />
      <Myfooter />
    </div>
  );
}

export default App;
