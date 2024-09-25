import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard = ({ title, ImgUrl, description, gitUrl, previewUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden">
      <div
        className="h-72  rounded-t-xl relative group"
        style={{
          backgroundImage: `url(${ImgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-0 left-0 bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 group-hover:cursor-pointer transition-opacity duration-500 w-full h-full justify-center items-center group">
          <Link
            href={gitUrl}
            className="flex justify-center items-center text-center "
          >
            <CodeBracketIcon className="text-[#999999]  font-bold h-12 w-12 mr-3 hover:text-[#ffffff] rounded-full  text-center " />
          </Link>

          <Link
            href={previewUrl}
            className="flex justify-center items-center text-center"
          >
            <EyeIcon className="text-[#999999] font-bold h-12 w-12 mr-3 hover:text-[#ffffff] rounded-full  text-center" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#191818] p-4">
        <h5 className="font-semibold mb-2">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
