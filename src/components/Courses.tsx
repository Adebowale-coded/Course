import React from 'react'
import FirstImg from '../assets/imgs/Thumbnail.png'
import SecondImg from '../assets/imgs/Thumbnail-Image.png'
import ThirdImg from '../assets/imgs/Thumb.png'
import FourthImg from '../assets/imgs/Thumbnail-Image-1.png'
import FifthImg from '../assets/imgs/person.png'
import SixthImg from '../assets/imgs/star.png'

export interface CoursesProsps {
    imgSrc: string;
    userIcon: string;
    starIcon: string;
    CourseName: string;
    StudioName: string;
    originalPrice: string;
    rating?: string
    formerPrice?: string;
    courseDetails?: string;
}

const Courses = ({ imgSrc, userIcon, starIcon, CourseName, StudioName, formerPrice, originalPrice, rating, courseDetails }: CoursesProsps) => {

    return (
        <div className='font-[poppins]'>
            <img src={imgSrc} alt="" />
            <span className='font-[500]'>{CourseName}</span>
            <div className='gap-[10px] flex'>
                <img src={userIcon} alt="" className='object-contain' />
                <span className='text-[#3DCBB1]'>{StudioName}</span>
            </div>
            <div>
                <p className='text-[12px]'>{courseDetails}</p>
            </div>
            <div className='flex gap-[5px]'>
                <img src={starIcon} alt="" className='object-contain' />
                <p>{rating}</p>
            </div>
            <div className='flex gap-[10px]'>
                <span className='font-[1000]'>{originalPrice}</span>
                <span className=''>{formerPrice}</span>
            </div>
        </div>
    )
}

export default Courses