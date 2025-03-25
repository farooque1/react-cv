import React from "react";
// import ProjectData from "./ProjectData";
import project1 from "../assets/proj.png";
import project2 from "../assets/pro.png";
import project3 from "../assets/edobo.avif";
import project4 from "../assets/proje.png";
import project5 from "../assets/project4.png";


function Project() {

  const ProjectData = [
    {
      id: 1,
      imageSrc: project1,
      title: "Russia Visa Center",
      description: "Russia Visa Center, providing you with a hassle-free experience from start to finish. With intuitive features such as document submission, appointment scheduling, and real-time status updates.",
      links: "demo.com",
      tech:[{id:1,name:'HTML'},{id:2,name:'CSS'},{id:3,name:'JS'},{id:4,name:'MUI'},{id:5,name:'REACT JS'},{id:6,name:'REDUX'},{id:7,name:'REDUX-THUNK'}],
      sourcecode: "#",
    },
    {
      id: 2,
      imageSrc: project2,
      title: "Mercurius Travel",
      description: "Mercurius Travel connects you with a world of adventure, offering personalized recommendations, seamless booking options, and insider tips tailored to your preferences.",
      links: "demo.com",
      tech:[{id:1,name:'HTML'},{id:2,name:'CSS'},{id:3,name:'JS'},{id:4,name:'MUI'},{id:5,name:'REACT JS'},{id:6,name:'REDUX'},{id:7,name:'REDUX-THUNK'}],
      sourcecode: "#",
    },
    {
      id: 3,
      imageSrc: project3,
      title: "Edobo E-Commerce Web App",
      description:"Developer-friendly platform, meticulously crafted to provide seamless integration and customization options. With our API-first approach, you can effortlessly build, scale, and innovate your e-commerce experience.",
      links: "demo.com",
      tech:[{id:1,name:'HTML'},{id:2,name:'CSS'},{id:3,name:'JS'},{id:4,name:'MUI'},{id:5,name:'REACT JS'},{id:6,name:'REDUX'},{id:7,name:'REDUX-THUNK'}],
      sourcecode: "#",
    },
    {
      id: 4,
      imageSrc: project4,
      title: "Queue Zilla Web App",
      description:"QueueZilla is a comprehensive queue management system that provides you the flexibility to configure your new queueing system in minutes and start using it without the need for expensive hardware.",
      links: "demo.com",
      tech:[{id:1,name:'HTML'},{id:2,name:'CSS'},{id:3,name:'JS'},{id:4,name:'BOOTSTRAP'}],
      sourcecode: "#",
    },
    {
      id: 5,
      imageSrc: project5,
      title: "Appointment Management System (Visa)",
      description:"Our innovative platform offers a user-friendly interface for both applicants and administrators, ensuring smooth scheduling, tracking, and management of visa appointments.",
      links: "demo.com",
      tech:[{id:1,name:'HTML'},{id:2,name:'CSS'},{id:3,name:'JS'},{id:4,name:'BOOTSTRAP'}],
      sourcecode: "#",
    },
    {
      id: 6,
      imageSrc: project5,
      title: "Lead Management System (LMS)",
      description: "A centralized system that manages leads from multiple social platforms, assigns them to telecallers, and tracks their progress through different sales stages.",
      links: "demo.com",
      tech:[{id:1,name:'REACT JS'},{id:2,name:'NODE JS'},{id:3,name:'MONGO DB'},{id:4,name:'EXPRESS'},{id:5,name:'REDUX'},{id:6,name:'BOOTSTRAP'}],
      sourcecode: "#",
    },
    {
      id: 7,
      imageSrc: project5,
      title: "Queue Management System (QMS)",
      description: "An advanced queue management system that provides real-time queue monitoring, ticket generation, and automated customer notifications.",
      links: "demo.com",
      tech:[{id:1,name:'REACT JS'},{id:2,name:'NODE JS'},{id:3,name:'MYSQL'},{id:4,name:'EXPRESS'},{id:5,name:'SOCKET.IO'}],
      sourcecode: "#",
    },
    {
      id: 8,
      imageSrc: project5,
      title: "DigiShift",
      description: "A digital transformation platform designed to automate business processes, optimize workflows, and enhance operational efficiency using AI-driven insights.",
      links: "demo.com",
      tech:[{id:1,name:'NEXT JS'},{id:2,name:'TAILWIND CSS'},{id:3,name:'FIREBASE'},{id:4,name:'GRAPHQL'},{id:5,name:'TYPESCRIPT'}],
      sourcecode: "#",
    },
];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">My Projects</h2>
        <p className="text-lg text-gray-400 mb-10">
          Here are some of the projects I’ve worked on.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {ProjectData.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            {/* Project Image */}
            <img
              src={project.imageSrc}
              alt={project.title}
              className="w-full h-58 object-cover"
            />

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-300">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((techItem) => (
                  <span
                    key={techItem.id}
                    className="text-xs font-semibold bg-gray-700 text-white px-2 py-1 rounded-full"
                  >
                    {techItem.name}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-between mt-6">
                <a
                  href={project.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.sourcecode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
