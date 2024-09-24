// Style your elements here
import styled from 'styled-components'

export const GradientColorGenerator = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  background-image:linear-gradient(${props => props.gradientValue});
`
export const GradientColorGeneratorContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  font-family:Roboto;
  align-items:center;
  width:85%;
  @media screen and (max-width:768px){
    width:90%;
    max-width:550px;
  }
`
export const Heading = styled.h1`
  color:#ffffff;
  font-weight:bold;
  font-size:22px;
  text-align:center;
  @media screen and (min-width:768px){
    font-size:36px;
  }
`
export const ChooseDirection = styled.p`
  font-size:20px;
  font-weight:500;
  color:#ededed;
`
export const UnorderedList = styled.ul`
  display:flex;
  flex-wrap:wrap;
  padding:0px;
  justify-content:space-between;
  list-style-type:none;
`

export const ColorPickerHeading = styled.p`
  font-size:20px;
  font-weight:500;
  color:#ededed;
`
export const ColorPickerContainer = styled.div`
  display:flex;
  min-width:320px;
  justify-content:space-around;
`
export const ColorPickerInputContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`

export const ColorPickerValue = styled.p`
  font-size:18px;
  color:#ffffff;
  font-weight:500;
`

export const CustomColorInput = styled.input`
  height:50px;
  width:100px;
  border:none;
  border-radius:10px;
  background-color:transparent;
  outline:none;
  cursor:pointer;
`

export const GenerateButton = styled.button`
  background-color:#00c9b7;
  color:#1e293b;
  cursor:pointer;
  outline:none;
  border:none;
  border-radius:10px;
  font-size:20px;
  padding:12px 24px 12px 24px;
  font-weight:600;
  margin-top:20px;
  min-width:25px;
`
