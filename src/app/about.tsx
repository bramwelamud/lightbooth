type Props = {};
import Section_2 from "./section_2";
import Section_3 from "./section_3";

const About: React.FC<Props> = () => {
  return (
   <>
   <div className="margin-0">
        <div className="bg-black vh-100 margin-0 smooth-scroll">
        <div className="margin-0 ">
            <Section_2 />
            <Section_3 />
        </div>
        </div>
   </div>

   </>
  );
};

export default About;