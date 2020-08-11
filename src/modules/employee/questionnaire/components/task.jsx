import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Popover, PopoverBody } from "reactstrap";
import styled from 'styled-components';


const Container = styled.div`
 
  border-radius: 7px;
  margin: 8px;
  height:65px;
  width: 65px;
  border:  1px solid ${props => props.toggled ? "#062484" : "#DBE4F0"};
  display:flex;
  align-items : center;
  justify-content: center;
  background: #FFFFFF;
  transition: background-color 0.2s ease;
  transition: border 0.7s ease;
  &:focus {
    outline:none;
    border-color: #062484;
  }
`;

export default class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tooltipOpen: false,
    }
  }
  toggle = () => this.setState({ tooltipOpen: !this.state.tooltipOpen })
  render() {
    return (
      <>
        <Draggable draggableId={this.props.task.id} index={this.props.index} >
          {(provided, snapshot) => (

            <Container
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}
              id={`Tooltip-${this.props.task.id}`}
              onMouseLeave={() => this.setState({ tooltipOpen: false })
              }
              onMouseEnter={() => this.setState({ tooltipOpen: true })
              }
              toggled={this.state.tooltipOpen}
            >
              <img src={"http://predicta-alim.fulltech.io/assets/uploads/163a44ace49b0be03aa93435425522f4.jpeg"} id={`Tooltip-${this.props.task.id}-IMG`} style={{
                height: 30,
                width: 30
              }} />

            </Container>
          )}

        </Draggable>

        <Popover
          placement="bottom"
          isOpen={this.state.tooltipOpen}
          target={`Tooltip-${this.props.task.id}`}
          toggle={this.toggle}
          popperClassName="popver-style"
          innerClassName="inner-popver-style"
        >
          <PopoverBody>
            {this.props.task.content}
          </PopoverBody>
        </Popover>
      </>
    )
  }
}