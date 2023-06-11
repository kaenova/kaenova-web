"use client";

import Slider, { Settings as CarouselSettings } from "react-slick";
import { Project, projects } from "./projects_data";

function ProjectCard({ ...data }: Project) {
  return (
    <div className="flex flex-col justify-between bg-[#211F1E] w-72 rounded-md p-6 h-80">
      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold text-white text-center">{data.title}</p>
        <p className="text-secondary-btn">{data.description}</p>
      </div>
      <div className="flex flex-col items-center">
        <a
          className=" bg-primary-btn rounded-full break-normal max-w-min px-9 py-1 hover:shadow-lg hover:shadow-primary-btn/30 duration-200 transition-all"
          href={data.href}
        >
          <p className="whitespace-nowrap text-white font-bold">Open project</p>
        </a>
      </div>
    </div>
  );
}

function Projects() {
  var settings: CarouselSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 12000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col mt-16 items-center gap-6 mx-7">
      <div className="w-full">
        <button type="button">
          <p className="text-4xl font-bold text-left text-white">Projects</p>
        </button>
      </div>
      <div className="w-full">
        <Slider {...settings}>
          {projects.map((v, i) => (
            <div key={i}>
              <div className="flex flex-col justify-center items-center">
                <ProjectCard {...v} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
