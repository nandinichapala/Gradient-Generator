import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientColorGenerator,
  GradientColorGeneratorContainer,
  Heading,
  ChooseDirection,
  UnorderedList,
  ColorPickerHeading,
  ColorPickerContainer,
  ColorPickerInputContainer,
  ColorPickerValue,
  CustomColorInput,
  GenerateButton,
} from './styledComponents'
const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onChangeFromColorInput = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColorInput = event => {
    this.setState({toColorInput: event.target.value})
  }

  changeDirection = direction => {
    this.setState({activeGradientDirection: direction})
  }
  
  onClickGenerateColor = () => {
    const {activeGradientDirection, fromColorInput, toColorInput} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput},${toColorInput}`,
    })
  }
  render() {
    const {
      activeGradientDirection,
      fromColorInput,
      toColorInput,
      gradientValue,
    } = this.state
    return (
      <GradientColorGenerator
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <GradientColorGeneratorContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <ChooseDirection>Choose Direction</ChooseDirection>
          <UnorderedList>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                gradientDirectionDetails={eachItem}
                changeDirection={this.changeDirection}
                isActive={activeGradientDirection === eachItem.value}
              />
            ))}
          </UnorderedList>
          <ColorPickerHeading>Pick the Colors</ColorPickerHeading>
          <ColorPickerContainer>
            <ColorPickerInputContainer>
              <ColorPickerValue>{fromColorInput}</ColorPickerValue>
              <CustomColorInput
                type="color"
                value={fromColorInput}
                onChange={this.onChangeFromColorInput}
              ></CustomColorInput>
            </ColorPickerInputContainer>
            <ColorPickerInputContainer>
              <ColorPickerValue>{toColorInput}</ColorPickerValue>
              <CustomColorInput
                type="color"
                value={toColorInput}
                onChange={this.onChangeToColorInput}
              ></CustomColorInput>
            </ColorPickerInputContainer>
          </ColorPickerContainer>
          <GenerateButton type="button" onClick={this.onClickGenerateColor}>
            Generate
          </GenerateButton>
        </GradientColorGeneratorContainer>
      </GradientColorGenerator>
    )
  }
}

export default GradientGenerator
