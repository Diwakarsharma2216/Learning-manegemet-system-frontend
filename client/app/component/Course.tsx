import React, { FC } from 'react'
import {FaStar} from "react-icons/fa"
const Course:FC<any> = ({ title, rating, price, numLectures, numStudents, imageUrl }) => {
    const arr=[1,2,3]
  return (
    <div className=' bg-gray-900'>
    <div className="flex justify-center ">
    <div className=" md:w-2/4 w-3/4 mt-1 text-yellow-100">
        <h2 className="md:text-2xl text-center justify-center xs:text-xl lg:text-3xl xl:text-4xl">
          Unleash your inner{" "}
          <span className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
            programming
          </span>{" "}
          <br />{" "}
          <span className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
            genius{" "}
          </span>{" "}
          with our community.
        </h2>
    
    </div >
    </div>
    {/*  card part start here */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
    {arr.map((el,i)=><div key={i} className="border-2 xs:w-5/6 w-3/6 h-80  rounded-lg md:ml-4 mt-3 xs:mx-auto ">

</div>)}
</div>
  </div>
  )
}

;

export default Course



