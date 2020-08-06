import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from "react-redux";
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
import Loader from '../../../../components/Loader';
import { askContinueScreen, changePage, fetchFoodCategories, fetchFoods, updateDeSelectedScoreNutrition, updateSelectedScoreNutrition } from '../actions';
import { zonePeriodeData } from '../constants';
import Column from './column';


const Container = styled.div`
display: flex;
justify-content: ${props => props.isHeight ? 'space-around' : 'space-between'};
width:100%;
flex-wrap: wrap;
flex-direction:column;
height: ${props => props.isHeight ? '100%' : 'auto'};
box-shadow: 6px 10px 23px -5px rgba(0,0,0,0.66);
padding:20px;
border-radius: 20px;
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
const TitleTable = styled.div`
 width:100%;
 padding: 0 20px 10px;
 height:50px;
 font-weight: bold;
 color:#32325d;
 font-size: 1.5 rem

`

class NutritionalPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: zonePeriodeData,
            dataMidi: zonePeriodeData,
            dataSoir: zonePeriodeData,
            dataNuit: zonePeriodeData,
            isLoadingFood: true,
            foodExist: false,
            periode: 1,
            testData: []

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
                return "Petit déjeuner"
            case 2:
                return "Déjeuner"
            case 3:
                return "Collation (matin ou soir)"
            case 4:
                return "Diner"
            default:
                break;
        }
    }
    componentDidMount() {
        this.props.fetchFoodCategories()
    }
    componentDidUpdate(prevProps) {

    }
    formattedTabel = (orignalTable, tableToFormat) => {
        let copyOriginalTable = JSON.parse(JSON.stringify(orignalTable));

        if (tableToFormat.length == 0) {
            return orignalTable
        }
        let columOrder = tableToFormat.map(el => el.id);
        copyOriginalTable.columnOrder.push(...columOrder);
        let columns = tableToFormat.map(elementToformat => {
            let idElment = elementToformat.id;
            let titleElment = elementToformat.name
            let tasksId = elementToformat.foods.map(task => `${task.category_id}-${task.id}`)
            return {
                [`${idElment}`]: {
                    id: idElment,
                    title: titleElment,
                    taskIds: tasksId
                }
            }
        });
        columns.forEach(element => {
            Object.assign(copyOriginalTable.columns, element)
        });

        let tasks = tableToFormat.map(ele => {
            let tasksCat = ele.foods.map(food => {
                let foodId = `${food.category_id}-${food.id}`;
                let content = food.name;
                let description = food.description
                let selected_score = food.selected_score;
                let deselected_score = food.deselected_score;
                let uniqueId = food.id
                return {
                    [`${foodId}`]: {
                        id: foodId,
                        content: content,
                        description: description,
                        selected_score: selected_score,
                        deselected_score: deselected_score,
                        uniqueId: uniqueId,
                    }
                }
            });
            return [...tasksCat]
        })

        let tasksToPut = []
        tasks.forEach(element => {
            element.forEach(el => {
                tasksToPut.push(el)
            })
        });

        tasks.forEach(element => {
            Object.assign(copyOriginalTable.tasks, ...element)
        });

        let deselectedScore = 0;

        tasksToPut.forEach(element => {
            let taskScore = 0;
            if (element[Object.keys(element)[0]]["deselected_score"] !== null) {
                taskScore = Number(element[Object.keys(element)[0]]["deselected_score"])
            }
            deselectedScore = deselectedScore + taskScore
        });
        this.props.updateDeSelectedScoreNutrition({ type: "add", value: deselectedScore })
        return copyOriginalTable


    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.deselectedScoreNut, "desslll");
        console.log(nextProps.selectedScoreNut);


        let categoriesFood = [];
        let filtredFoods = [];
        let breakfast = [];
        let lunch = [];
        let snack = [];
        let dinner = [];
        if (nextProps.foodCategories !== this.props.foodCategories) {
            categoriesFood = Object.entries(nextProps.foodCategories).map((el) => el[1]);
            filtredFoods = categoriesFood.filter(el => el.foods.length !== 0 && el.meals.length !== 0);
            breakfast = filtredFoods.filter(el => el.meals.filter(meal => meal.id == 4).length > 0);
            lunch = filtredFoods.filter(el => el.meals.filter(meal => meal.id == 5).length > 0);
            snack = filtredFoods.filter(el => el.meals.filter(meal => meal.id == 3).length > 0);
            dinner = filtredFoods.filter(el => el.meals.filter(meal => meal.id == 6).length > 0);
            this.setState({ data: this.formattedTabel(zonePeriodeData, breakfast) }, () => {
                this.setState({ dataMidi: this.formattedTabel(zonePeriodeData, lunch) }, () => {
                    this.setState({ dataSoir: this.formattedTabel(zonePeriodeData, snack) }, () => {
                        this.setState({ dataNuit: this.formattedTabel(zonePeriodeData, dinner) }, () => {
                            this.setState({ isLoadingFood: false })
                        })
                    })
                })

            })


        }


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
        if (!finish.id.toString().includes("column") && !draggableId.toString().slice(0, draggableId.toString().indexOf('-')).includes(finish.id.toString())) {
            return
        }
        if(start.id.toString().includes("column")) {
            if(!finish.id.toString().includes("column")) {
                let draggable = this.renderState(this.state.periode).tasks[draggableId];
                let selectedScore = 0;
                let deselectedScore = 0;
    
                if (draggable.deselected_score !== null) {
                    deselectedScore = Number(draggable.deselected_score);
    
    
                }
                if (draggable.selected_score !== null) {
                    selectedScore = Number(draggable.selected_score);
    
    
                }
                this.props.updateDeSelectedScoreNutrition({ type: "add", value: deselectedScore })
                this.props.updateSelectedScoreNutrition({ type: "subs", value: selectedScore })
            }

        } else {
            if (finish.id.toString().includes("column")) {
                let draggable = this.renderState(this.state.periode).tasks[draggableId];
                let selectedScore = 0;
                let deselectedScore = 0;
    
                if (draggable.deselected_score !== null) {
                    deselectedScore = Number(draggable.deselected_score);
    
    
                }
                if (draggable.selected_score !== null) {
                    selectedScore = Number(draggable.selected_score);
    
                }
                this.props.updateDeSelectedScoreNutrition({ type: "subs", value: deselectedScore })
                this.props.updateSelectedScoreNutrition({ type: "add", value: selectedScore })
            } 
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

        const zoneData = this.renderState(this.state.periode).columnOrder.slice(0, 4);
        const nutritional = this.renderState(this.state.periode).columnOrder.slice(4, this.renderState(this.state.periode).columnOrder.length);
        return (
            <>
                {this.state.isLoadingFood ? <Loader></Loader> : <>
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
                            <Col xs="6" className="shadow-nutrition" >

                                <Container isHeight={true} >
                                    <TitleTable> Déplacer les aliments dans le tableau </TitleTable>
                                    {zoneData.map(columnId => {
                                        const column = this.renderState(this.state.periode).columns[columnId];
                                        const tasks = column.taskIds.map(taskId => this.renderState(this.state.periode).tasks[taskId])
                                        return <Column key={column.id} column={column} tasks={tasks} />
                                    })}
                                </Container>
                            </Col>
                            <Col xs="6" className="shadow-nutrition">

                                <Container className=" justify-content-center" isHeight={false}>
                                    <TitleTable>Les aliments </TitleTable>
                                    {nutritional.map(columnId => {
                                        const column = this.renderState(this.state.periode).columns[columnId];
                                        const tasks = column.taskIds.map(taskId => this.renderState(this.state.periode).tasks[taskId])
                                        return <Column key={column.id} column={column} type={this.state.type} tasks={tasks} />
                                    })}
                                </Container>
                            </Col>
                        </Row>

                    </DragDropContext>
                </>}

            </>
        )
    }

}
const mapStateToProps = state => state.questionnaire

export default connect(mapStateToProps, { askContinueScreen, changePage, fetchFoodCategories, fetchFoods, updateDeSelectedScoreNutrition, updateSelectedScoreNutrition })(NutritionalPage) 