/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nobert ",
  title: "If at first you don’t succeed; call it version 1.0",
  subTitle: emoji(
    "A Full Stack Developer & Cyber Security Specialist, motivated to innovate and develop web and mobile applications to solve data insecurity, Limited online markets and create open-source software."
  ),
  resumeLink:
    "https://res.cloudinary.com/trikerl/image/upload/v1639687174/Nobert_Ayesiga_Res_lcjebt.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Trikcode",
  linkedin: "https://www.linkedin.com/in/nobert-patrick-wise-a3001896/",
  gmail: "ayesiganobert@gmail.com",
  twitter: "https://twitter.com/Trikerl",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Expertise",
  subTitle: "A FULL STACK DEVELOPER WHO WRITES ",
  skills: [
    emoji(
      "🗝 Keep up with the fast pace of change in the criminal cyber-underworld"
    ),
    emoji(
      "🗝 IdentifY issues in software processes and implement optimization techniques resulting in productivity increase."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Makerere University",
      logo: require("./assets/images/makerere.jpg"),
      subHeader: "Bachelors of Science in Software Engineering"
    },
    {
      schoolName: "Holberton School",
      logo: require("./assets/images/holberton.png"),
      subHeader: "Software Engineering Program"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Ethical Hacking",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Wise Acts Technologies",
      companylogo: require("./assets/images/wise.png"),
      date: "May 2019 – Present",
      desc: "🤳 Work as a mobile app developer where I have designed a booking app to enable students book local hostels."
    },
    {
      role: "Sales Specialist",
      company: "Kaispot Telecommunications",
      companylogo: require("./assets/images/kaispot.png"),
      date: "May 2020 – Sept 2021",
      desc: "🤳Built and maintained relationships with peers and upper management to drive team success."
    },
    {
      role: "Software Engineer Intern",
      company: "Patricks Co. Ltd",
      companylogo: require("./assets/images/patrick.png"),
      date: "Jan 2018 – May 2018",
      desc: "🤳Integrated user-facing elements developed by front-end developers using server-side logic."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "MORE WORKS!!!",
  subtitle: "SOME PERSONAL AND CLIENT BASED SITES",
  projects: [
    {
      image: require("./assets/images/ciroyelle.jpg"),
      projectName: "Just-Imagines",
      projectDesc: "All in one Music site for Tyler and Ciroyelle",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://just-imagines.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/wise.png"),
      projectName: "Wise Acts Tech",
      projectDesc:
        "Showcasing handy and mighty works done for numerous customers",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nobert-ayesiga.com"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reachout to Me ☎️"),
  subtitle:
    "Any project, any colloboration or just want to say hi? My Inbox is open for all.",
  number: "+256704353242",
  email_address: "ayesiganobert@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Trikerl", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo,
  twitterDetails
};
