import Hero from "../../container/hero/Hero.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Contact from "../../container/contact/Contact.jsx"
import  Testimonial from "../../container/testimonial/Testimonial.jsx";
function Home()
{
    return(
        <div className="App">
             <Hero/>
             <Testimonial/>
             <Contact/>
             <Footer/>
          
        </div>
    );

}
export default Home;


