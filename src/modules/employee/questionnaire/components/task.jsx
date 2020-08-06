import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 20px;
  padding:0 20px;
  margin: 8px;
  height:39px;
  display:flex;
  align-items : center;
  transition: background-color 0.2s ease;
  transition: color 0.2s ease;
  color: ${props => props.isDragging ? 'white' : '#32325d'};
  background-color: ${props => props.isDragging ? '#0C41B3' : 'white'}
`;

export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index} >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >

            {this.props.task.content}
          </Container>
        )}

      </Draggable>)
  }
}