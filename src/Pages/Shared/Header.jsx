import HeaderImg from '../../assets/Images/Home/The Dragon News.png';

const Header = () => {
    return (
      <div className="">
        <div className="flex justify-center">
            <div className="w-[470px] text-center mt-10">
              <img src={HeaderImg} alt="" />
              <p className='text-lg text-[#706F6F] my-4'> Journalism Without Fear or Favour</p>
              <h5>Sunday, November 27, 2022</h5>
            </div>
        </div>
      </div>
    );
};

export default Header;