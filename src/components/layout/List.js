import React from 'react'

const List = ({ userList }) => {
    return ( 
         <div>
        <div className = "card border-primary mb-3"
        style = {
            { maxWidth: "18rem" } } >
        <div className = "card-header" > { userList.tital } </div> 
        <div className = "card-body text-primary" >
        <h5 className = "card-title" > { userList } </h5>
         <p className = "card-text" > { userList.memo } </p> 
         </div>
          </div> 
          
          </div>
    )
}

export default List