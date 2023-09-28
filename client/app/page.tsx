import Image from 'next/image'
import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import Course from './component/Course'
export default function Home() {
  return (
    <main>
       <Navbar />
     <Hero /> 
     <Course
          title="Course Title 1"
          rating={4.5}
          price={49.99}
          numLectures={35}
          numStudents={2500}
          imageUrl="https://example.com/image1.jpg"
        />
    </main>
  )
}
