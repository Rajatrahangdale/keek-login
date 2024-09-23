/* eslint-disable react/prop-types */
import { useState } from "react";
import NicheNature from "../../assets/NicheImage1.png";
import NicheTV from "../../assets/NicheImage2.png";
import NicheBook from "../../assets/NicheImage3.png";
import NicheGogle from "../../assets/NicheImage4.png";
import { Link } from "react-router-dom";
import { MdCheck } from "react-icons/md";
const Category = () => {
   const [NicheData, setNicheData] = useState([
     { name: "Music", image: NicheNature, color: "#FFE393", isCheck: false },
     { name: "Games", image: NicheTV, color: "#C1D3E5", isCheck: false },
     { name: "Music", image: NicheNature, color: "#E9CDCF", isCheck: false },
     { name: "Reading", image: NicheBook, color: "#EDDDF2", isCheck: false },
     { name: "Music", image: NicheNature, color: "#E9CDCF", isCheck: false },
     { name: "Reading", image: NicheBook, color: "#EDDDF2", isCheck: false },
     { name: "Fashion", image: NicheGogle, color: "#E2BDBF", isCheck: false },
     { name: "Blog", image: NicheBook, color: "#D8E4C2", isCheck: false },
     // { name: "Lifestyle", image: NicheNature, color: "#FFE393",isCheck:false  },
     // { name: "Reading", image: NicheBook, color: "#D8E4C2",isCheck:false  },
   ]);
     const handleSelectedNiche = (id) => {
       setNicheData((prev) =>
         prev.map((item, index) =>
           index === id ? { ...item, isCheck: !item.isCheck } : item
         )
       );
       //  const selectedNicheData = NicheData.filter(
       //    (item, index) => (index === id && item.isCheck) === true
       //  );
       //  setSelectedNiche(...selectedNicheData);
       // const handleSelectedNiche = (id) => {

       // };
       // handleSelectedNiche(id);
       // console.log(selectedNiche);
     };
  return (
    <div className="min-w-[1440px] w-screen h-[895px] bg-[#D9D9D9] flex items-center justify-center shrink-0">
      <div className="w-[710px] h-[790px] bg-white rounded-[14px] overflow-hidden">
        <div className="flex justify-between pt-[48px] px-6 pb-3">
          <h3>Step 2: Category</h3>
          <button className="text-[#EAEAEA]">Exit</button>
        </div>
        <div className="flex h-1 self-stretch bg-[#EAEAEA] relative">
          <div className="absolute w-[50%] h-full bg-[#06f]"></div>
        </div>
        <div className="mt-9 ml-[48px] mr-[58px] flex flex-col items-start">
          <h2 className="text-2xl font-semibold">
            Get started by picking up Niche
          </h2>
          <p className="text-[#969696]">
            Select the category you specialised in for easy collaborations
          </p>

          <input
            className="h-[45px] mt-[10px] px-5 py-[17px] w-full rounded-lg bg-[#F5F5F5]"
            type="search"
            name=""
            id="dob"
            placeholder="search"
          />
        </div>
        <div className="flex gap-x-7 gap-y-4 mt-8 flex-1 flex-wrap">
          {NicheData.map(({ name, image, color, isCheck }, index) => {
            return (
              <NicheCard
                key={index} 
                id={index} 
                name={name}
                image={image}
                color={color}
                isCheck={isCheck}
                handleSelectedNiche={handleSelectedNiche}
              />
            );
          })}
        </div>
        <Link to={"/addInnfoModel"}>
          <div className="flex justify-end mt-[57px] mr-[48px]">
            <button className="flex w-[170px] h-[45px] px-4 justify-center items-center shrink-0 rounded-lg bg-[#06f] text-white">
              Next
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Category;

const NicheCard = ({ id, name, image, color,isCheck,
  handleSelectedNiche, }) => {
   return (
    <div
      style={{ background: color }}
      className="flex w-[153px] h-[172px] p-4 flex-col rounded-[10px] bg-[#C1D3E5]"
    >
      <img
        className="flex flex-[1_0_0] self-stretch object-contain bg-no-repeat"
        src={image}
        alt=""
      />
      <div className="flex items-center gap-2">
        <h4 className="text-lg font-semibold">{name}</h4>
        {isCheck ? (
          <button
            className="flex h-9 px-2 items-center justify-center rounded border border-[#363939]"
            onClick={() => handleSelectedNiche(id)}
          >
            <MdCheck className="scale-150" />
          </button>
        ) : (
          <button
            className="flex h-9 px-2 text-sm items-center justify-center rounded border border-[#363939]"
            onClick={() => handleSelectedNiche(id)}
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};
