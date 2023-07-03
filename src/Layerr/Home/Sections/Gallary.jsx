import { useEffect, useState } from "react";


const Gallary = () => {
    const [toys, setToys] = useState([]);



    useEffect(() => {
        fetch('https://honey-toy-db.up.railway.app/gallary')
        .then(res => res.json())
        .then(data => setToys(data));
    })
    
    return (
       <div className="bg-[#BF91DF] p-4 rounded-2xl mt-3">
        <h1 className="text-center font-semibold text-3xl my-6 underline underline-offset-8 mb-7">Our Toy Gallary</h1>
        
         <div className="grid grid-cols-1 gap-5 sm:grid-cols-5">
            {
                toys.map(toy => <div key={toy._id} className="relative">
                     <img  className="rounded-2xl h-[250px]" src={toy.picture} alt="" />
                     <p className="absolute top-[85%] left-[10%] text-[#9A2BE6] font-bold bg-[#f5f4f598] rounded-[50%] p-1">Price: ${toy.price}</p>
                </div>
                   
                    )
            }
        </div>
       </div>
    );
};

export default Gallary;