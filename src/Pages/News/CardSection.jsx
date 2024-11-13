import VectorImg from '../../assets/Images/Home/Vector (7).png'

const Card = () => {
    return (
        <div className="flex">
            <div className="card w-[267px] h-[306px]">
                <div className='w-[367px] h-[160px] bg-[#D9D9D9]'></div>
                <div className="">
                    <h2 className="text-[#403F3F] text-xl my-3 font-semibold w-[248px] h-[90px]">
                        21 The Most Stylish Wedding Guest Dresses For Spring                    
                    </h2>
                    <div className="flex gap-2">
                        <img className='w-[24px] h-[24px]' src={VectorImg} alt="" />
                        <p>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
            <div className="card w-[267px] h-[306px] mx-28">
                <div className='w-[367px] h-[160px] bg-[#D9D9D9]'></div>
                <div className="">
                    <h2 className="text-[#403F3F] text-xl my-3 font-semibold w-[248px] h-[90px]">
                        21 The Most Stylish Wedding Guest Dresses For Spring                    
                    </h2>
                    <div className="flex gap-2">
                        <img className='w-[24px] h-[24px]' src={VectorImg} alt="" />
                        <p>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
            <div className="card w-[267px] h-[306px]">
                <div className='w-[367px] h-[160px] bg-[#D9D9D9]'></div>
                <div className="">
                    <h2 className="text-[#403F3F] text-xl my-3 font-semibold w-[248px] h-[90px]">
                        21 The Most Stylish Wedding Guest Dresses For Spring                    
                    </h2>
                    <div className="flex gap-2">
                        <img className='w-[24px] h-[24px]' src={VectorImg} alt="" />
                        <p>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;