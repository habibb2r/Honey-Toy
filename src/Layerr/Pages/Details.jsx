import { Helmet } from "react-helmet";

import { useLoaderData } from "react-router-dom";


const Details = () => {
    const toy = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Honey Toy | Toy Details</title>
            </Helmet>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row py-4">
                    <img src={toy.picture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-5xl font-bold">{toy.name}</h1>
                    <p className="py-6">{toy.details}.</p>
                    <p className="py-2">Price:  ${toy.price}.</p>
                    <p className="py-2">Rating: {toy.rating}</p>
                    
                    
                    <button className="btn btn-primary py-4">Buy</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Details;