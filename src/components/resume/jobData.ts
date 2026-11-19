const Epic = {
    JobTitle: "Software Developer",
    Company: "Epic Systems",
    CompanyLocation: "Verona, WI",
    StartMonthYear: "January 2019",
    EndMonthYear: "",
    Details: [
        'Led migration of multiple legacy applications to modern frameworks, improving compatibility with current tooling and reducing maintenance overhead for the engineering team.',
        'Championed code review culture that raised code quality standards and contributed to a measurable reduction in production bugs across multiple release cycles.',
        'Partnered with technical support teams to systematically address customer-reported issues, resulting in improved product reliability and fewer repeat incidents.',
        'Delivered targeted UI/UX enhancements that directly improved end-user workflows, earning positive feedback from customers and internal stakeholders.',
    ],
} as IJob;

const Vine = {
    JobTitle: "Music Director (Part-Time)",
    Company: "The Vine",
    CompanyLocation:"Madison, WI",
    StartMonthYear:"July 2023",
    EndMonthYear:"",
    Details:[
        'Lead and schedule a team of ~15 musicians and vocalists for weekly Sunday services, managing logistics and coordinating with audio/visual staff.',
        'Conduct auditions and provide structured feedback to prospective team members, supporting their growth and maintaining team quality.',
    ],
} as IJob;

const EliteMechanical = {
    JobTitle:"Estimator",
    Company:"Elite Mechanical Systems",
    CompanyLocation:"Mobile, AL",
    StartMonthYear:"March 2017",
    EndMonthYear:"September 2018",
    Details:[
        'Produced detailed HVAC and plumbing cost estimates for commercial construction projects valued up to $500K, analyzing blueprints and construction documents.',
        'Developed budget estimates for design/build projects in collaboration with general contractors and clients.',
    ],
} as IJob;

const SolutionMechanical = {
    JobTitle:"CAD Technician/Estimator",
    Company:"Solution Mechanical",
    CompanyLocation:"Mobile, AL",
    StartMonthYear:"January 2012",
    EndMonthYear:"February 2017",
    Details:[],
} as IJob;

const BatchelorsMechanical = {
    JobTitle:"CAD Technician",
    Company:"Batchelor's Mechanical Contractors",
    CompanyLocation:"Loxley, AL",
    StartMonthYear:"September 2008",
    EndMonthYear:"December 2011",
    Details:[],
} as IJob;

export const JobsData = [
    Epic,
    Vine,
    EliteMechanical,
    SolutionMechanical,
    BatchelorsMechanical,
];

export interface IJob {
    JobTitle: string,
    Company: string,
    CompanyLocation: string,
    StartMonthYear: string,
    EndMonthYear?: string,
    Details: string[]
};