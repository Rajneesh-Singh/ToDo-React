import React, {useState,useEffect} from 'react'
// import List from './List'

const AllUserList = ({todoList , ClearList ,ShowUpdate}) => {
    console.log("it is rendering")
    return(

       <div >
    
       {/* <ul>
            {todoList.length && todoList.map(userlist => 
                <li>{userlist.tital} : {userlist.memo}</li>
            )}
         </ul> */}
         
         {todoList.map((userList , index)=>
            
          <div key={index} onDoubleClick={()=>ShowUpdate(userList,index)}  style={{height:"150px" ,width:"200px" , border:"1px solid lightgrey",borderRadius:"5px", float:"left" , marginLeft:"30px",textAlign:"center",padding:"10px 10px 10px 10px " ,wordBreak:"break-all"}}  >
       
            {userList.memo} 
            {/* <input type="text" value={userList.memo}  /> */}

            <br/>

            {userList.tital} 
            {/* <input type="text" value={userList.tital} /> */}
            
            <button onClick={()=>ClearList(userList)} type="button" className="close" aria-label="Close" style={{background:"lightblue"}}>
                 <span  aria-hidden="true">&times;</span>
            </button>
           
            {/* <button  onClick={updateList(userList,index)} style={{}} input="buttton">Update</button> */}
        
     </div> 
     
 
        
    )}
       
   
        
      
</div>



    )
}

export default AllUserList







{/* {todoList.map((userList, index)=>
            <div key={index +1}>
               <List userList={userList} />
            </div>
        
        )} */}