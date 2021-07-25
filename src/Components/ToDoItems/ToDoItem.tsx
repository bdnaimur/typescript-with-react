import React from 'react';

interface IProps{
    name:string,
    email:string,
    handleRemove: (email: string) => void
}
const ToDoItem = ({name, email="N/A", handleRemove}:IProps) => {
    return (
        <div className="card">
            <p>Name: {name}</p>
            <p>Description: {email}</p>
            <button onClick={()=>handleRemove(email)}>Remove</button>
        </div>
    );
};

export default ToDoItem;