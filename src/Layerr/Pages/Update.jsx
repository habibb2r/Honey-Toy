import { useContext } from "react";
import { AuthContext } from "../../Firebase/Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";



const Update = () => {

    const {user} = useContext(AuthContext);

    const handleAddtoy = event => {

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

        fetch('https://honey-toy-db.up.railway.app/mytoy', {
            method: 'POST',
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
            });

            <Navigate to='/mytoy' replace></Navigate>
        })
    }

   
    return (
        <div>
            <Helmet>
                <title>Honey Toy | Add Toy</title>
            </Helmet>
            <div className="text-center my-3">
            <div>
            <form onSubmit={handleAddtoy} className="py-4 flex justify-center flex-col gap-5 items-center bg-[#DBBBE9] sm:mx-[30%] mx-[10%] rounded-2xl">
            <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <span>S.Name</span>
                            <input type="text" name="sname" value={user.displayName? user.displayName : ''} className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <span>Email</span>
                            <input type="text" name="email" value={user.email? user.email : ''} className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Quantity</span>
                            <input type="text" name="quantity" placeholder="" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter Picture URL</span>
                    </label>
                    <label className="input-group">
                        <span>Picture</span>
                        <input type="text" name="picture" placeholder="Enter Picture URL" className="input input-bordered" />
                    </label>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter toy Name</span>
                    </label>
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" name="name" placeholder="Enter a toy name" className="input input-bordered" />
                    </label>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter Price</span>
                    </label>
                    <label className="input-group">
                        <span>Price</span>
                        <input type="text" name="price" placeholder="Enter a Price" className="input input-bordered" />
                    </label>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <span>Rating</span>
                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />
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
                        <input type="text" name="details" placeholder="Enter details" className="input input-bordered" />
                    </label>
                    </div>
                    <div className="mt-3 mb-3">
                        <input className="btn btn-block bg-[#840ABB] hover:bg-[#3B9B9D]" type="submit" value="Add Toy" />                       
                    </div>
            </form>
            </div>
        </div>
        </div>
    );
};

export default Update;