'use client'

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const ProjectSection = () => {
  const projectsData = [
    {
      id: 1,
      title: "React Portfolio Website",
      description: "Project 1 description",
      image: "https://4kwallpapers.com/images/walls/thumbs_3t/5630.jpg",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Potography Portfolio Website",
      description: "Project 2 description",
      image: "https://4kwallpapers.com/images/walls/thumbs_3t/12504.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "E-commerce Application",
      description: "Project 3 description",
      image: "https://4kwallpapers.com/images/walls/thumbs_3t/17525.jpg",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Food Ordering Application",
      description: "Project 4 description",
      image: "https://4kwallpapers.com/images/walls/thumbs_3t/1003.jpg",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "React Firebase Template",
      description: "Authentication and CRUD operations",
      image: "https://4kwallpapers.com/images/walls/thumbs_3t/18692.jpg",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "Full-stack Roadmap",
      description: "Project 5 description",
      image: "https://4kwallpapers.com/images/walls/thumbs_3t/16718.jpg",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
  ];

  const [tag, setTag] = useState("All");

  function handelTagChange(newTag) {
    setTag(newTag);
  }

  const filteredProjects = projectsData.filter((project) =>
    tag === "All" ? true : project.tag.includes(tag)
  );

  return (
    <section>
      <div className="items-center mx-auto">
        <h1 className="text-orange-500 text-xl md:text-2xl sm:text-2xl xl:text-4xl text-center mb-10">
          My Projects
        </h1>

        <div className="flex gap-4 justify-center mb-8">
          <ProjectTag onClick={() => handelTagChange("All")} name="All" isSelected={tag === 'All'} />
          <ProjectTag onClick={() => handelTagChange("Web")} name="Web" isSelected={tag === 'Web'} />
          <ProjectTag onClick={() => handelTagChange("Mobile")} name="Mobile" isSelected={tag === 'Mobile'} />
        </div>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 md:gap-12 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              ImgUrl={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
