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
            <div className="flex flex-col md:flex-row md:justify-end items-center gap-4 md:gap-[30%] mb-4 md:mb-8 px-4">
                <div className="flex gap-4 my-4 md:my-10">
                    <NavLink to="/Login" className="text-base md:text-lg text-[#706F6F]" activeClassName="font-semibold">
                        Home
                    </NavLink>
                    <NavLink to="/Register" className="text-base md:text-lg text-[#706F6F]" activeClassName="font-semibold">
                        About
                    </NavLink>
                </div>
                <div className="flex gap-4 md:gap-5 items-center">
                    <img className="w-[32px] h-[32px] md:w-[41px] md:h-[41px]" src={userImg} alt="User" />
                    <button className="bg-[#403F3F] w-[120px] md:w-[140px] h-[40px] md:h-[44px] text-white font-semibold text-lg md:text-xl">
                        Login
                    </button>
                </div>
            </div>

            <div className="grid-cols-1 lg:grid-cols-3 lg:flex lg:justify-evenly lg:gap-[20px] lg:ml-[-35px]">
                <div className="leading-[35px]">
                    {/* Card 1 */}
                    <h5 className='text-[#403F3F] text-xl font-semibold ml-[80px] my-6 lg:ml-[45px] lg:mt-[0px]'>All Caterogy</h5>
                    <div className="ml-[45px] sm:ml-[-40px] md:ml-[-60px] lg:ml-[-30px] space-y-4 sm:space-y-2">
                        <NavLink to="/Card1">
                            <h4 className="bg-white w-[200px] sm:w-[220px] md:w-[240px] lg:w-[267px] h-[40px] sm:h-[45px] md:h-[50px] rounded-md hover:text-[#403F3F] cursor-pointer hover:bg-[#E7E7E7] text-center flex items-center justify-center transition duration-267 text-sm sm:text-base md:text-lg">
                                <span>Breaking News</span>
                            </h4>
                        </NavLink>
                        
                        <NavLink to="/CardOne">
                            <h4 className="bg-white w-[200px] sm:w-[220px] md:w-[240px] lg:w-[267px] h-[40px] sm:h-[45px] md:h-[50px] rounded-md hover:text-[#403F3F] cursor-pointer hover:bg-[#E7E7E7] text-center flex items-center justify-center transition duration-267 text-sm sm:text-base md:text-lg">
                                <span>Regular News</span>
                            </h4>
                        </NavLink>

                        <NavLink to="/Card1">
                            <h4 className="bg-white w-[200px] sm:w-[220px] md:w-[240px] lg:w-[267px] h-[40px] sm:h-[45px] md:h-[50px] rounded-md hover:text-[#403F3F] cursor-pointer hover:bg-[#E7E7E7] text-center flex items-center justify-center transition duration-267 text-sm sm:text-base md:text-lg">
                                <span>International News</span>
                            </h4>
                        </NavLink>
                        
                        <NavLink to="/sports">
                            <h4 className="bg-white w-[200px] sm:w-[220px] md:w-[240px] lg:w-[267px] h-[40px] sm:h-[45px] md:h-[50px] rounded-md hover:text-[#403F3F] cursor-pointer hover:bg-[#E7E7E7] text-center flex items-center justify-center transition duration-267 text-sm sm:text-base md:text-lg">
                                <span>Sports</span>
                            </h4>
                        </NavLink>
                        
                        <NavLink to="/entertainment">
                            <h4 className="bg-white w-[200px] sm:w-[220px] md:w-[240px] lg:w-[267px] h-[40px] sm:h-[45px] md:h-[50px] rounded-md hover:text-[#403F3F] cursor-pointer hover:bg-[#E7E7E7] text-center flex items-center justify-center transition duration-267 text-sm sm:text-base md:text-lg">
                                <span>Entertainment</span>
                            </h4>
                        </NavLink>
                        
                        <NavLink to="/culture">
                            <h4 className="bg-white w-[200px] sm:w-[220px] md:w-[240px] lg:w-[267px] h-[40px] sm:h-[45px] md:h-[50px] rounded-md hover:text-[#403F3F] cursor-pointer hover:bg-[#E7E7E7] text-center flex items-center justify-center transition duration-267 text-sm sm:text-base md:text-lg">
                                <span>Culture</span>
                            </h4>
                        </NavLink>
                        
                        <NavLink to="/arts">
                            <h4 className="bg-white w-[200px] sm:w-[220px] md:w-[240px] lg:w-[267px] h-[40px] sm:h-[45px] md:h-[50px] rounded-md hover:text-[#403F3F] cursor-pointer hover:bg-[#E7E7E7] text-center flex items-center justify-center transition duration-267 text-sm sm:text-base md:text-lg">
                                <span>Arts</span>
                            </h4>
                        </NavLink>
                        
                        <NavLink to="/all-news">
                            <h4 className="bg-white w-[200px] sm:w-[220px] md:w-[240px] lg:w-[267px] h-[40px] sm:h-[45px] md:h-[50px] rounded-md hover:text-[#403F3F] cursor-pointer hover:bg-[#E7E7E7] text-center flex items-center justify-center transition duration-267 text-sm sm:text-base md:text-lg">
                                <span>All News</span>
                            </h4>
                        </NavLink>
                    </div>


                    <div className="w-[370px] ml-[-27px] lg:ml-[-48px] flex flex-wrap justify-center gap-4">
                        <div className="card w-[550px] h-[306px] mt-6 md:mt-4 lg:w-[300px] lg:h-[340px]">
                            <div>
                                <img className="rounded-md" src={ManImg} alt="Man" />
                            </div>
                            <div className="mt-4">
                                <h2 className="text-[#403F3F] text-xl md:text-xl font-semibold">
                                    Bayern Slams Authorities Over Flight Delay to Club World Cup
                                </h2>
                                <div className="flex justify-around mt-4 text-sm md:text-base">
                                    <p>Sports</p>
                                    <img className="w-[24px] h-[24px]" src={VectorImg} alt="icon" />
                                    <p>Jan 4, 2022</p>
                                </div>
                            </div>
                        </div>

                        <div className="card w-[550px] h-[306px] my-14 lg:my-8 md:my-4 lg:w-[300px] lg:h-[340px]">
                            <div>
                                <img className="rounded-md" src={GroupImg} alt="Man" />
                            </div>
                            <div className="mt-4">
                                <h2 className="text-[#403F3F] text-xl md:text-xl font-semibold">
                                    Bayern Slams Authorities Over Flight Delay to Club World Cup
                                </h2>
                                <div className="flex justify-around mt-4 text-sm md:text-base">
                                    <p>Sports</p>
                                    <img className="w-[24px] h-[24px]" src={VectorImg} alt="icon" />
                                    <p>Jan 4, 2022</p>
                                </div>
                            </div>
                        </div>

                        <div className="card w-[550px] h-[306px] lg:w-[300px] lg:h-[340px]">
                            <div>
                                <img className="rounded-md" src={ManImg} alt="Man" />
                            </div>
                            <div className="mt-4">
                                <h2 className="text-[#403F3F] text-xl md:text-xl font-semibold">
                                    Bayern Slams Authorities Over Flight Delay to Club World Cup
                                </h2>
                                <div className="flex justify-around mt-4 text-sm md:text-base">
                                    <p>Sports</p>
                                    <img className="w-[24px] h-[24px]" src={VectorImg} alt="icon" />
                                    <p>Jan 4, 2022</p>
                                </div>
                            </div>
                        </div>

                        <div className="card w-[550px] h-[306px] mt-14 lg:my-8 md:my-4 lg:w-[300px] lg:h-[340px]">
                            <div>
                                <img className="rounded-md" src={GroupImg} alt="Man" />
                            </div>
                            <div className="mt-4">
                                <h2 className="text-[#403F3F] text-xl md:text-xl font-semibold">
                                    Bayern Slams Authorities Over Flight Delay to Club World Cup
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

            {/* Card number 2 */}
            <div className="mr-6 lg:ml-[85px] flex flex-col items-center gap-6">
                <div className="w-full max-w-[485px]">
                    <h4 className="text-[#403F3F] text-xl font-bold mb-6">Dragon News Home</h4>
                </div>
                
                <div className="card w-[370px] lg:w-[485px] border border-[#E7E7E7]">
                    <div>
                        <div className="w-full h-[60px] bg-[#F3F3F3] rounded-tl-[17px] rounded-tr-[16px] flex justify-between items-center p-3">
                            <div className="flex">
                                <img src={demouser} alt="User" className="w-[40px] h-[40px]" />
                                <div className="pl-4">
                                    <h5>Awlad Hossain</h5>
                                    <p>2022-08-21</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <img className="w-[16px]" src={VectorImg1} alt="Icon1" />
                                <img className="w-[16px]" src={Framelmg} alt="Icon2" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-[#403F3F] p-3 py-4">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h3>
                        <img className="rounded-md w-full p-3" src={thumbnailmg} alt="Thumbnail" />
                        <p className="my-4 leading-[30px] p-3">Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... Read More</p>
                        <div className="mt-[-14px] mb-5 p-3">
                            <NavLink to="/News">
                                <h3 className="text-yellow-500">Read More</h3>
                            </NavLink>
                        </div>
                        <div className="flex justify-between border border-[#E7E7E7] p-3 rounded-bl-[10px] rounded-br-[10px]">
                            <div className="flex items-center gap-1">
                                <img src={Starlmg} alt="Star" />
                                <img src={Starlmg} alt="Star" />
                                <img src={Starlmg} alt="Star" />
                                <img src={Starlmg} alt="Star" />
                                <img src={Starlmg} alt="Star" />
                                <p>4.9</p>
                            </div>
                            <div className="flex items-center">
                                <img className="w-[30px] h-[16px] pr-2" src={eyeslmg} alt="Views Icon" />
                                <p>499</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card w-[370px] lg:w-[500px] mt-4 border border-[#E7E7E7]">
                    <div>
                        <div className="w-full h-[60px] bg-[#F3F3F3] rounded-tl-[17px] rounded-tr-[16px] flex justify-between items-center p-3">
                            <div className="flex">
                                <img src={Ellipselmg} alt="User" className="w-[40px] h-[40px]" />
                                <div className="pl-4">
                                    <h5>Awlad Hossain</h5>
                                    <p>2022-08-21</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <img className="w-[16px]" src={VectorImg1} alt="Icon1" />
                                <img className="w-[16px]" src={Framelmg} alt="Icon2" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-[#403F3F] p-3 py-4">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h3>
                        <img className="rounded-md w-full p-3" src={Rectanglelmg} alt="Thumbnail" />
                        <p className="my-4 leading-[30px] p-3">Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... Read More</p>
                        <div className="mt-[-14px] mb-5 p-3">
                            <NavLink to="/News">
                                <h3 className="text-yellow-500">Read More</h3>
                            </NavLink>
                        </div>
                        <div className="flex justify-between border border-[#E7E7E7] p-3 rounded-bl-[10px] rounded-br-[10px]">
                            <div className="flex items-center gap-1">
                                <img src={Starlmg} alt="Star" />
                                <img src={Starlmg} alt="Star" />
                                <img src={Starlmg} alt="Star" />
                                <img src={Starlmg} alt="Star" />
                                <img src={Starlmg} alt="Star" />
                                <p>4.9</p>
                            </div>
                            <div className="flex items-center">
                                <img className="w-[30px] h-[16px] pr-2" src={eyeslmg} alt="Views Icon" />
                                <p>499</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border border-[#E7E7E7] mt-4 rounded-md w-[370px] lg:w-[500px]">
                    <div className="w-full h-[60px] bg-[#F3F3F3] flex justify-between items-center p-3 rounded-tl-[17px] rounded-tr-[16px]">
                        <div className="flex">
                            <img src={Ellipselmg} alt="User" className="w-[40px] h-[40px]" />
                            <div className="pl-4">
                                <h5>Awlad Hossain</h5>
                                <p>2022-08-21</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <img className="w-[16px]" src={VectorImg1} alt="Icon1" />
                            <img className="w-[16px]" src={Framelmg} alt="Icon2" />
                        </div>
                    </div>
                    <div className="w-full p-3">
                        <h3 className="text-xl font-bold text-[#403F3F] py-4">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h3>
                    </div>
                </div>
            </div>

            {/* card number 3 */}
            <div className="pl-5 md:pl-10 lg:pl-20 flex flex-col items-center lg:items-start">
                <img src={Loginlmg} alt="" className="w-32 lg:w-48" />
                <h4 className="mt-8 mb-4 text-xl font-bold text-[#403F3F]">Find Us On</h4>

                <div className="border border-[#E7E7E7] p-4 rounded-lg w-full max-w-xs bg-white">
                    {/* Facebook Link */}
                    <div className="flex items-center space-x-2 border-b border-[#E7E7E7] pb-2">
                        <div className="w-[30px] h-[30px] bg-[#F3F3F3] rounded-full flex items-center justify-center">
                            <img className="w-[10px] h-[15px]" src={fbimg} alt="Facebook" />
                        </div>
                        <p className="text-[#706F6F] text-[16px] font-medium">Facebook</p>
                    </div>

                    {/* Instagram Link */}
                    <div className="flex items-center space-x-2 my-8 border-b border-[#E7E7E7] pb-2">
                        <div className="w-[30px] h-[30px] bg-[#F3F3F3] rounded-full flex items-center justify-center">
                            <img className="w-[15px] h-[10px]" src={instagram} alt="Instagram" />
                        </div>
                        <p className="text-[#706F6F] text-[16px] font-medium">Instagram</p>
                    </div>

                    {/* Twitter Link */}
                    <div className="flex items-center space-x-2 mt-4 border-b border-[#E7E7E7] pb-2">
                        <div className="w-[30px] h-[30px] bg-[#F3F3F3] rounded-full flex items-center justify-center">
                            <img className="w-[15px] h-[10px]" src={twitterimg} alt="Twitter" />
                        </div>
                        <p className="text-[#706F6F] text-[16px] font-medium">Twitter</p>
                    </div>
                </div>

                <div className="bg-[#F3F3F3] w-[390px] ml-[-38px] lg:ml-[0px] lg:w-[270px] p-[10px] my-6 grid grid-cols-1 gap-4">
                    <img src={swimmingimg} alt="Swimming" className="rounded-lg" />
                    <img src={playgroundimg} alt="Playground" className="rounded-lg" />
                    <img src={classimg} alt="Class" className="rounded-lg" />
                </div>

                <div className="relative mt-10 w-full max-w-md">
                    <img src={bgimg} alt="Background" className="w-full h-auto rounded-md" />

                    {/* Overlay content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white text-center p-4">
                        <h1 className="text-xl md:text-3xl font-bold">Create an Amazing Newspaper</h1>
                        <p className="my-4 text-sm md:text-base">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <button className="w-[150px] h-[54px] bg-[#D72050] hover:bg-[#ac163e] text-white font-semibold rounded-md">
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