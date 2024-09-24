// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  width:120px;
  margin-right:10px;
  @media screen and (max-width:768px){
    width:48%;
    margin-right:5px;
    
  }
`
export const DirectionButton=styled.button`
  width:100%;
  background-color:#ffffff;
  color:${props=>(props.isActive?'#334155':'#1e293b')};
  opacity:${props=>(props.isActive?1:0.5)};
  padding:12px 24px 12px 24px;
  margin-bottom:10px;
  font-size:15px;
  font-weight:500;
  border:none;
  border-radius:5px;

`