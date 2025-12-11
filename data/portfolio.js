/**
 * Portfolio Data - Centralized data storage
 */

export const portfolioData = {
    personal: {
        name: "Yograj Rajput",
        pronouns: "[he / him]",
        role: "Full Stack Developer",
        tagline: "Crafting digital experiences with passion and precision",
        about: "I'm a Full Stack Developer passionate about building web applications and creating meaningful user experiences. Currently pursuing B.Tech in Computer Science at Government Engineering College, Raipur.",
        social: {
            linkedin: "https://www.linkedin.com/in/yograj-rajput-205316229/",
            github: "https://www.github.com/yogitheboss",
            twitter: "https://twitter.com/Yograj_Rajput__"
        }
    },
    experience: [
        {
            title: "SDE 1",
            company: "Nyusta Labs",
            companyUrl: "https://thanq.page/",
            image: "./assets/thanq-logo.svg", // Add your ThanQ image here
            date: "Present",
            responsibilities: [
                "Working on Thanq platform - a tipping service platform for service workers",
                "Implementing Thanq points system for rewarding service workers",
                "Building scalable features for the tipping service ecosystem"
            ]
        },
        {
            title: "Software Engineer Intern",
            company: "User Evaluation Neu Software LLC, Delaware US",
            companyUrl: "https://userevaluation.com/",
            image: "./assets/userevaluation-logo.png", // Add your User Evaluation image here
            date: "May 2023 - Aug 2025",
            responsibilities: [
                "Developed a live notetaker for meetings using socket connections",
                "Built responsive UI, improving engagement by 30%",
                "Integrated video clips and sentiment analysis",
                "Engineered AI tagging pipeline for file types",
                "Developed FitnessMate - a fitness tracker with calorie and macro tracking via food image recognition",
                "Worked on Overbrilliant - an AI-powered chat application",
                "Built FireMail - an agentic mail handler system",
                "Contributed to User Evaluation Nova - an improved version of the user evaluation tool"
            ]
        },
        {
            title: "President",
            company: "Code For Community, GEC Raipur",
            companyUrl: "https://codeforcommunity.in/",
            image: "./assets/codeforcommunity.png", // Add your Code For Community image here
            date: "July 2024 - Present",
            responsibilities: [
                "Coordinated ISRO's Space Day event (300+ attendees)",
                "Facilitated web development seminars and hackathons",
                "Connected 30+ alumni with current students"
            ]
        }
    ],
    projects: [
        {
            title: "Code For Community Website",
            description: "Built using Next.js and Tailwind CSS, serving 100+ members",
            link: "#",
            linkText: "Try it here"
        },
        {
            title: "Learning Dashboard",
            description: "MERN stack application with course creation and progress tracking",
            link: "#",
            linkText: "Demo"
        },
        {
            title: "OrgIt",
            description: "Node.js CLI tool that reduces file arrangement time by 95%",
            link: "#",
            linkText: "Try it here"
        }
    ],
    skills: {
        frontend: [
            { name: "Javascript", icon: "fab fa-js" },
            { name: "NextJS", icon: "fab fa-react" },
            { name: "ReactJS", icon: "fab fa-react" },
            { name: "Redux", icon: "fas fa-code-branch" },
            { name: "TypeScript", icon: "fab fa-typescript" },
            { name: "Tailwind", icon: "fab fa-css3-alt" }
        ],
        backend: [
            { name: "Node.js", icon: "fab fa-node-js" },
            { name: "Express", icon: "fas fa-code" },
            { name: "MongoDB", icon: "fas fa-database" },
            { name: "PostgreSQL", icon: "fas fa-database" },
            { name: "MySQL", icon: "fas fa-database" }
        ],
        tools: [
            { name: "Git", icon: "fab fa-git-alt" },
            { name: "Docker", icon: "fab fa-docker" },
            { name: "Linux", icon: "fab fa-linux" },
            { name: "LaTeX", icon: "fas fa-file-alt" }
        ]
    }
};

