import styled from 'styled-components';

export const Nav = styled.nav`

background: ${props => props.theme.colors.background};

        .content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 113px;
            margin-bottom: 1rem;
            margin-right: 30px;
            margin-left: 30px;
            >h1{
            color: ${props => props.theme.colors.title};
            }
      
        }

`;
