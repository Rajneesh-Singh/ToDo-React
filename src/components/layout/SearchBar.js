import React, {useState, useMemo , useRef} from 'react'
import AddButton from './AddButton'
import AllUserList from './AllUserList'
// import List from './List'



const SearchBar = () => {
 const [input , setState] = useState('')
 const [input2 , setState2] = useState('')
 const [todos, setTodos] = useState([])
 const searchInputRef = useRef()


 


    const handleInput = (e) => {
        setState(e.target.value)
    }
    const handleInput2 = (f) => {
        setState2(f.target.value)
    }
    const ListDetail = (g) => {
             
        if (input && input2) {
            let arr =todos
            arr.push({tital: input, memo: input2})
            setTodos(arr)
           
        } else {
            alert('Please enter title and details')
        }
           setState('')
           setState2('')
           searchInputRef.current.focus()
    }


      

    
     const ClearList = (itemToDelete) => {
        var newItem = todos.filter((dItem)=>{
            return dItem !== itemToDelete
        })
    
        setTodos(newItem)
        
       
       }

       const ShowUpdate = (newItem,key)=>{
       
        var a =newItem.tital
        var b =newItem.memo

        
        console.log(a,b)
        console.log(key)
        setState(a)
        setState2(b)
    }

    const memoAllUserList = useMemo(()=>{
        return <AllUserList todoList={todos} ClearList={ClearList} ShowUpdate={ShowUpdate} />

    },[input,input2])




    return (
      
    <div>
        <div className="card" style={{width:"600px" ,height:"194px" , marginLeft:"350px" ,marginTop:"50px" }}>
            <div className="card-header">
                <input value={input2} onChange={handleInput2} type="text" className="form-control-plaintext" placeholder="Title"/>
            </div>
            
            <div className="card-body"><div className="input-group mb-3">
                <input value={input} onChange={handleInput}  ref={searchInputRef} type="text" className="form-control" placeholder="Take a note..." />
          
            <div className="input-group-append">
                <button onClick={ListDetail} className="btn btn-success" type="submit">Add</button>
            </div>
            <div className="input-group-append">
                <button   className="btn btn-success" type="submit">Update</button>
            </div>
        </div>
     
        </div>
            <div className="card-footer">
                <button type="button" style={{marginLeft:"500px"}} className="btn btn-light"> Close </button> 
            </div>
        </div>
       
     
    {/* <List input ={input} input2 = {input2} /> */}

    {memoAllUserList}
    

    </div>



    )
}


export default SearchBar



 //    const item = todos
        //    todos.map(item=>{
        //        if(item===key){
        //            item.memo=newItem
        //        }
        //    })
        //  setTodos({item})