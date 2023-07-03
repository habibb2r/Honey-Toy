import { Helmet } from "react-helmet";
import Banner from "./Sections/Banner";
import Category from "./Sections/Category";
import Gallary from "./Sections/Gallary";
import ToyPara from "./Sections/ToyPara";
import Anima from "./Sections/Anima/Anima";


const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>Honey Toy | Home</title>
            </Helmet>
            <Banner></Banner>
            <Anima></Anima>
            <Category></Category>
            <ToyPara></ToyPara>
            <Gallary></Gallary>
            
            
        </div>
    );
};

export default Home;