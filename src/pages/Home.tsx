import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Logo from '../assets/imgs/logo.png'
import FirstImg from '../assets/imgs/Thumbnail.png'
import SecondImg from '../assets/imgs/Thumbnail-Image.png'
import ThirdImg from '../assets/imgs/Thumb.png'
import FourthImg from '../assets/imgs/purple.png'
import FifthImg from '../assets/imgs/person.png'
import SixthImg from '../assets/imgs/star.png'
import Courses from '../components/Courses'
import Rhone from '../assets/imgs/Rhone.png'
import Big from '../assets/imgs/Big.png'
import Man from '../assets/imgs/man.png'
import Guy from '../assets/imgs/guy.png'
import Laptop from '../assets/imgs/laptop.png'
import Purple from '../assets/imgs/purple.png'
import twitter from '../assets/imgs/twitter.png'
import facebook from '../assets/imgs/facebook.png'
import union from '../assets/imgs/Union.png'

const Home = () => {

    const [NavbarBg, setNavbarBg] = useState(false);

    useEffect(() => {
        const changeNavbarBg = () => {
            if (window.scrollY >= 30) {  // Check if scroll passed the hero section
                setNavbarBg(true);
            } else {
                setNavbarBg(false);
            }
        };

        window.addEventListener('scroll', changeNavbarBg);

        return () => {
            window.removeEventListener('scroll', changeNavbarBg); // Clean up
        };
    }, []);

    return (
        <>
            <section className='h-screen bg-hero-Bg bg-cover font-[poppins] w-full'>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <NavBar bg={NavbarBg ? 'bg-[#1B1B1B]' : 'bg-transparent'} />
                <div className='relative flex flex-col items-center justify-center h-screen font-[poppins]'>
                    <h1 className='text-white text-center text-[40px] font-[1000] font-[poppins]'>Learn something new everyday.</h1>
                    <p className='text-white pt-[5px]'>Become professionals and ready to join the world</p>
                </div>

                {/* <div className='relative flex justify-center w-full mt-10 '>
                    <div className='absolute top-[-120px] mx-auto p-[40px] bg-[#ffffff] w-[1200px] justify-center rounded-[23px] flex flex-col align-middle shadow-lg shadow-[#cfcece] '>
                        <h2>What do you want to learn?</h2>
                        <form className='pt-[20px]'>
                            <div className='grid grid-cols-4 gap-[15px]'>
                                <input type="text" name="" id="" placeholder='Find courses, skills, software, etc' className='bg-[#F9F9F9] p-[10px]' />
                                <input type="text" name="" id="" placeholder='Categories' className='bg-[#F9F9F9] p-[10px]' />
                                <input type="text" name="" id="" placeholder='Topic' className='bg-[#F9F9F9] p-[10px]' />
                                <button className='p-[10px] bg-[#3DCBB1] rounded-[30px] w-[179px]'>Search</button>
                            </div>
                        </form>
                    </div>
                </div> */}

                <div className='relative flex justify-center w-full mt-10 '>
                    <div className='absolute top-[-120px] mx-auto p-[20px] sm:p-[30px] md:p-[40px] bg-[#ffffff] w-full max-w-[1200px] justify-center rounded-[23px] flex flex-col align-middle shadow-lg shadow-[#cfcece]'>
                        <h2 className='text-center text-lg sm:text-xl md:text-2xl'>What do you want to learn?</h2>
                        <form className='pt-[20px]'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[10px] md:gap-[15px]'>
                                <input type="text" name="" id="" placeholder='Find courses, skills, software, etc' className='bg-[#F9F9F9] p-[10px] w-full rounded-[5px]' />
                                <input type="text" name="" id="" placeholder='Categories' className='bg-[#F9F9F9] p-[10px] w-full rounded-[5px]' />
                                <input type="text" name="" id="" placeholder='Topic' className='bg-[#F9F9F9] p-[10px] w-full rounded-[5px]' />
                                <button className='p-[10px] bg-[#3DCBB1] rounded-[30px] w-full md:w-[179px]'>Search</button>
                            </div>
                        </form>
                    </div>
                </div>



            </section>

            <section className='lg:mt-[150px] mt-[250px] font-[poppins] lg:w-[1200px] mx-auto gap-[20px]'>
                <h1 className='font-[poppins] font-[1000] text-[25px] text-center'>Browse Our Top Courses</h1>
                <div className='text-center flex justify-center mt-[10px] '>
                    <ul className='flex overflow-auto text-center space-x-8'>
                        <li>Design</li>
                        <li>Developer</li>
                        <li>Business</li>
                        <li>Marketing</li>
                        <li>Photography</li>
                    </ul>
                </div>

                <div className='flex flex-wrap justify-center items-center gap-[20px] pt-[20px] mx-auto'>
                    <Courses
                        imgSrc={FirstImg}
                        userIcon={FifthImg}
                        starIcon={SixthImg}
                        CourseName="Adobe Illustrator Scretch Course"
                        StudioName="Kitani Studio"
                        rating="(1.2k)"
                        originalPrice="29.99"
                        formerPrice="39.99"
                    />

                    <Courses
                        imgSrc={SecondImg}
                        userIcon={FifthImg}
                        starIcon={SixthImg}
                        CourseName="Adobe Illustrator Scretch Course"
                        StudioName="Kitani Studio"
                        rating="(1.2k)"
                        originalPrice="29.99"
                        formerPrice="39.99"
                    />

                    <Courses
                        imgSrc={ThirdImg}
                        userIcon={FifthImg}
                        starIcon={SixthImg}
                        CourseName="Adobe Illustrator Scretch Course"
                        StudioName="Kitani Studio"
                        rating="(1.2k)"
                        originalPrice="29.99"
                        formerPrice="39.99"
                    />

                    <Courses
                        imgSrc={FourthImg}
                        userIcon={FifthImg}
                        starIcon={SixthImg}
                        CourseName="Adobe Illustrator Scretch Course"
                        StudioName="Kitani Studio"
                        rating="(1.2k)"
                        originalPrice="29.99"
                        formerPrice="39.99"
                    />
                </div>
            </section>

            <section className='bg-[#1B283F] p-[20px] md:p-[60px] max-w-full md:max-w-[1200px] mx-auto mt-[40px] rounded-[10px]'>
                <h1 className='text-white text-[18px] md:text-[20px] font-[500]'>Join Klevr now to get 35% off</h1>
                <p className='w-full md:w-full text-[16px] md:text-[20px] pt-[10px] text-white font-[100]'>
                    With our responsive themes and mobile and desktop apps, enjoy a seamless experience on any device so will your blog the best visitors.
                </p>
                <div className='flex justify-start mt-[10px]'>
                    <button className='p-[10px] bg-[#3DCBB1] text-[#ffff] w-[100px] md:w-[109px]'>Join Klevr</button>
                </div>
            </section>


            <div className='lg:relative hidden'>
                <img src={Rhone} alt='' className='absolute top-[-280px] left-[867px] h-[280px]' />
            </div>

            <section className='mt-[20px]  lg:p-[60px]'>
                <h1 className='font-[poppins] font-[1000] text-[20px] md:text-[25px] text-center'>
                    Trending Courses
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[20px] mt-[30px]'>
                    <div className='relative'>
                        <div className='h-[400px] md:h-[500px] lg:h-[631px] p-[20px] bg-grid-bg bg-no-repeat bg-cover bg-center rounded-[20px] lg:rounded-[30px] w-full'>
                            <div className='text-white absolute bottom-[20px] md:bottom-[30px] lg:bottom-[50px] left-[20px] w-full lg:w-[526px]'>
                                <label className='text-[#F9F9F9]'>Ana Kursova</label>
                                <p className='text-[20px] md:text-[25px] lg:text-[30px] font-[500]'>
                                    Masterclass in Design Thinking, Innovation & Creativity
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 xl:grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 lg:w-full items-center justify-center md:gap-[10px] lg:gap-[20px]'>
                        <Courses
                            imgSrc={ThirdImg}
                            userIcon={FifthImg}
                            starIcon={SixthImg}
                            CourseName="Adobe Illustrator Scratch Course"
                            StudioName="Kitani Studio"
                            courseDetails='More than 8yr Experience as Illustrator. Learn how to becoming a professional Illustrator Now...'
                            rating="(1.2k)"
                            originalPrice="29.99"
                            formerPrice="39.99"
                        />

                        <Courses
                            imgSrc={FourthImg}
                            userIcon={FifthImg}
                            starIcon={SixthImg}
                            CourseName="Adobe Illustrator Scratch Course"
                            StudioName="Kitani Studio"
                            courseDetails='More than 8yr Experience as Illustrator. Learn how to becoming a professional Illustrator Now...'
                            rating="(1.2k)"
                            originalPrice="29.99"
                            formerPrice="39.99"
                        />

                        <Courses
                            imgSrc={FourthImg}
                            userIcon={FifthImg}
                            starIcon={SixthImg}
                            CourseName="Adobe Illustrator Scratch Course"
                            StudioName="Kitani Studio"
                            courseDetails='More than 8yr Experience as Illustrator. Learn how to becoming a professional Illustrator Now...'
                            rating="(1.2k)"
                            originalPrice="29.99"
                            formerPrice="39.99"
                        />

                        <Courses
                            imgSrc={FourthImg}
                            userIcon={FifthImg}
                            starIcon={SixthImg}
                            CourseName="Adobe Illustrator Scratch Course"
                            StudioName="Kitani Studio"
                            courseDetails='More than 8yr Experience as Illustrator. Learn how to becoming a professional Illustrator Now...'
                            rating="(1.2k)"
                            originalPrice="29.99"
                            formerPrice="39.99"
                        />
                    </div>
                </div>
            </section>



            <section className='p-[60px]'>
                <h1 className='font-[1000] text-[20px] text-center'>Upcoming Webinar</h1>

                <div className='mt-[30px] grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2'>
                    <Courses
                        imgSrc={Man}
                        userIcon={FifthImg}
                        starIcon={SixthImg}
                        CourseName="Adobe Illustrator Scretch Course"
                        StudioName="Kitani Studio"
                        courseDetails='More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...'
                        originalPrice="29.99"
                        formerPrice="39.99"
                    />

                    <Courses
                        imgSrc={Laptop}
                        userIcon={FifthImg}
                        starIcon={SixthImg}
                        CourseName="Adobe Illustrator Scretch Course"
                        StudioName="Kitani Studio"
                        courseDetails='More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...'
                        originalPrice="29.99"
                        formerPrice="39.99"
                    />

                    <Courses
                        imgSrc={Purple}
                        userIcon={FifthImg}
                        starIcon={SixthImg}
                        CourseName="Adobe Illustrator Scretch Course"
                        StudioName="Kitani Studio"
                        courseDetails='More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...'
                        originalPrice="29.99"
                        formerPrice="39.99"
                    />

                    <Courses
                        imgSrc={Guy}
                        userIcon={FifthImg}
                        starIcon={SixthImg}
                        CourseName="Adobe Illustrator Scretch Course"
                        StudioName="Kitani Studio"
                        courseDetails='More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...'
                        originalPrice="29.99"
                        formerPrice="39.99"
                    />
                </div>

            </section>


            <section className='bg-[#FFEC8A] p-[40px] text-center font-[poppins]'>
                <h1 className='font-[1000]'>Get personal learning recommendations based on your needs</h1>
                <div className='pt-[20px]'>
                    <button className='bg-[#ffec8a] p-[10px] border border-[#3d3d3d] rounded-[20px]'>Get Started</button>
                </div>
            </section>

            <footer className='p-[40px] bg-[#1B1B1B] font-[poppins]'>
                <div className='grid grid-cols-4'>
                    <div>
                        <img src={Logo} alt="" />
                    </div>

                    <div className='p-[10px]'>
                        <ul className='text-white'>
                            <li>Web Programming</li>
                            <li>Mobile Programming</li>
                            <li>Java Beginner</li>
                            <li>PHP Beginner</li>
                        </ul>
                    </div>

                    <div className='p-[10px]'>
                        <ul className='text-white'>
                            <li> Adobe Illustrator</li>
                            <li>Adobe Photoshop</li>
                            <li>Design Logo</li>
                        </ul>
                    </div>

                    <div className='p-[10px]'>
                        <ul className='text-white'>
                            <li>Writing Course</li>
                            <li>Photography</li>
                            <li>Video Making  </li>
                        </ul>
                    </div>
                </div>

                <div className=' border-b-[2px] border-[#F9F9F9] pb-[20px]'></div>

                <div className='flex justify-between pt-[20px]'>
                    <p className='text-white'>Copyright © MyCourse.io 2024. All Rights Reserved</p>

                    <div className=''>
                        <div className='flex gap-[10px]'>
                            <img src={twitter} alt="" />
                            <img src={union} alt="" />
                            <img src={facebook} alt="" />
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Home