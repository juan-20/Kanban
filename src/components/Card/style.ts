import styled from 'styled-components';

export const Container = styled.div`
    color:  ${props => props.theme.colors.text};
    background:  ${props => props.theme.colors.background};
    border-radius: 5px;
    margin: 20px 10px 20px 10px;
    height: 90px;
    flex-grow: 0;
    flex-shrink: 0;
    cursor: grab;
    .content{
        margin: 0px 10px 0px 10px;

    }
    header{
        display: flex;
        justify-content: space-between;
        >p{
            margin-top: 15px;
            width: 250px;    
            height: 18px;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
    
    footer{
        display: flex;
        gap: 10px;
        margin-top: 15px;
        > label {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            font-size: 12px;
            width: 60px;
            height: 24px;
            font-weight: 700;
            line-height: 14px;
            /* identical to box height */
            letter-spacing: -0.02em;
            cursor: grab;
        }  
        
    }
    
    .trash{
        margin-top: 15px;
        display: none;
    }
    :hover{
    .trash{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 24px;
            width: 24px;
            border-radius: 20px;
            border: 1px #fff solid;
            color: #fff;
            cursor: pointer;
            :hover{
                background: #f05623;
            }
        }
    
}
    

`;
