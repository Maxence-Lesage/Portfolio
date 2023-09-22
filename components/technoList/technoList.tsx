import styled from "styled-components";
import TechnoIcon from "../technoIcon/technoIcon";

const Tags = styled.div`
display: flex;
gap: 5px;
`

function TechnoList({ tags }: { tags: string[] }) {

    const tagslist = tags.map(tag => {
        return <TechnoIcon key={tag} name={tag} />
    });

    return (
        <Tags>
            {tagslist}
        </Tags>
    );
}

export default TechnoList;