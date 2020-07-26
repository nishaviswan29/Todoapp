import React, { Component } from "react";
import './Todoapp.css';


class Todoapp extends Component {
  
    state={
        input:"",
        items:[]
    };
    storeItems=(event)=>{
        event.preventDefault();
        const {input}=this.state;
           
           this.setState({
              items:[...this.state.items,input],
          input:""
           });
        };
   handleChange1=(index)=>{
       const {input}=this.state;
       const all=this.state.items;
     
       this.setState({
           input:all[index]
         

       });
       
   };
   deleteItems=key=>{
       const allItems=this.state.items;
       allItems.splice(key,1);
       this.setState({
           items:allItems
       })
   };
         handleChange = event => {
         this.setState({
             input:event.target.value
         });
        
        };

  render() {
      const {input,items}=this.state;
      console.log(items);
    return (
      <div className="todo-container">
          <form className="input-section" onSubmit={this.storeItems}>
          <h1>Todo app</h1>
          <input type="text"value={input}onChange={this.handleChange}placeholder="enter..."/>
          </form>

     <ul>
         {items.map((data,index)=>{
         return<li key={index}>{data}
         <i className="fa fa-edit"onClick={()=>this.handleChange1(index)}></i>
         <i className="fas fa-trash-alt"onClick={()=>this.deleteItems(index)}></i>
       
         </li>
         })} 
       
     </ul>
          
      </div>
    );
  }
}
export default Todoapp;
