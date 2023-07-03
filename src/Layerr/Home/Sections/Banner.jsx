import { TypeAnimation } from "react-type-animation";


const Banner = () => {
    return (
        <div className="">
            <div className="relative rounded-2xl">
                
                <img src="https://i.ibb.co/bdy16FY/Banner.jpg" className="mx-auto rounded-2xl w-full h-[500px]" alt="" />
                <div className="h-[500px] rounded-2xl absolute flex  justify-center align-middle transform  left-0 right-0 bottom-0 bg-gradient-to-r from-[#65008dd6] to-[#c2076e50] hover:bg-[#61287f8a]">
                    <div className="mt-[22%] sm:mt-[10%]">
                        <h1 className="rounded-2xl text-white text-3xl font-semibold text-center">Welcome to Honey Toys</h1>
                        <h1 className="text-xl sm:text-3xl font-semibold text-white p-6 sm:p-5">
                        <TypeAnimation
                            sequence={[
                                'Find everything for Baby', 
                                2000, 
                                `The magic place  of Fun and Games`, 
                                2000, 
                                () => {
                                console.log('Sequence completed');
                                }
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1.5em', display: 'inline-block' }}
                            />
                        </h1>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;