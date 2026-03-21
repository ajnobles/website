const SectionSubHeader = (props: SectionSubHeaderProps) => {
    return (
    <>
        <h4 className="text-uppercase text-center _fontMontserrat700"
            style={{marginBottom: "20px"}}
        >
            {props.Title}
        </h4>
    </>);
}

export default SectionSubHeader;

interface SectionSubHeaderProps {
    Title: string
}