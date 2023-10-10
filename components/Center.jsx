import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 1170px;
    margin: 0 auto;
`;

export default function Center({ children }) {
    return <Wrapper>{children}</Wrapper>;
}
