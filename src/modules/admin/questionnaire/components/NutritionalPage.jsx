
import Steps from 'awesome-steps';
import 'awesome-steps/dist/style.css';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from "react-redux";
import { Button, Col, Row } from 'reactstrap';
import styled from 'styled-components';
import Loader from '../../../../components/Loader';
import { askContinueScreen, changePage, fetchFoodCategories, fetchFoods, saveNutriState, updateDeSelectedScoreNutrition, updateSelectedScoreNutrition } from '../actions';
import { zonePeriodeData } from '../constants';
import ColumnAliments from './ColumAliments';
import Column from './column';

const Container = styled.div`
display: flex;
width:100%;
flex-wrap: wrap;
flex-direction:column;
height: 100%;
padding:20px;
background: #FFFFFF;
box-shadow: 0px 0px 45px rgba(219, 228, 240, 0.21);
border-radius: 24px;
`
const ContainerAliments = styled.div`
display: flex;
justify-content: ${props => props.isHeight ? 'space-around' : 'space-between'};
width:100%;
flex-wrap: wrap;
flex-direction:column;
height: ${props => props.isHeight ? '100%' : 'auto'};
box-shadow: 0px 0px 45px rgba(219, 228, 240, 0.21);
border-radius: 24px;
`
const PeriodeTitle = styled.div` 
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 24px;
color: #18223D;
margin: 35px 9px 10px;

`

const TitleTable = styled.div`
font-family: Montserrat;
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 20px;
margin: 0px 9px 10px 

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
            periode: 0,

        };

    }
    renderNameState(periode) {
        switch (periode) {
            case 0:
                return "data"
            case 1:
                return "dataMidi"
            case 2:
                return "dataNuit"
            case 3:
                return "dataSoir"

            default:
                break;
        }
    }
    renderState(periode) {
        switch (periode) {
            case 0:
                return this.state.data
            case 1:
                return this.state.dataMidi
            case 2:
                return this.state.dataNuit
            case 3:
                return this.state.dataSoir

            default:
                break;
        }
    }
    renderTitle(periode) {
        switch (periode) {
            case 0:
                return "Petit déjeuner"
            case 1:
                return "Déjeuner"
            case 2:
                return "Dîner"
            case 3:
                return "Collation (matin ou soir)"
            default:
                break;
        }
    }

    scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    componentDidMount() {
        this.props.fetchFoodCategories()
        this.setState({ periode: this.props.periodeNut })
    }

    formattedTabel = (orignalTable, tableToFormat, periode) => {
        let copyOriginalTable = JSON.parse(JSON.stringify(orignalTable));

        if (tableToFormat.length == 0) {
            return orignalTable
        }
        let savedData = this.props[`${this.renderIdPeriode(periode)}`];

        let selectedNutri = []
        let selectedColumn = [[], [], [], []]
        if (savedData) {
            selectedNutri = savedData.selectedNutri
            selectedColumn = savedData.selectedColumn
        }


        let orderColum = 0
        for (const key in copyOriginalTable.columns) {
            copyOriginalTable.columns[key].taskIds = selectedColumn[orderColum];
            orderColum++
        }

        let columOrder = tableToFormat.map(el => el.id);
        copyOriginalTable.columnOrder.push(...columOrder);
        let columns = tableToFormat.map(elementToformat => {
            let idElment = elementToformat.id;
            let titleElment = elementToformat.name
            let tasksId = elementToformat.foods.map(task => `${task.category_id}-${task.id}`)
            tasksId = tasksId.filter(el => selectedNutri.indexOf(el) == -1)
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
                let uniqueId = food.id;
                let image_url = food.image_url
                return {
                    [`${foodId}`]: {
                        id: foodId,
                        content: content,
                        description: description,
                        selected_score: selected_score,
                        deselected_score: deselected_score,
                        uniqueId: uniqueId,
                        image_url: image_url
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


        if (this.props.periodeNut === 0) {
            this.props.updateDeSelectedScoreNutrition({ type: "add", value: deselectedScore })
        }

        return copyOriginalTable


    }
    renderIdPeriode = (periode) => {
        switch (periode) {
            case 0:
                return "Breakfast";
            case 1:
                return "Lunch";
            case 2:
                return "Dinner";
            case 3:
                return "Snack";
            default:
                break;
        }
    }
    saveData = () => {
        let i = 1;
        let selectedColumn = []
        let selectedNutri = []
        while (i < 5) {
            selectedColumn.push(this.renderState(this.state.periode).columns[`column-${i}`].taskIds);
            selectedNutri = [...selectedNutri, ...this.renderState(this.state.periode).columns[`column-${i}`].taskIds];
            i++
        }
        let payloadToSave = {
            periodeNut: this.state.periode === 3 ? 3 : this.state.periode + 1,
            [`${this.renderIdPeriode(this.state.periode)}`]: {
                selectedColumn: selectedColumn,
                selectedNutri: selectedNutri
            }
        }
        this.props.saveNutriState(payloadToSave)

        this.setState({
            periode: this.state.periode < 3 ? this.state.periode + 1 : this.props.changePage(8)
        }, () => {
            this.scrollToTop()
        });
    }
    componentWillReceiveProps(nextProps) {
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
            this.setState({ data: this.formattedTabel(zonePeriodeData, breakfast, 0) }, () => {
                this.setState({ dataMidi: this.formattedTabel(zonePeriodeData, lunch, 1) }, () => {
                    this.setState({ dataSoir: this.formattedTabel(zonePeriodeData, snack, 3) }, () => {
                        this.setState({ dataNuit: this.formattedTabel(zonePeriodeData, dinner, 2) }, () => {
                            this.setState({ isLoadingFood: false })
                           

                        })
                    })
                })
            })


        }
        if (nextProps.deselectedScoreNut !== this.props.deselectedScoreNut) {

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
        if (start.id.toString().includes("column")) {
            if (!finish.id.toString().includes("column")) {
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
    handlePeriode = (periode) => {
        if (periode > this.state.periode) {
           
            
            this.saveData()
        }
        this.setState({ periode: periode })
    }
    render() {

        const zoneData = this.renderState(this.state.periode).columnOrder.slice(0, 4);
        const nutritional = this.renderState(this.state.periode).columnOrder.slice(4, this.renderState(this.state.periode).columnOrder.length);
        return (
            <>
                {this.state.isLoadingFood ? <Loader></Loader> : <>
                    <Row>
                        <Col md={{ size: 6, offset: 3 }}>
                            <Steps current={this.state.periode}
                                labelPlacement={"vertical"}
                                direction={"horizontal"}

                            >
                                <Steps.Step title="Petit déjeuner" onClick={() => this.handlePeriode(0)} />
                                <Steps.Step title="Déjeuner" onClick={() => this.handlePeriode(1)} />
                                <Steps.Step title="Dîner" onClick={() => this.handlePeriode(2)} />
                                <Steps.Step title="Collation" description="(matin ou soir)" onClick={() => this.handlePeriode(3)} />
                            </Steps>
                        </Col>
                    </Row>


                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <Row>
                            <Col xs="6" className="shadow-nutrition" >
                                <Container isHeight={true} >
                                    <PeriodeTitle>
                                        {this.renderTitle(this.state.periode)}
                                    </PeriodeTitle>
                                    <TitleTable> Déplacer les aliments dans le tableau </TitleTable>
                                    {zoneData.map((columnId, index) => {
                                        const column = this.renderState(this.state.periode).columns[columnId];
                                        const tasks = column.taskIds.map(taskId => this.renderState(this.state.periode).tasks[taskId])
                                        return <Column indexColumn={index} key={column.id} column={column} tasks={tasks} />
                                    })}
                                </Container>
                            </Col>
                            <Col xs="6" className="shadow-nutrition">
                                <ContainerAliments className=" justify-content-center" isHeight={false}>
                                    {nutritional.map((columnId, index) => {
                                        const column = this.renderState(this.state.periode).columns[columnId];
                                        const tasks = column.taskIds.map(taskId => this.renderState(this.state.periode).tasks[taskId])
                                        return <ColumnAliments indexColumn={index} key={column.id} column={column} type={this.state.type} tasks={tasks} />
                                    })}
                                </ContainerAliments>
                            </Col>
                        </Row>

                    </DragDropContext>
                    <Row className="justify-content-end">
                        {this.state.periode !== 0 ?
                            <Button className="nutri-button"
                                style={{
                                    background: "#AABCC9",
                                    borderColor: "#AABCC9"
                                }}
                                onClick={() => {
                                    this.setState({ periode: this.state.periode - 1 }, () => {
                                        this.scrollToTop()
                                    })
                                }}
                            >
                                Retour </Button> : ""
                        }
                        <Button className="nutri-button"
                            style={{
                                background: "#062484",
                                borderColor: " #062484"
                            }}
                            onClick={() => {
                                this.saveData()

                            }}
                        > {this.state.periode === 3 ? "Terminer" : "Suivant"} </Button>

                    </Row>
                </>
                }

            </>
        )
    }

}
const mapStateToProps = state => state.questionnaire

export default connect(mapStateToProps, { askContinueScreen, changePage, fetchFoodCategories, fetchFoods, updateDeSelectedScoreNutrition, updateSelectedScoreNutrition, saveNutriState })(NutritionalPage) 