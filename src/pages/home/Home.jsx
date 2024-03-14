import { Hero, About, Features, Rooms, Testimonial, Contact, } from "../../containers";
function Home()
{
    return(
        <div className="App">
             <Hero/>
             <About/>
             <Features/>
             <Rooms/>
             <Testimonial/>
             <Contact/>
          
        </div>
    );

}
export default Home;


