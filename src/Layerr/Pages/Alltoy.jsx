import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {BsFillStarFill} from 'react-icons/bs'


const Alltoy = () => {
    // const alltoy = useLoaderData();
    const [toys, setToys] = useState([]);
    const [asc, setAsc] = useState(true);
    const searchRef = useRef(null);
    const  [search , setSearch] = useState(' ');


    useEffect(() => {
        fetch(`https://honey-toy-db.up.railway.app/alltoy?sort=${asc ? 'asc' : 'desc'}&search=${search}`)
        .then(res => res.json())
        .then(data => setToys(data));
    }, [asc,search])

    const handleSearch = () =>{
      setSearch(searchRef.current.value);
    }
    
    return (
        <div>
          <Helmet>
                
                <title>Honey Toy | All Ttoys</title>
                
            </Helmet>
          <div className="flex justify-between align-middle">
          <div className="form-control my-5">
            <div className="input-group">
              <input type="text" ref={searchRef} placeholder="Search Toy Name" className="input input-bordered font-semibold" />
              <button onClick={handleSearch} className="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <p className="font-semibold text-lg">Sort By :</p>
          <button onClick={()=>setAsc(!asc)} className="btn bg-[#BF91DF] my-5">{asc ? 'Price: High to Low' : 'Price: Low to High'}</button>
          </div>
          </div>
            
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            #
          </label>
        </th>
        <th>Name</th>
        <th>Price & rating</th>
        <th>Quantity</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {/* <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr> */}
      
        {
            toys.map((toy, index) => <tr key={toy._id}>
                <th>
                  <label>
                  {index +1}
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={toy.picture} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{toy.name}</div>
                      <div className="text-sm opacity-50">{toy.subcategory}</div>
                    </div>
                  </div>
                </td>
                <td>
                  ${toy.price}
                  <br/>
                  
                  <span className="badge badge-ghost badge-sm">  {toy.rating}  <BsFillStarFill/> </span>
                </td>
                <td>{toy.quantity}</td>
                <th>
                  <Link to={`/details/${toy._id}`}><button className="btn btn-outline btn-info btn-xs">Details</button></Link>
                </th>
              </tr>)
        }
      
     
      
    </tbody>
    
    
  </table>
</div>
            
        </div>
    );
};

export default Alltoy;