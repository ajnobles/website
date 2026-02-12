const Job = (props: JobProps) => {
    
    let endMonth = props.EndMonthYear ? props.EndMonthYear : "Present";

    return (
        <>
            <h5>{props.Company}  {props.JobTitle}</h5>
            <ul>
                <li>{props.CompanyLocation}</li>
                <li>{props.StartMonthYear} - {endMonth}</li>
            </ul>
        </>);
}

interface JobProps {
    JobTitle: string,
    Company: string,
    CompanyLocation: string,
    StartMonthYear: string,
    EndMonthYear?: string
}

export default Job;