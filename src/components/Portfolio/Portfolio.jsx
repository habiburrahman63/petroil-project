import React from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import portImg from "../../assets/portfolio1.png"
import portImg2 from "../../assets/portfolio2.png"
import portImg3 from "../../assets/portfolio3.png"
import portImg4 from "../../assets/portfolio4.png"

const Portfolio = () => {
  return (
    <div className='py-[116px]'>
     <Container>
        <Flex className="items-center justify-between">
            <img src={portImg} alt="portImg" />
            <img src={portImg2} alt="portImg2" />
            <img src={portImg3} alt="portImg3" />
            <img src={portImg4} alt="portImg4" />
        </Flex>
     </Container>
    </div>
  )
}

export default Portfolio
