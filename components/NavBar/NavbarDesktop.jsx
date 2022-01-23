import React, { useState } from "react";
import { dataSection } from "./dataNavbar";
import dataMoreFeature from "./dataMoreFeature";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectNavBar } from "../../redux/navbarSlice";


function NavbarDesktop() {
  const router = useRouter()
  const [MenuClicked, setMenuClicked] = useState(false)
  const page = Object.keys(dataSection); // Ini harus di sinkronkan dengan state pada navbarSlice
  const selected = useSelector(selectNavBar);

  return (
    <>
      <div className=" fixed bg-white shadow-lg flex flex-col top-0 left-0 w-[93px] h-full justify-between items-center tracking-wide select-none invisible sm:visible z-[1] py-2">
        <img src="/Logo.svg" className="p-3" alt="asds" />
        <div className="grid grid-flow-row justify-center items-center gap-7 mb-12">
          {page.map((v, idx) => {
            if (router.pathname != "/") return (
              <div key={idx} className="flex flex-row items-center group">
                <a className="font-normal text-center tracking-normal text-[24px] w-[43px] h-[43px] rounded-[7px] box-content " href={`/#${dataSection[v]["section_name"]}`}>{v[0]}</a>
                <button className="bg-white fixed p-2 text-[18px] z-0 scale-0 group-hover:scale-100 left-[100px] rounded-md shadow-md transition-all duration-100">
                  {v}
                </button>
              </div>
            )
            return (
              <div key={idx} className="flex flex-row items-center group">
                <button
                  onClick={() =>
                    document
                      .getElementById(dataSection[v]["section_name"])
                      .scrollIntoView()
                  }
                  key={Math.random()}
                  className={"font-normal text-center tracking-normal text-[24px] w-[43px] h-[43px] rounded-[7px] box-content " + [(selected == v) && "bg-[#C4C4C4] font-bold"]}
                >
                  {v[0]}
                </button>
                <button className="bg-white fixed p-2 text-[18px] z-0 scale-0 group-hover:scale-100 left-[100px] rounded-md shadow-md transition-all duration-100">
                  {v}
                </button>
              </div>
            );
          })}

          {/* More Menu */}
          <div className="flex flex-row items-center group">
            <button
              onClick={() => { MenuClicked ? setMenuClicked(false) : setMenuClicked(true) }}
              className={["font-normal text-center tracking-normal text-[24px] w-[43px] h-[43px] box-content flex flex-row justify-center items-center rounded-[7px] " + [(MenuClicked) && "bg-[#C4C4C4]"]]}
            >
              <img src="/menu-outline.svg" className="w-[24px]" alt="" />
            </button>
            <div className={"bg-white absolute p-2 text-[12px] z-2 scale-0 w-[300px]  left-[100px] rounded-md shadow-md transition-all duration-500 self-end flex flex-col gap-1 " + [(MenuClicked) && "scale-100"]}>
              More feature is under development
              <hr />
              {dataMoreFeature.map((v, idx) => {
                return (
                  <a key={idx} className="mt-1 hover:bg-[#ebebeb] p-2 rounded-md transition-all duration-100" href={v["url"]}>{v["nama"]}</a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarDesktop
