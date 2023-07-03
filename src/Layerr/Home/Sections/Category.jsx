import { useEffect, useState } from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    const [toys, setToys] = useState([]);



    useEffect(() => {
        fetch('https://honey-toy-db.up.railway.app/gallary')
        .then(res => res.json())
        .then(data => setToys(data));
    })

    const danger = toys.filter(toy => toy.subcategory === 'dangerous')
    const good = toys.filter(toy => toy.subcategory === 'good')
    const bird = toys.filter(toy => toy.subcategory === 'bird')
    return (
        <div className='text-center mt-10 bg-[#BF91DF] rounded-xl pt-10'>
            <h2 className='font-bold text-3xl'>Shop By Category</h2>
            <div className="divider w-[50%] mx-auto"></div>
            <div className='tab-cat'>
            <Tabs>
                <TabList>
                <Tab>Deadly</Tab>
                <Tab>Bird</Tab>
                <Tab>Nice</Tab>
                </TabList>

                <TabPanel>
                <div className= "grid md:grid-cols-4 gap-4 py-4 px-10 md:px-3">
                    {
                        danger.map(item => 
                        <div  key={item._id}
                         className="card px-3 bg-base-100 shadow-xl relative text-center">
                            <figure><img className="h-[250px]" src={item.picture} alt="" /></figure>
                            <div className="card-body text-center">
                                <h2 className="card-title ">{item.name}</h2>
                                <div className="card-actions justify-center">
                                    <Link to={`/details/${item._id}`}><button className="btn btn-outline border-[#BF91DF] border-0 border-b-4">View Details</button></Link>
                                
                                </div>
                                <div className="absolute right-7 top-4 bg-black text-white p-2 rounded-xl">
                                    <p>${item.price}</p>
                                </div>
                            </div>
                        </div>)
                    }
             </div>
                </TabPanel>
                <TabPanel>
                <div className= "grid md:grid-cols-4 gap-4 py-4 px-10 md:px-3">
                    {
                        bird.map(item => 
                        <div  key={item._id}
                         className="card px-3 bg-base-100 shadow-xl relative text-center">
                            <figure><img className="h-[250px]" src={item.picture} alt="" /></figure>
                            <div className="card-body text-center">
                                <h2 className="card-title ">{item.name}</h2>
                                <div className="card-actions justify-center">
                                    <Link to={`/details/${item._id}`}><button className="btn btn-outline border-[#BF91DF] border-0 border-b-4">View Details</button></Link>
                                
                                </div>
                                <div className="absolute right-7 top-4 bg-black text-white p-2 rounded-xl">
                                    <p>${item.price}</p>
                                </div>
                            </div>
                        </div>)
                    }
             </div>
                </TabPanel>
                <TabPanel>
                <div className= "grid md:grid-cols-4 gap-4 py-4 px-10 md:px-3">
                    {
                        good.map(item => 
                        <div  key={item._id}
                         className="card px-3 bg-base-100 shadow-xl relative text-center">
                            <figure><img className="h-[250px]" src={item.picture} alt="" /></figure>
                            <div className="card-body text-center">
                                <h2 className="card-title ">{item.name}</h2>
                                <div className="card-actions justify-center">
                                    <Link to={`/details/${item._id}`}><button className="btn btn-outline border-[#BF91DF] border-0 border-b-4">View Details</button></Link>
                                </div>
                                <div className="flex items-center gap-1 absolute right-7 top-4 bg-black text-white p-2 rounded-xl">
                                    <p>{item.rating}</p>
                                    <BsFillStarFill/>
                                </div>
                            </div>
                        </div>)
                    }
             </div>
                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default Category;