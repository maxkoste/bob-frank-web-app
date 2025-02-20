
type ContentProps = {
    renderedContent: React.ReactNode; // Specify the type of the renderedContent prop
};

function Content({ renderedContent }: ContentProps) {
    return (
        <>
            {renderedContent} {/* This will render the passed ReactNode */}
        </>
    );
}

export default Content