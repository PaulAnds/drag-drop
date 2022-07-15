import React, {useState, useEffect} from 'react';
import Lane from '../../components/Lane/Lane';
import useDataFetching from '../../Hooks/useDataFetching';
import './Board.css';

const lanes = [
    {id: 1, title: 'To Do'},
    {id: 2, title: 'In Progress'},
    {id: 3, title: 'Review'},
    {id: 4, title: 'Done'},
]

function onDragStart(e,id){
    e.dataTransfer.setData('id', id);
    console.log(e.dataTransfer);
}

function onDragOver(e){
    e.preventDefault();
}


function Board(){

    const [loading,data,error] = useDataFetching('https://my-json-server.typicode.com/PaulAnds1/my-api/tasks');
    const [tasks,setTasks] = useState([]);

    useEffect(()=> {
        setTasks(data);
    }, [data]);

    function onDrop(e,laneId){
        const id = e.dataTransfer.getData('id');
        const updatedTasks = tasks.map((task)=>{
            if(task.id.toString() === id){
                task.lane = laneId;
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    return(
        <div className= 'Board-wrapper'>
            {
                lanes.map((lane)=>(
                    <Lane 
                    key={lane.id} 
                    laneId={lane.id}
                    title={lane.title}
                    loading={loading}
                    error={error}
                    tasks={tasks.filter((task)=>task.lane === lane.id)}
                    onDragStart={onDragStart}
                    onDragOver = {onDragOver}
                    onDrop={onDrop}
                    />
                ))
            }
        </div>
    );
}

export default Board;