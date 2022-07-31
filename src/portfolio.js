/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Ali Hasnat Khan",
  title: "Hi all, I'm Ali",
  subTitle: emoji(
    "A Python developer with a strong interest in data science. 🚀 I am aware that developing client-oriented software necessitates a blend of technical expertise and clear communication, so I do my best to guarantee that you receive both."
  ),
  resumeLink:
    "https://drive.google.com/file/d/19J1UP0DoU6Ecvjnp11wqVoVMJdF8DD_5/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Alihasnat10",
  linkedin: "https://www.linkedin.com/in/ali-hasnat-khan-a42978181/",
  gmail: "akkhannn15@gmail.com",
  bitbucket: "https://bitbucket.org/alihasnatrnssol/",
  //medium: "https://medium.com/@saadpasta",
  hackerrank: "https://www.hackerrank.com/aliistheflash",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
//I have worked on projects involving Algorithmic and Artificial Intelligence trading, predictive analysis, and computer vision. I am always willing to share my projects and explore fresh ideas. Join forces to participate in existing initiatives or to launch a new exciting and significant project.
const skillsSection = {
  title: "What I do",
  subTitle: "A FULL STACK DEVELOPER WHO LEVERAGES AI AND DATA SCIENCE TO SOLVE PROBLEMS IN VARIOUS INDUSTRIES",
  skills: [
    emoji(
      "⚡ Algorithmic and Artificial Intelligence trading"
    ),
    emoji("⚡ Computer Vision"),
    emoji(
      "⚡ Backend development, CI/CD pipelines, AIOps, Server Scaling"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
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
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National University of Sciences and Technology",
      logo: require("./assets/images/NustLogo.jpeg"),
      subHeader: "Bachelors in Software Engineering",
      duration: "September 2018 - April 2022",
      desc: "Took courses about Software Engineering, Software Architecture and Design, Advance Algorithms, Machine Learning",
      descBullets: [
        "A grade in Final Year Project",
        "1st Position in CodeFest Hackathon 21'"
      ]
    },
    {
      schoolName: "Stanford University-Coursera",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Specialization in Deep Learning",
      duration: "June 2020 - December 2020",
      desc: "Gainded indepth knowledge of the foundations of Deep learning",
      descBullets: ["Learned about structuring machine learning projects, computer vision, sequence models"]
    },
    {
      schoolName: "Dice Analytics",
      logo: require("./assets/images/diceanalyticsLogo.png"),
      subHeader: "Deep Learning Training",
      duration: "May 2021 - August 2021",
      desc: "Learned basic and advanced deep learning concepts including transfer learning, GANs, autoencoders, LSTMs etc.",
      descBullets: ["Worked on 3 main projects including OCT classification, Cancer detection using Transfer Learning and protein secondary structure prediction."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Algorithmic/AI trading -> Grid and Range Trading, Intraday Trading, DCA Bots", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Computer Vision -> Image segmentation, Object detection, Classification, Tracking, Facial detection and Recognition, OCR",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend Development -> React, Node, Flask, Django, Elastic Search, Redis",
      progressPercentage: "80%"
    },
    {
      Stack: "Software Lifecycle and Deployment -> AIOps, CI/CD Pipelines, Server Scaling, Docker and Kubernetes",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer - Artificial Intelligence",
      company: "RNS Solutions",
      companylogo: require("./assets/images/RNSLogo.png"),
      date: "January 2022 – Present",
      desc: "Working closely with a team of AI developers and Researchers to solve problems for our clients.",
      descBullets: [
        "Worked on a crypto trading bot project that generates 33% annualized return on backtesting data ",
        "Working on a Computer vision project involving facial detection, and recognition, finger counting, facial expression recognition, and backend "
      ]
    },
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "1st Position in CodeFest Hackathon 21'",
      subtitle:
        "Got 1st position in a hackathon competition arranged by the Urtasker Group of Companies",
      image: require("./assets/images/urtaskerHackathon.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/posts/ali-hasnat-khan-a42978181_hackathon-codefest-developers-activity-6882182565076242432-OZka?utm_source=linkedin_share&utm_medium=member_desktop_web"
        },
        {
          name: "Award Letter",
          url: ""
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3115894947",
  email_address: "akkhannn15@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
