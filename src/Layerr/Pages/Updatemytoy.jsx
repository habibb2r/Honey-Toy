import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Firebase/Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const Updatemytoy = () => {
    const uptoy = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(user);


    const handleUpdateToy = event => {

        event.preventDefault();
        const form = event.target;
        const sellername =  form.sname.value;
        const selleremail = form.email.value;
        const name = form.name.value;
        const price = form.price.value;
        const picture = form.picture.value;
        const details = form.details.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const e = document.getElementById('select');
        const category = e.value;
        const toy = {name, price, picture, details, rating, quantity, category, sellername, selleremail}
        console.log(toy);

        fetch(`https://honey-toy-db.up.railway.app/mytoy/${uptoy._id}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(data => {
            form.reset();
            console.log(data);


            let timerInterval
            Swal.fire({
            title: 'Wait Few Seconds',
            html: 'Progressing... <b></b>',
            timer: 1500,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
            }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('Progressed')
            }
            })
        })
    }



    return (
        <div>
            <Helmet>
                <title>Honey Toy | Update</title>
            </Helmet>
            <div className="text-center my-3">
            <div>
            <form onSubmit={handleUpdateToy}  className="py-4 flex justify-center flex-col gap-5 items-center bg-[#DBBBE9] sm:mx-[30%] mx-[10%] rounded-2xl">
            <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <span>S.Name</span>
                            <input type="text" name="sname" value={uptoy.sellername? uptoy.sellername : ''} className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <span>Email</span>
                            <input type="text" name="email" value={uptoy.selleremail? uptoy.selleremail : ''} className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Quantity</span>
                            <input type="text" name="quantity" placeholder={uptoy.quantity} className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter Picture URL</span>
                    </label>
                    <label className="input-group">
                        <span>Picture</span>
                        <input type="text" name="picture" placeholder={uptoy.picture} className="input input-bordered" />
                    </label>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter toy Name</span>
                    </label>
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" name="name" placeholder={uptoy.name} className="input input-bordered" />
                    </label>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter Price</span>
                    </label>
                    <label className="input-group">
                        <span>Price</span>
                        <input type="text" name="price" placeholder={uptoy.price} className="input input-bordered" />
                    </label>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <span>Rating</span>
                        <input type="text" name="rating" placeholder={uptoy.rating} className="input input-bordered" />
                    </label>
                    </div>
                    <div className="form-control">
                    <select id="select" className="select w-full max-w-xs">
                        <option disabled selected value='random'>Pick a category</option>
                        <option value='dangerous'>dangerous</option>
                        <option value='good'>good</option>
                        <option value='bird'>bird</option>
                        <option value='dianosour'>dianosour</option>
                    </select>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter toy details</span>
                    </label>
                    <label className="input-group">
                        <span>Details</span>
                        <input type="text" name="details" placeholder={uptoy.details} className="input input-bordered" />
                    </label>
                    </div>
                    <div className="mt-3 mb-3">
                        <input className="btn btn-block bg-[#840ABB] hover:bg-[#3B9B9D]" type="submit" value="Update Toy" />                       
                    </div>
            </form>
            </div>
        </div>
        </div>
    );
};

export default Updatemytoy;