import { NavLink } from 'react-router-dom';
import userImg from '../../assets/Images/Home/image.png'
import ManImg from '../../assets/Images/Home/img.png'
import VectorImg from '../../assets/Images/Home/Vector (7).png'
import GroupImg from '../../assets/Images/Home/Grou.jpg'
import VectorImg1 from '../../assets/Images/Home/Vector (8).png'
import demouser from '../../assets/Images/demo-user.png'
import thumbnailmg from '../../assets/Images/demo-card-thumbnail.png'
import Framelmg from '../../assets/Images/Home/Frame (5).png'
import Starlmg from '../../assets/Images/Home/Frame (6).png'
import eyeslmg from '../../assets/Images/Home/Vector (9).png'
import Ellipselmg from '../../assets/Images/Home/Ellipse 1.png'
import Rectanglelmg from '../../assets/Images/Home/Rectangle 3979.png'
import Loginlmg from '../../assets/Images/Home/Login.jpg'
import instagram from '../../assets/Images/instagram.png'
import fbimg from '../../assets/Images/fb.png'
import twitterimg from '../../assets/Images/twitter.png'
import swimmingimg from '../../assets/Images/swimming.png'
import playgroundimg from '../../assets/Images/playground.png'
import classimg from '../../assets/Images/class.png'
import bgimg from '../../assets/Images/bg.png'


const News = () => {
    return (
        <div className="">
            <div className="flex justify-end gap-[47%]">
              <div className="flex gap-4">
                <NavLink to="/LoginPage" className="text-lg text-[#706F6F]" activeClassName="font-semibold">
                    Home
                </NavLink>
                <NavLink to="/about" className="text-lg text-[#706F6F]" activeClassName="font-semibold">
                    About
                </NavLink>
            </div>

                <div className="">
                    <img className='w-[41px] h-[41px]' src={userImg} alt="" />
                </div>
            </div>
            <div className="grid-cols-3 flex justify-evenly gap-[60px]">
                <div className="leading-[35px]">
                    {/* Card 1 */}
                    <h5 className='text-[#403F3F] text-xl font-semibold mb-4'>All Caterogy</h5>
                    <div className="ml-[-80px]">
                        <NavLink to="/Card1">
                            <h4 className="bg-white w-[267px] h-[50px] rounded-md hover:text-[#403F3F] cursor-pointer hover:bg-[#E7E7E7] text-center flex items-center justify-center transition duration-267">
                            <span>Breaking News</span>
                            </h4>
                        </NavLink>
                        
                        <NavLink to="/CardOne">
                            <h4 className="bg-white w-[267px] h-[50px] rounded-md hover:text-[#403F3F] cursor-pointer hover:bg-[#E7E7E7] text-center flex items-center justify-center transition duration-267">
                            <span>Regular News</span>
                            </h4>
                        </NavLink>
                        
                        <NavLink to="/Card1">
                            <h4 className="bg-white w-[267px] h-[50px] rounded-md hover:text-[#403F3F] cursor-pointer hover:bg-[#E7E7E7] text-center flex items-center justify-center transition duration-267">
                            <span>International News</span>
                            </h4>
                        </NavLink>
                        
                        <NavLink to="/sports">
                            <h4 className="bg-white w-[267px] h-[50px] rounded-md hover:text-[#403F3F] cursor-pointer hover:bg-[#E7E7E7] text-center flex items-center justify-center transition duration-267">
                            <span>Sports</span>
                            </h4>
                        </NavLink>
                        
                        <NavLink to="/entertainment">
                            <h4 className="bg-white w-[267px] h-[50px] rounded-md hover:text-[#403F3F] cursor-pointer hover:bg-[#E7E7E7] text-center flex items-center justify-center transition duration-267">
                            <span>Entertainment</span>
                            </h4>
                        </NavLink>
                        
                        <NavLink to="/culture">
                            <h4 className="bg-white w-[267px] h-[50px] rounded-md hover:text-[#403F3F] cursor-pointer hover:bg-[#E7E7E7] text-center flex items-center justify-center transition duration-267">
                            <span>Culture</span>
                            </h4>
                        </NavLink>
                        
                        <NavLink to="/arts">
                            <h4 className="bg-white w-[267px] h-[50px] rounded-md hover:text-[#403F3F] cursor-pointer hover:bg-[#E7E7E7] text-center flex items-center justify-center transition duration-267">
                            <span>Arts</span>
                            </h4>
                        </NavLink>
                        
                        <NavLink to="/all-news">
                            <h4 className="bg-white w-[267px] h-[50px] rounded-md hover:text-[#403F3F] cursor-pointer hover:bg-[#E7E7E7] text-center flex items-center justify-center transition duration-267">
                            <span>All News</span>
                            </h4>
                        </NavLink>
                    </div>

        
                    <div className="card w-[267px] h-[306px]">
                        <div>
                            <img className='rounded-md' src={ManImg} alt="Man" />
                        </div>
                        <div className="">
                            <h2 className="text-[#403F3F] text-xl font-semibold">
                                Bayern Slams Authorities Over Flight Delay to Club World Cup                    
                            </h2>
                            <div className="flex justify-around mt-4">
                                <p>Sports</p>
                                <img className='w-[24px] h-[24px]' src={VectorImg} alt="" />
                                <p>Jan 4, 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-[267px] h-[306px]">
                        <div>
                            <img className='rounded-md' src={GroupImg} alt="Man" />
                        </div>
                        <div className="">
                            <h2 className="text-[#403F3F] text-xl font-semibold">
                                Bayern Slams Authorities Over Flight Delay to Club World Cup                    
                            </h2>
                            <div className="flex justify-around mt-4">
                                <p>Sports</p>
                                <img className='w-[24px] h-[24px]' src={VectorImg} alt="" />
                                <p>Jan 4, 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="card w-[267px] h-[306px]">
                        <div>
                            <img className='rounded-md' src={ManImg} alt="Man" />
                        </div>
                        <div className="">
                            <h2 className="text-[#403F3F] text-xl font-semibold">
                                Bayern Slams Authorities Over Flight Delay to Club World Cup                    
                            </h2>
                            <div className="flex justify-around mt-4">
                                <p>Sports</p>
                                <img className='w-[24px] h-[24px]' src={VectorImg} alt="" />
                                <p>Jan 4, 2022</p>
                            </div>
                        </div>
                    </div>
            </div>
            {/* Card number 2 */}
            <div className="">
                <div className="">
                    <h4 className='text-[#403F3F] text-lg font-semibold mb-6'>Dragon News Home</h4>
                </div>
                <div className="card w-[485px]">
                    <div>
                        <div className="w-[485px] h-[60px] bg-[#F3F3F3]">
                            <div className="flex justify-between items-center">
                                <div className="flex">
                                    <img src={demouser} alt="" />
                                    <div className="pl-4">
                                        <h5>Awlad Hossain</h5>
                                        <p>2022-08-21</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex gap-3 pr-3">
                                        <img className='w-[16px] h-[]' src={VectorImg1} alt="" />
                                        <img className='w-[16px]' src={Framelmg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className='text-xl font-bold text-[#403F3F] py-4'>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h3>
                        <img className='rounded-md' src={thumbnailmg} alt="Man" />
                        <p className='my-4'>Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... Read More</p>
                        <div className="mt-[-14px] mb-5">
                            <NavLink to="/News">
                                <h3 className="text-yellow-500">Read More</h3>
                            </NavLink>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex">
                                <img src={Starlmg} alt="" />
                                <img src={Starlmg} alt="" />
                                <img src={Starlmg} alt="" />
                                <img src={Starlmg} alt="" />
                                <img src={Starlmg} alt="" />
                                <p>4.9</p>
                            </div>
                            <div className="flex items-center">
                                <img className='w-[30px] h-[16px] pr-2' src={eyeslmg} alt="" />
                                <p>499</p>
                            </div>    
                        </div>
                    </div>    
                </div>

                <div className="card w-[485px] mt-4">
                    <div>
                        <div className="w-[485px] h-[60px] bg-[#F3F3F3]">
                            <div className="flex justify-between items-center">
                                <div className="flex">
                                    <img src={Ellipselmg} alt="" />
                                    <div className="pl-4">
                                        <h5>Awlad Hossain</h5>
                                        <p>2022-08-21</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex gap-3 pr-3">
                                        <img className='w-[16px] h-[]' src={VectorImg1} alt="" />
                                        <img className='w-[16px]' src={Framelmg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className='text-xl font-bold text-[#403F3F] py-4'>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h3>
                        <img className='rounded-md' src={Rectanglelmg} alt="Man" />
                        <p className='my-4'>Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... Read More</p>
                        <div className="mt-[-14px] mb-5">
                            <NavLink to="/News">
                                <h3 className="text-yellow-500">Read More</h3>
                            </NavLink>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex">
                                <img src={Starlmg} alt="" />
                                <img src={Starlmg} alt="" />
                                <img src={Starlmg} alt="" />
                                <img src={Starlmg} alt="" />
                                <img src={Starlmg} alt="" />
                                <p>4.9</p>
                            </div>
                            <div className="flex items-center">
                                <img className='w-[30px] h-[16px] pr-2' src={eyeslmg} alt="" />
                                <p>499</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[485px] h-[60px] bg-[#F3F3F3] mt-4">
                    <div className="flex justify-between items-center">
                        <div className="flex">
                            <img src={Ellipselmg} alt="" />
                            <div className="pl-4">
                                <h5>Awlad Hossain</h5>
                                <p>2022-08-21</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex gap-3 pr-3">
                                <img className='w-[16px] h-[]' src={VectorImg1} alt="" />
                                <img className='w-[16px]' src={Framelmg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[485px]">
                    <h3 className='text-xl font-bold text-[#403F3F] py-4'>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h3>
                </div>
            </div>



            {/* card number 3 */}

            <div className="pl-20">
                <img src={Loginlmg} alt="" />
                <h4 className='mt-8 text-xl font-semibold text-[#403F3F]'>Find Us On</h4>
                <div className="border border-solid border-[#E7E7E7] p-4 rounded-lg w-full max-w-sm bg-white">
                <div className="flex items-center space-x-2 border-b border-solid border-[#E7E7E7] pb-2 mb-4">
                    <div className="w-[30px] h-[30px] bg-[#F3F3F3] rounded-full flex items-center justify-center border-b border-solid border-[#E7E7E7]">
                    <img className="w-4 h-4" src={fbimg} alt="Facebook" />
                    </div>
                    <p className="text-gray-700 font-medium">Facebook</p>
                </div>
                
                <div className="flex items-center space-x-2 border-b border-solid border-[#E7E7E7] pb-2 mb-4">
                    <div className="w-[30px] h-[30px] bg-[#F3F3F3] rounded-full flex items-center justify-center border-b border-solid border-[#E7E7E7]">
                    <img className="w-4 h-4" src={instagram} alt="Instagram" />
                    </div>
                    <p className="text-gray-700 font-medium">Instagram</p>
                </div>
                
                <div className="flex items-center space-x-2 border-b border-solid border-[#E7E7E7] pb-2 mb-4">
                    <div className="w-[30px] h-[30px] bg-[#F3F3F3] rounded-full flex items-center justify-center border-b border-solid border-[#E7E7E7]">
                    <img className="w-4 h-4" src={twitterimg} alt="Twitter" />
                    </div>
                    <p className="text-gray-700 font-medium">Twitter</p>
                </div>
            </div>
            <div className="">
                <div className="">
                    <div className="">
                        <img src={swimmingimg} alt="" />
                    </div>
                    <div className="">
                        <img src={playgroundimg} alt="" />
                    </div>
                    <div className="">
                        <img src={classimg} alt="" />
                    </div>
                </div>
            </div>
            <div className="relative">
                <img src={bgimg} alt="Background" className="w-full h-auto" />
                
                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white text-center p-4">
                    <h1 className="text-3xl font-bold text-white">Create an Amazing Newspaper</h1>
                    <p className="my-4 text-sm md:text-base">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className="w-[150px] h-[64px] bg-[#D72050] hover:bg-blue-600 text-white font-semibold rounded-md">
                        Learn More
                    </button>
                </div>
            </div>

            </div>
            </div>
        </div>
    );
};

export default News;