import React, { useState } from 'react';
import ToDoItem from '../ToDoItems/ToDoItem';
import './Input.css'
interface IList{
    name:string,
    email:string
}
const Input = () => {
    const [contact, setContact] = useState<IList>({
        name: "",
        email: ""
    });
    const [contactList, setContactList] = useState<IList[]>([])

    const onClick = () => {
        setContactList([...contactList, contact])
        setContact({
            name: "",
            email: ""
        })
    }

    const onBlur = (e: React.ChangeEvent<HTMLInputElement>) =>  {
        setContact({ ...contact, [e.target.name]:  e.target.value})
    }
    
    const handleRemove = (email: string) => {
        const newContactList = contactList.filter(c => c.email !== email)
        setContactList(newContactList)
    }
    
    return (
        <div>
            <h1> ToDo Lists</h1>
            <div className="form">
                <input 
                    onBlur={onBlur}
                    name="name"
                    placeholder="Task Name"
                    type="text" 
                />
                <br />
                 <input 
                    onBlur={onBlur}
                    name="task"
                    placeholder="Task Details"
                    type="text" 
                />
                <br />
                <button onClick={onClick}>Add</button>
            </div>
            {
                contactList.map((con) => <ToDoItem key={con.name} name={con.name} email={con.email} handleRemove={handleRemove}  />)
            }
            
         
        </div>
    );
};

export default Input;