import supervisor from './img/icon-supervisor.svg';
import calculator from './img/icon-calculator.svg'
import karma from './img/icon-karma.svg'
import teamBuilder from './img/icon-team-builder.svg'
const Card = () => {
    return (
        <>
        <div className=" my-0 mx-auto lg:mx-32 ">
          <div className="py-16 px-10  lg:grid lg:grid-cols-3 lg:gap-4 ">
                <div className=' lg:content-center'>
                    <div className="data-points border-Cyan mb-10 lg:mb-0 ">
                        <span className="text-[1rem]  font-semibold fontColorTitle">Supervisor</span>
                        <p className="text-[.7rem] lg:pt-2 lg:pr-10 fontColor">
                            Monitors activity to identify project roadblocks
                        </p>
                        <div className="flex justify-end pt-10">
                            <img className="w-[25%]" src={supervisor} alt=""/>
                        </div>
                    </div>
                </div>
               
                <div className=' lg:grid lg:grid-rows-1 lg:gap-y-4'>
                    <div className="data-points border-Red mb-10 lg:mb-0 ">
                        <span className="text-[1rem] font-semibold fontColorTitle">Team Builder</span>
                        <p className="text-[.7rem] lg:pt-2 lg:pr-10  fontColor">
                        Scans our talent network to create the optimal team for your project
                        </p>
                        <div className="flex justify-end pt-10">
                            <img className="w-[25%] " src={teamBuilder} alt=""/>
                        </div>
                    </div>

                   <div className="data-points border-Orange mb-10 lg:mb-0 ">
                        <span className="text-[1rem] font-semibold fontColorTitle">Karma</span>
                        <p className="text-[.7rem] lg:pt-2 lg:pr-10  fontColor">
                            Regularly evaluates our talent to ensure quality
                        </p>
                        <div className="flex justify-end pt-10">
                            <img className="w-[25%] " src={karma} alt=""/>
                        </div>
                    </div>
               </div>
              
              <div className='lg:content-center'>
                    <div className="data-points border-Blue   ">
                        <span className="text-[1rem] font-semibold fontColorTitle">Calculator</span>
                        <p className="text-[.7rem] lg:pt-2 lg:pr-10  fontColor">
                        Uses data from past projects to provide better delivery estimates
                        </p>
                        <div className="flex justify-end pt-10">
                            <img className="w-[25%] " src={calculator} alt=""/>
                        </div>
                    </div>
              </div>
          </div>
        </div>
        </>
    )
}

export default Card;