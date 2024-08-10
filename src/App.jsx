import Card from './Component/Card/Card';
import './App.css'

function App() {
  return (
    <>
      <div className=" my-0 mx-auto ">
        <div className="text-center pt-16 pb-0 px-10 ">
          <p className="text-[1.40rem] lg:text-[2.1rem] font-extralight">Reliable, efficient delivery</p>
          <p className="text-[1.4rem] lg:text-[2.1rem] font-semibold fontColorTitle ">Powered by Technology</p>
          <div className='lg:flex lg:justify-center  '>
            <p className="text-[0.9rem] mt-3 fontColor lg:w-[40%] ">
            Our Artificial Intelligence powered tools use millions of project data points 
            to ensure that your project is successful
            </p>
          </div>
        </div>
        <Card/>
      </div>
    </>
  )
}

export default App
