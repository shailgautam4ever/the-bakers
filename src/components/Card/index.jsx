import { styled } from "styled-components";
import { Col } from "../../styled/common";

const Card = ({image, name})=>{
    return(
        <CardContainer>
           <ImgContainer src={image} alt="No picture found" />
           {/* {
            name?<span className="type">{name}</span>:null
           } */}
           
            <ItemInfoContainer>
                <span>Choclate Fudge Cake</span>
                <span>Rs. 750</span>
            </ItemInfoContainer>
           

        </CardContainer>
    )
}

export default Card;

const CardContainer = styled.div`
    /* background-color: pink; */
    /* height: 280px; */
    display: flex;
    flex-direction: column;
    width: 280px;
    border: 2px solid #eee;
    border-radius: 10px;
    text-align: center;

    .type{
        /* width: 100%; */
        padding: 15px;
        font-weight: 500;
        
    }

`

const ImgContainer = styled.img`
    /* height: 250px; */
    width: 100%;
`

const ItemInfoContainer = styled(Col)`
    background-color: pink;
    align-items: flex-start;
    padding: 10px;
`

