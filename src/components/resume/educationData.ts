const OSU = {
    SchoolName:"Oregon State University",
    SchoolLocation:"Corvallis, OR",
    Degree:"Bachelor of Science",
    Discipline:"Computer Science",
    GPA:3.90,
    StartMonthYear:"January 2017",
    EndMonthYear:"December 2018",
    RelevantCourseWork: [
        "Introduction to Computer Science I & II", 
        "Computer Architecture and Assembly", 
        "Web Development", 
        "Discrete Structures in Computer Science", 
        "Data Structures", 
        "Analysis of Algorithms", 
        "Introduction to Databases", 
        "Operating Systems I, Software Engineering I & II", 
        "Introduction to Parallel Programming",
    ],
} as IEducation;

const USM = {
    SchoolName:"University of Southern Mississippi",
    SchoolLocation:"Hattiesburg, MS",
    Degree:"Bachelor of Music",
    Discipline:"Music Industry",
    GPA:3.31,
    StartMonthYear:"August 2000",
    EndMonthYear:"May 2006",
    RelevantCourseWork:[
        "Introduction to Computing", 
        "MIDI Concepts & Programming",
    ],
} as IEducation;

export const EducationData = [
    OSU,
    USM,
]

export interface IEducation
{
    SchoolName: string,
    SchoolLocation: string,
    Degree: string,
    Discipline: string,
    RelevantCourseWork: string[],
    GPA: number,
    StartMonthYear: string,
    EndMonthYear: string,
}