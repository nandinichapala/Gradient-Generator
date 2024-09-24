// Write your code here
import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, changeDirection, isActive} = props

  const {value, displayText} = gradientDirectionDetails
  const onClickChangeDirection = () => {
    changeDirection(value)
  }

  return (
    <ListItem>
      <DirectionButton
        type="button"
        isActive={isActive}
        onClick={onClickChangeDirection}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
