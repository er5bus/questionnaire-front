import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from "react-redux";
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
import { askContinueScreen, changePage, fetchFoodCategories, fetchFoods } from '../actions';
import { zonePeriodeData } from '../constants';
import Column from './column';


const Container = styled.div`
display: flex;
justify-content: space-between;
width:100%;
flex-wrap: wrap;
flex-direction:column;
height: ${props => props.isHeight ? '100%' : 'auto'}
`
const PeriodeTitle = styled.div`
    display:flex;
    justify-content:center;
    align-items center;
    width:100%;
    height: 100px;
    font-size:30px;
    color: #0C41B3
`
const ArrowWrapper = styled.div`
 width: 30px;
 heghit : 100px;
 display:flex;
 justify-content:center;
 align-items center;
 margin: 0 20px;
`


class NutritionalPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: zonePeriodeData,
            isLoadingFood: true,
            foodExist: false,
            periode: 1,
            dataMidi: zonePeriodeData,
            dataSoir: zonePeriodeData,
            dataNuit: zonePeriodeData
        };

    }
    renderNameState(periode) {
        switch (periode) {
            case 1:
                return "data"
            case 2:
                return "dataMidi"
            case 3:
                return "dataSoir"
            case 4:
                return "dataNuit"

            default:
                break;
        }
    }
    renderState(periode) {
        switch (periode) {
            case 1:
                return this.state.data
            case 2:
                return this.state.dataMidi
            case 3:
                return this.state.dataSoir
            case 4:
                return this.state.dataNuit

            default:
                break;
        }
    }
    renderTitle(periode) {
        switch (periode) {
            case 1:
                return "Matin"
            case 2:
                return "Midi"
            case 3:
                return "Soir"
            case 4:
                return "Nuit"

            default:
                break;
        }
    }
    componentDidMount() {
        //this.props.fetchFoodCategories()
    }
    componentDidUpdate(prevProps) {

    }
    componentWillReceiveProps(nextProps) {
        // let categoriesFood = [];
        // let foodsFood = []
        // if (nextProps.foodCategories !== this.props.foodCategories) {
        //     if (nextProps.foodCategories["categories"].length > 0) {
        //         categoriesFood = nextProps.foodCategories["categories"];


        //         this.props.fetchFoods()
        //     } else {
        //         this.setState({ isLoadingFood: false })
        //     }
        // }
        // if (nextProps.foods !== this.props.foods) {
        //     if (nextProps.foods["foods"].length > 0) {
        //         foodsFood = nextProps.foods["foods"];
        //         let customCatgorie = categoriesFood.map(el => {
        //             return {}
        //         } )


        //     } else {
        //         this.setState({ isLoadingFood: false })
        //     }

        // }

    }
    onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const start = this.renderState(this.state.periode).columns[source.droppableId];
        const finish = this.renderState(this.state.periode).columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...finish,
                taskIds: newTaskIds,
            };

            const newState = {
                ...this.renderState(this.state.periode),
                columns: {
                    ...this.renderState(this.state.periode).columns,
                    [newColumn.id]: newColumn,
                },
            };

            this.setState({ [this.renderNameState(this.state.periode)]: newState });
            return;
        }
        // Try to move between nutritional droppable
        if (!finish.id.includes("column") && !draggableId.includes(finish.id)) {
            return
        }
        // Moving from one list to another
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        };

        const newState = {
            ...this.renderState(this.state.periode),
            columns: {
                ...this.renderState(this.state.periode).columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };
        this.setState({ [this.renderNameState(this.state.periode)]: newState });




    }
    render() {
        console.log(this.renderState(this.state.periode));

        const zoneData = this.renderState(this.state.periode).columnOrder.slice(0, 4);
        const nutritional = this.renderState(this.state.periode).columnOrder.slice(4, this.renderState(this.state.periode).columnOrder.length);
        return (
            <>
                <PeriodeTitle>
                    <ArrowWrapper><i className="fas fa-arrow-left" onClick={() => {
                        if (this.state.periode > 1) {
                            this.setState({ periode: this.state.periode - 1 })
                        }
                    }} style={{
                        fontSize: 19
                    }}></i> </ArrowWrapper>

                    {this.renderTitle(this.state.periode)}
                    <ArrowWrapper> <i className="fas fa-arrow-right" onClick={() => {
                        if (this.state.periode < 4) {
                            this.setState({ periode: this.state.periode + 1 })
                        }
                    }} style={{
                        fontSize: 19
                    }}></i> </ArrowWrapper>
                </PeriodeTitle>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Row>
                        <Col xs="6" >
                            <Container className=" justify-content-center " isHeight={true} >
                                {zoneData.map(columnId => {
                                    const column = this.renderState(this.state.periode).columns[columnId];
                                    const tasks = column.taskIds.map(taskId => this.renderState(this.state.periode).tasks[taskId])
                                    return <Column key={column.id} column={column} tasks={tasks} />
                                })}
                            </Container>
                        </Col>
                        <Col xs="6">
                            <Container className=" justify-content-center" isHeight={false}>

                                {nutritional.map(columnId => {
                                    const column = this.renderState(this.state.periode).columns[columnId];
                                    const tasks = column.taskIds.map(taskId => this.renderState(this.state.periode).tasks[taskId])
                                    return <Column key={column.id} column={column} type={this.state.type} tasks={tasks} />
                                })}
                            </Container>
                        </Col>
                    </Row>

                </DragDropContext>
            </>
        )
    }

}
const mapStateToProps = state => state.questionnaire

export default connect(mapStateToProps, { askContinueScreen, changePage, fetchFoodCategories, fetchFoods })(NutritionalPage) 