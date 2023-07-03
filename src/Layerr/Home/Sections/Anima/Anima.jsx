import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Anima = () => {
  const [toys, setToys] = useState([]);



    useEffect(() => {
        fetch('https://honey-toy-db.up.railway.app/gallary')
        .then(res => res.json())
        .then(data => setToys(data));
    })
    return (
        <div className="bg-[#BF91DF] rounded-xl py-3 my-5 pb-4">
          <div>
            <h1 className="text-center text-3xl font-bold my-5 py-5">Our Toy Collections</h1>
            <div className="divider w-[50%] mx-auto"></div>
          </div>
           <Marquee speed={100} direction="left">
              
                 {
                  toys.map(toy => <div key={toy._id} className="relative">
                       <img  className=" h-[220px]" src={toy.picture} alt="" />
                       <p className="absolute top-[85%] left-[10%] text-[#9A2BE6] font-bold bg-[#f5f4f598] rounded-[50%] p-1">{toy.name}</p>
                  </div>
                     
                      )
              }
              
           </Marquee>
           <Marquee speed={60} direction="left">
              
                 {
                  toys.map(toy => <div key={toy._id} className="relative">
                       <img  className=" h-[270px]" src={toy.picture} alt="" />
                       <p className="absolute top-[85%] left-[10%] text-[#9A2BE6] font-bold bg-[#f5f4f598] rounded-[50%] p-1">{toy.name}</p>
                  </div>
                     
                      )
              }
              
           </Marquee>
           <Marquee speed={90} direction="left">
              
                 {
                  toys.map(toy => <div key={toy._id} className="relative">
                       <img  className=" h-[220px]" src={toy.picture} alt="" />
                       <p className="absolute top-[85%] left-[10%] text-[#9A2BE6] font-bold bg-[#f5f4f598] rounded-[50%] p-1">{toy.name}</p>
                  </div>
                     
                      )
              }
              
           </Marquee>
        </div>
    );
};

export default Anima;