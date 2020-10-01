import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from './task';
const Container = styled.div`
  margin: 0px 8px;
  min-width: 280px;
  border-top: 1px solid #DBE4F0;
  border-right:  1px solid #DBE4F0;
  border-left:  1px solid #DBE4F0;
  border-bottom:${props => props.indexColumn === 3 ? "1px solid #DBE4F0" : ""};
  border-top-left-radius: ${props => props.indexColumn === 0 ? "24px" : "0px"} ;
  border-top-right-radius: ${props => props.indexColumn === 0 ? "24px" : "0px"} ;
  border-bottom-right-radius: ${props => props.indexColumn === 3 ? "24px" : "0px"} ;
  border-bottom-left-radius: ${props => props.indexColumn === 3 ? "24px" : "0px"} ;
  display: block; 
  display:flex;
`;
const Title = styled.div`
  margin-bottom:-0.5rem;
  padding: 0px 8px;
  display: flex;
  justify-content:center;
  align-items:center;
  border-right :1px solid #DBE4F0;
  max-height:100%;
  width: 200px;
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
color: #7C7C7C;

`;
const TaskList = styled.div`
  transition: background-color 0.2s ease;
  min-height: 100px;
  display : flex;
  flex-wrap:wrap;
  overflow: auto;
  width: 100%;
  max-width:100%;
  border-top-right-radius: ${props => props.indexColumn === 0 ? "24px" : "0px"};
  border-bottom-right-radius: ${props => props.indexColumn === 3 ? "24px" : "0px"}
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
      <Container indexColumn={this.props.indexColumn}>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}
          direction="horizontal"
        >
          {(provided, snapshot) => (
            <TaskList
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
              indexColumn={this.props.indexColumn}
            >
              <InnerList tasks={this.props.tasks} />
              {provided.placeholder}
            </TaskList>
          )}

        </Droppable>
      </Container>)


  }
}