import nodeJs from "../assets/png/nodejs_logo.png";
import devwizards from "../assets/png/devwizards.png";
export const projectsData = [
  {
    id: 1,
    projectName: "Dev Wizards Agency",
    projectDesc: "A home page for the dev-wizards agency.",
    tags: ["JS", "HTML", "CSS"],
    code: "https://github.com/Najd-Feki/CodeWizards/tree/master/js",
    demo: "https://dev-wizards.com/",
    image: devwizards,
  },
  {
    id: 2,
    projectName: "Ream movie",
    projectDesc:
      "An online video platform to capture, share and even sell videos ",
    tags: ["React", "Nodejs", "MongoDB", "Express.js", "Typescript"],
    code: "",
    demo: "https://ream-movie.com/",
    image: "https://i.ibb.co/K5QQvwK/ream.png",
    isPrivate: true,
  },
  {
    id: 3,
    projectName: "Kepler Travel",
    projectDesc:
      "An online Hotels and flights reservation application , This is a private project that I cannot share it's source code",
    tags: ["React", "Nodejs", "MongoDB", "Express.js", "Typescript"],
    code: "",
    demo: "https://keplertravel.com/",
    image: "https://i.ibb.co/N12QfPH/kepler.png",
    isPrivate: true,
  },
  {
    id: 4,
    projectName: "Online eyewear store",
    projectDesc: "An online eyewear gallery with many choices and filters",
    tags: ["Vue", "Typescript"],
    code: "https://github.com/Najd-Feki/bloobloom",
    demo: "https://ubiquitous-pithivier-a78973.netlify.app/",
    image: "https://i.ibb.co/rvxjgt1/bloobloom.png",
  },

  {
    id: 5,
    projectName: "Blitz learning assistant",
    projectDesc:
      "A platform that allows users to progress with their learning and skills with the help of a chatbot made with Dialogflow and many other features.",
    tags: ["React", "Nodejs", "MongoDB", "Express.js"],
    code: "https://github.com/Najd-Feki/Elite-devs-Blitz-Chatbot",
    demo: "https://blitz-assistant.herokuapp.com/",
    image: "https://i.ibb.co/86G9nwy/blitz.png",
  },
  {
    id: 6,
    projectName: "Resume Parser API",
    projectDesc:
      "An Online Resume parser api that can turn any pdf resume into json data to help companies and HRs filter resumes. ",
    tags: ["Node.js"],
    code: "https://github.com/Najd-Feki/resume-parser",
    demo: "https://reliance-digital-clone.herokuapp.com/",
    image: nodeJs,
  },
];
