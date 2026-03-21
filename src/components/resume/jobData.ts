const Epic = {
    JobTitle: "Software Developer",
    Company: "Epic Systems",
    CompanyLocation: "Verona, WI",
    StartMonthYear: "January 2019",
    EndMonthYear: "",
    Details: [
        'Executed migration of legacy applications, resulting in improved compatibility with modern tools and technologies, enhancing user experience.',
        'Contributed to code reviews, fostering a culture of quality that improved overall team performance and reduced production bugs.',
        'Engaged with technical support teams to address customer feedback, leading to improved product performance and reliability across multiple releases.',
        'Increased user satisfaction through targeted enhancements in user interface design and functionality.',
    ],
} as IJob;

const Vine = {
    JobTitle: "Music Director",
    Company: "The Vine Church",
    CompanyLocation:"Madison, WI",
    StartMonthYear:"July 2023",
    EndMonthYear:"",
    Details:[
        'Scheduled a team of approximately fifteen musicians and vocalists for a Sunday morning church service.',
        'Performed auditions for prospective music team members and provided actionable feedback for growth and development.',
        'Coordinated equipment needed with the audio/visual team to ensure rehearsal and church services occur on time.',
    ],
} as IJob;

const EliteMechanical = {
    JobTitle:"Estimator",
    Company:"Elite Mechanical Systems",
    CompanyLocation:"Mobile, AL",
    StartMonthYear:"March 2017",
    EndMonthYear:"September 2018",
    Details:[
        'Analyzed construction documents to provide HVAC and plumbing cost estimates for project valuations up to $500,000.',
        'Worked with potential customers/general contractors to provide budget estimates for design/build construction projects.',
    ],
} as IJob;

const SolutionMechanical = {
    JobTitle:"CAD Technician/Estimator",
    Company:"Solution Mechanical",
    CompanyLocation:"Mobile, AL",
    StartMonthYear:"January 2012",
    EndMonthYear:"February 2017",
    Details:[""],
} as IJob;

const EngulfUMC = {
    JobTitle:"Worship Leader",
    Company:"Engulf United Methodist Church",
    CompanyLocation:"Gulf Shores, AL",
    StartMonthYear:"November 2010",
    EndMonthYear:"April 2012",
    Details:[""],
} as IJob;

const BatchelorsMechanical = {
    JobTitle:"CAD Technician",
    Company:"Batchelor's Mechanical Contractors",
    CompanyLocation:"Loxley, AL",
    StartMonthYear:"September 2008",
    EndMonthYear:"December 2011",
    Details:[""],
} as IJob;

export const JobsData = [
    Epic,
    Vine,
    EliteMechanical,
    SolutionMechanical,
    EngulfUMC,
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