import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from './task';
const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  min-width: 280px;
  display: block
`;
const Title = styled.h3`
  margin-bottom:-0.5rem;
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid lightgrey;

`;
const TaskList = styled.div`
  padding: 8px;
  margin-top: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  flex-grow:1;
  min-height: 100px;
  display : flex;
  flex-wrap:wrap;
  max-width:100%;
`;
class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.tasks === this.props.tasks) {
      return false
    }
    return true
  }
  render() {
    return this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)
  }
}

export default class column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}
          direction="horizontal"
        >
          {(provided, snapshot) => (
            <TaskList
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              <InnerList tasks={this.props.tasks} />
              {provided.placeholder}
            </TaskList>
          )}

        </Droppable>
      </Container>)


  }
}