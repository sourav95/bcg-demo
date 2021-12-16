import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import OutlinedCard from "./templates/Card"
import Modal from "react-modal";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import EditDetails from "./EditDetails";
import ModalLayout from './templates/Modal';
import axios from "axios";
import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  Legend, Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';
import Graph from './Graph';

function App() {
  const [query, setQuery] = useState("")
  const [isModalOpnen,setIsModalOpen] =useState(false)
  const [modalData,setmodalData] =useState(null)
  const [posts, setPosts] = useState([]);
  const [graphData, setGraphData] = useState([]);
  
  function handleModalState(data, show) {
    setmodalData(data)
    setIsModalOpen(show)
  }

  React.useEffect(() => {
    axios.get("http://localhost:8000/get-all-data/").then((response) => {
      console.log(response.data[0])
      setPosts(response.data);
    });
  }, []);

  React.useEffect(() => {
    axios.get("http://localhost:8000/get-month-data/").then((response) => {
      console.log(response.data[0])
      setGraphData(response.data);
    });
  }, []);

  return (
    <div class="container">
      <center><Graph graphData={graphData}/></center>
      <Modal  isOpen={isModalOpnen} contentLabel="Example Modal"><ModalLayout modalState={handleModalState} data={modalData}/></Modal>
   
      <div class="container-search">
        <input class="search" type="text" placeholder="Enter Policy ID or Customer ID" onChange={event => setQuery(event.target.value)}/>
      </div>
      <br/><br/>
      <div>
                {posts.filter((post)=>{
                  if (post===""){
                    return post
                  }else if(post.policyId.toLowerCase().includes(query.toLowerCase()) || post.customerId.toLowerCase().includes(query.toLowerCase())){
                    return post
                  }

                }).map((post) => (
                    <OutlinedCard  policyDetails={post} modalState={handleModalState}/>
                ))}
      </div>
      
    </div>
  );
}

export default App;
