import axios from 'axios';

const PROBELM_API_BASE_URL = "http://localhost:8080/problem";
class ProblemService{
  getProblems(){
    return axios.get(PROBELM_API_BASE_URL);
  }
  createProblem(problem){
    return axios.post(PROBELM_API_BASE_URL);
  }
  getProblemById(id){
    return axios.get(PROBELM_API_BASE_URL+'/'+id)
  }
  updateProblem(problem,id){
    return axios.put(PROBELM_API_BASE_URL+'/'+id,problem);
  }
  deleteProblem(id){
    return axios.delete(PROBELM_API_BASE_URL)
  }
}

export default new ProblemService()