import React from "react";
import { SiHtml5 } from "react-icons/si"

const Skills = () => {
  return (
    <div className="w-full mt-24">
      <div className=" text-center text-2xl mb-8">Full-Stack Developer Skills</div>
      <div className="flex justify-evenly">
        <div className="text-xl bg-red-700 ">
         
          <div className="text-xl mb-4 underline"> Frontend</div>
          <div> <SiHtml5 size={20} className="bg-orange" /> HTML </div>
          <div> CSS </div>
          <div> JS </div>
          <div> ReactJS </div>
          <div> TYPESCRIPT </div>
          <div> NEXTJS </div>
          <div> SASS </div>
          <div> BOOTSTRAP </div>
          <div> TAILWIND </div>
        </div>

        <div className="text-xl bg-amber-600 ">
          
          <div className="text-xl mb-4 underline">Backend</div>
          <div>NODEJS</div>
          <div>EXPRESSJS</div>
          <div>SQL</div>
          <div>NOSQL</div>
          <div>POSTGRESQL</div>
          <div>MONGODB</div>
          <div>RESTFULAPI</div>
          <div>SWAGGER</div>
          <div>SEQULIZE</div>
          <div>DOCKER</div>
        </div>
      </div>

      <div className="w-50 text-center mt-20 ml-40 mr-40"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque laboriosam animi deserunt qui aperiam reiciendis nisi, ipsum, minus est, impedit cum odio doloremque nostrum iusto. Tempora dignissimos 
      
      maxime deleniti laboriosam.</div>
  
            <div className=""><img src="./images/svg/CSS.svg" alt="" /></div>
            <div><img src="./images/svg/HTML.svg" alt="" /></div>
    </div>

    
  );
};

export default Skills;
