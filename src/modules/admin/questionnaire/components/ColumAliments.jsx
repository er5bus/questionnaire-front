import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from './task';
const Container = styled.div`
  min-width: 280px;
  display: block;
  background:#FFFFFF;
  box-shadow: 0px 0px 45px rgba(219, 228, 240, 0.21);
  border-radius: 24px;
  padding:20px;
  margin-bottom:19px
`;
const Title = styled.h3`

font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
color: #18223D;
`;
const TitleAliment = styled.div`
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 24px;
color: #18223D;
margin-bottom:9px
`

const TaskList = styled.div`
  margin-top: 8px;
  flex-grow:1;
  height:auto;
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

export default class ColumnAliments extends React.Component {
    render() {
        return (
            <Container>
                {this.props.indexColumn === 0 && <TitleAliment> Les aliments </TitleAliment>}
                <div style={{
                    padding: '0px 10px'
                }}>
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
                </div>
            </Container>)


    }
}