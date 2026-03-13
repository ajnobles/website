
const SectionHeader = (props: SectionHeaderProps) => {
    return (
    <div style={{marginBottom: "30px"}}>
        <h2 className="text-uppercase text-center _fontMontserrat700">
            {props.Title}
            {props.Children ? props.Children : <></>}
        </h2>
    </div>);
}

export default SectionHeader;

interface SectionHeaderProps {
    Title: string,
    Children?: any[]
}