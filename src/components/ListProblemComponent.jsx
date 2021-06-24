import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProblemService from '../services/ProblemService'
class ListProblemComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            problems:[]
        }
        this.addProblem=this.addProblem.bind(this);
        this.editProblem=this.editProblem.bind(this);
        this.deleteProblem=this.deleteProblem.bind(this);
    }
    deleteProblem(id){
        ProblemService.deleteProblem(id).then(
            res=>{
                this.setState({problems: this.state.problems.filter(
                    problem=>problem.id!==id
                )});
            }
        )
    }
    viewProblem(id){
        this.props.history.push(`/view-problem/${id}`);
    }
    editProblem(id){
        this.props.history.push(`/add-problem/${id}`);
    }

    componentDidMount(){
        ProblemService.getProblems().then((res) => {
            console.log(res);
            this.setState({ problems: res.data.items});
        });
    }

    addProblem(){
        this.props.history.push('/add-problem/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">problems List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProblem}> Add problem</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> problem code</th>
                                    <th> problem title</th>
                                    <th> problem topic</th>
                                    <th> problem level</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.problems.map(
                                        problem => 
                                        <tr key = {problem.id}>
                                            <td> {problem.code} </td> 
                                            <td> {problem.title} </td>   
                                            <td> {problem.topic}</td>
                                            <td> {problem.level}</td>
                                            <td>
                                                <button onClick={ () => this.editproblem(problem.id)} className="btn btn-info">Update </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteProblem(problem.id)} className="btn btn-danger">Delete </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.viewProblem(problem.id)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}
export default ListProblemComponent