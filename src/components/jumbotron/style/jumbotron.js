import styled from 'styled-components/macro'

export const Inner = styled.div`
    display: flex;   
    align-items : center ; 
    flex-direction : ${({ direction }) => direction } ;
    justify-content : space-between ;
    max-width : 1100px ;
    margin : auto ;
    width : 100% ;

    @media ( max-width : 1000px ){
        flex-direction : column ; 
    }
`;
export const Pane = styled.div`
    width:50% ;

    @media ( max-width : 1000px ){
        width:100% ;
        padding : 0 45px;
        text-align:center ;
    }
`;

export const Title = styled.h1`
    font-size : 50px ;
    line-heigth : 1.1 ;
    margine-bottom : 8px ;

    @media ( max-width : 600px ){
        font-size : 35px ;
    }
`;

export const SubTitle = styled.h2`
    font-size : 26px ;
    font-weight : normal ;
    line-heigth : normal ;

    @media ( max-width : 600px ){
        font-size : 18px ;
    }
`;

export const Image = styled.img`
    max-width:100% ;
    heigth : auto ;
`;

export const Item = styled.div`
    display : flex ;
    border-bottom : 8px solid #222 ;
    padding : 50px 5% ;
    color : white ;
    overflow : hidden ;
`;

export const Container = styled.div`

    // last image will get quick fix because of which distance disturbed , so beow medi query will resolve(1:02:15)
    @media ( max-width : 1000px ){
        ${Item}:last-of-type h2 {
            margine-bottom : 50px ;
        }
    }
`;