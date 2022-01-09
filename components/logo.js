import Link from 'next/link'
import Image from 'next/image'
import {Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const Logobox = styled.span `
font-weight: in bold;
font-size: 18px;
display: inline-flex;
align-items: center; 
height: 30px;
line-height: 20px;
padding: 10px;

&:hover img {
  transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg  = `/images/footprint${useColorModeValue('', '-dark' )}.png` 

  return (
    <Link href = "/"> 
      <a>
        <Logobox>
          <Image src = {footPrintImg} width={20} height={20} alt="logo"/>
        <Text
          color ={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily = 'M PLUS Rounded1c'
          fontWeight = "bold"
          ml = {3}
          >
            Mateo Estrada 
          </Text>
        </Logobox>
      </a> 
    </Link>
  )

}

export default Logo 