import { NavLink } from 'react-router-dom';
import thumbnailmg from '../../assets/Images/demo-card-thumbnail.png'
import Loginlmg from '../../assets/Images/Home/Login.jpg'
import instagram from '../../assets/Images/instagram.png'
import fbimg from '../../assets/Images/fb.png'
import twitterimg from '../../assets/Images/twitter.png'
import swimmingimg from '../../assets/Images/swimming.png'
import playgroundimg from '../../assets/Images/playground.png'
import classimg from '../../assets/Images/class.png'
import '@fortawesome/fontawesome-free/css/all.min.css';



const componentName = () => {
    return (
        <div className="flex justify-around">
            <div className="">
                <h4 className='text-[#403F3F] text-2xl font-bold mb-3'>Dragon News</h4>
                <img className='w-[780px] h-[410px]' src={thumbnailmg} alt="" />
                <h2 className='text-[#403F3F] text-[25px] font-bold w-[664px] leading-[45px] py-4'>Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
                <p className='text-[#706F6F] w-[790px] h-[330px] text-base leading-[26px]'>Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2. Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2.</p>
                <NavLink to="/">
                    <button className="w-[323px] h-[48px] bg-[#D72050] text-white font-bold flex items-center justify-center">
                        <i className="fas fa-arrow-left mr-2"></i> Go Back
                    </button>
                </NavLink>
            </div>
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
            </div>
        </div>
    );
};

export default componentName;