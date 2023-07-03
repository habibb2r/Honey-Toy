import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Firebase/Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const Mytoy = () => {
    // const mytoy = useLoaderData();
    const {user} =useContext(AuthContext);
    const [toys, setToys] = useState([]);


    const url = `https://honey-toy-db.up.railway.app/mytoy?selleremail=${user.email}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setToys(data));
    }, [])
    console.log(user);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                
                fetch(`https://honey-toy-db.up.railway.app/mytoy/${id}`,{
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0) {
                        const remain = toys.filter(toy=> toy._id !== id);
                        setToys(remain);
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
              
            }
          })
    }

    return (
        <div>
          <Helmet>
                <title>Honey Toy | My Toys</title>
            </Helmet>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            
          </label>
        </th>
        <th>Name</th>
        <th>Seller Info</th>
        <th>Price & rating</th>
        <th>Quantity</th>
        <th>Update</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
        {
            toys.map(toy => <tr key={toy._id} >
                <th>
                  <label>
                  <button onClick={() => handleDelete(toy._id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
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
                      <div className="text-sm opacity-50">{toy.category}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Name : {toy.sellername}
                  <br/>
                  <span className="badge badge-ghost badge-sm">{toy.selleremail}</span>
                </td>
                <td>
                  ${toy.price}
                  <br/>
                  <span className="badge badge-ghost badge-sm">{toy.rating}</span>
                </td>
                
                <td>{toy.quantity}</td>
                <th>
                  <Link to={`/update/${toy._id}`}><button className="btn btn-ghost btn-xs">Update</button></Link>
                </th>
              </tr>)
        }
      
     
      
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default Mytoy;