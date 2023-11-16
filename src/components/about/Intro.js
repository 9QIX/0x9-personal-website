import { Fragment } from "react";
const Intro = () => {
  return (
    <Fragment>
      {/* IMAGE */}
      {/* <div className="top_author_image w-full h-auto clear-both float-left relative mb-[35px]">
        <img className="min-w-full" src="assets/img/slider/1.jpg" alt="image" />
      </div> */}
      <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
        <h3 className="text-[22px] font-bold">Kirk Hendrix</h3>
        <span>Cybersecurity Professional</span>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <p className="mb-[11px]">
          Passionate about cybersecurity, and a dedicated professional committed to safeguarding digital realms. With a strong foundation in complex problem-solving and a deep love for technology, I
          craft robust solutions that ensure data security. Each line of code I write fortifies the digital landscape, protecting valuable assets and nurturing a more secure tomorrow.
        </p>
        <p>I have been actively engaging in technical scenarios and producing educational materials to further hone my skills, broaden my exposure, and assist fellow learners on their journey.</p>
      </div>
      <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
        <div className="left w-1/2 pr-[50px]">
          <div className="tokyo_tm_info w-full h-auto clear-both float-left">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Birthday:</span>
                <span>09.18.2001</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Age:</span>
                <span>22</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Address:</span>
                <span>Angeles City</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Email:</span>
                <span>
                  <a className="text-[#767676] transition-all duration-300 hover:text-black" href="mailto:tokyo@gmail.com">
                    klbulaong@gmail.com
                  </a>
                </span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Phone:</span>
                <span>
                  <a className="text-[#767676] transition-all duration-300 hover:text-black" href="tel:+77 022 177 05 05">
                    09456216104
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right w-1/2 pl-[50px]">
          <div className="tokyo_tm_info">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Nationality:</span>
                <span>PH</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Study:</span>
                <span>Holy Angel University</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Degree:</span>
                <span>Bachelor's</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Interest:</span>
                <span>Reading Books</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">Freelance:</span>
                <span>Available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tokyo_tm_button" data-position="left">
        <a href="assets/img/cv/1.jpg" download>
          <span>Download CV</span>
        </a>
      </div>
    </Fragment>
  );
};
export default Intro;
