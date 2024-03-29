import axios from "axios"
import React, { useState } from "react"
import NavBar from "../../Components/Navbar/NavBar"
import searchit from '../../Components/Images/search.png'


const HomePage = ()=>{

    // searched word to be on the MongoDB 
    const [search,setSearch] = useState('')

    // Search list of the MongoDB 
    const [list,setList] = useState([])

    

    const HandleInput = ()=>{
        console.log("listtag: ",listtag) 
        
        axios.post('http://localhost:4000/api/gr/search',{
            search:search,
        }).then((res)=>{
            
            let output = []
            console.log("res: ",res.data)  
            for(let i = 0 ; i < res.data.list.length ; i++)
            {
                let flag = res.data.list[i]
                
                let f = true;
                for(let j = 0 ; j < listtag.length ; j++){
                    if(flag.tags.includes(listtag[j]) == false){
                        f = false;
                        break;
                    }
                }

                
                if(f){
                    output.push(flag);
                }
                
                
            }
            setList(output)    
        }).catch((err)=>{
            console.log(err)
        })

    }

    // Now, once loaded, we need to add the stats of the 
    // stats page 
//     if(lol == false){
//     axios.post('http://localhost:4000/api/gr/statcreate',{
        
//     }).then(()=>{
//         console.log("Done")
//         setLol(true);
//     }).catch((err)=>{
//         console.log("AXIOS ERROR REQUEST") 
//     })
// }

    
    

    // CHECK IF NAME IS SORTED OR NOT
    const [name,sortName] = useState(true) 
    const [name2,setName2] = useState(true) 
    const [date,setDate]  = useState(true) 
    const [follower,setFollower] = useState(true) 
    const [listtag,setListTag] = useState([]) 
    const [tag,setTag] = useState('')

    // FOR NAVBAR PARAMETER ARE DISPLAYED HERE
    var title = "Other Profile" 

    const listofmenu = [
        {
            title: 'Home',
            href:'/',
        },

    ]

    if(window.localStorage.getItem('current-username'))
    {
        listofmenu.push({
            title:'Profile',
            href:'/profile',
        })
        listofmenu.push({
            title:'Logout',
            href:'/signin',
        })
        listofmenu.push({
            title:'My SubGreddiits',
            href:'/mysg',
        })
        listofmenu.push({
            title:'My Saved Posts',
            href:'/mysaved',
        })
    }
    else 
    {
        listofmenu.push({
            title:'Log In',
            href:'/signin',
        })
    }

   

    return(
        
        <div className="container-fluid justify-content-center" style={{
            alignContent:'center',
            textAlign:'center'
        }}>
            
            <NavBar listofmenu = {listofmenu} isdropdown={false} issearch={false} />
            <p className="display-5" style={{
                textAlign:'center'
            }}>
                Welcome To Official Greddiit Page! <br></br>&#128591;
            </p>
            <br></br>
            <div className="row">
                <div className="col"></div>
                <div className="col-6">
                
            <div class="input-group mb-3 w-100" style={{
                alignContent:'center',
                textAlign:'center'
            }}>
  {/* <span class="input-group-text" id="basic-addon1">Name :</span> */}
  
  <input type="text" class="form-control" placeholder="Search something here..." aria-label="Username" aria-describedby="basic-addon1" value={search} onChange={(e)=>{setSearch(e.target.value);}}/>
    <button className="btn btn-outline-info" onClick={HandleInput}>
        <img src={searchit} width='20' height='20'/>
    </button>
    
</div>

<div>
    <p className="display-6">
        Filter your Search Results on the basis of: 

    </p>
    <div className="row">
        <div className="col">

        </div>
                        <div class="form-check col">
                            <input class="form-check-input" type="checkbox" id="name-check" value={name} onChange={(e) => {
                                sortName(!name); 
                                if (name === true) {
                                    setList(list.sort((a, b) => {
                                        let compare = a.name.localeCompare(b.name)
                                        return compare
                                    }))
                                }
                            }} />
                            <label class="form-check-label" htmlFor="#name-check">
                                On The Basis Of Name (Ascending) 
                            </label>
                        </div>

                        <div class="form-check col">
                            <input class="form-check-input" type="checkbox" id="name-check-1" value={name2} onChange={(e) => {
                                setName2(!name2); 
                                if (name2 === true) {
                                    setList(list.sort((a, b) => {
                                        let compare = a.name.localeCompare(b.name)
                                        return -1*compare 
                                    }))
                                }
                            }} />
                            <label class="form-check-label" htmlFor="#name-check-1">
                                On The Basis Of Name (Descending) 
                            </label>
                        </div>

                        <div class="form-check col">
                            <input class="form-check-input" type="checkbox" id="date-check" value={date} onChange={(e) => {
                                setDate(!date);
                                 
                                if (date === true) 
                                {
                                    setList(list.sort((a, b) => {
                                        
                                        let date1 = new Date(a.createdOn) 

                                        let data1 = date1.getTime()
                                        
                                        let date2 = new Date(b.createdOn) 

                                        let data2= date2.getTime()

                                        let compare = data2 - data1
                                        return compare
                                    }))
                                }
                            }} />
                            <label class="form-check-label" htmlFor="#date-check">
                                On The Basis Of Date
                            </label>
                        </div>

                        <div class="form-check col">
                            <input class="form-check-input" type="checkbox" id="date1-check" value={follower} onChange={(e) => {
                                setFollower(!follower);
                                
                                if (follower === true) 
                                {
                                    setList(list.sort((a, b) => {
                                        
                                        let compare = b.followers.length + b.moderators.length - a.followers.length - a.moderators.length
                                        return compare
                                    }))
                                }
                            }} />
                            <label class="form-check-label" htmlFor="#date1-check">
                                On The Basis Of Followers
                            </label>
                        </div>
                        <div className="col"></div>
                        </div>
                        <br></br>
                        <div class="input-group mb-3 w-50">
  <span class="input-group-text" id="basic-addon1">Add A Tag Here:</span>
  <input type="text" class="form-control" placeholder="Tag" aria-label="Username" aria-describedby="basic-addon1" value={tag}
  onChange={(e)=>{setTag(e.target.value.trim())}}/>
  <button onClick={()=>{
    
    if(tag.trim().length === 0)
    {
        alert('Cannot leave empty!')
        return 
    }
    let dic = new Set([...listtag,tag.toLowerCase().trim()])
    
    setListTag([...dic])
    
  }} className="btn btn-success">
 + Add Tag
  </button>
</div>
<div>
    {
        listtag.length === 0 ?
        <p></p>
        :
        <div style={{textAlign:'left'}}>
            <span style={{textAlign:'left'}}>List Of Tags:&nbsp;</span>
            
            {
                listtag.map((e,index)=>{
                    return(
                        <span style={{textAlign:'left'}} className="border border-success">{e} &nbsp;
                        <button onClick={()=>{
                            console.log("index: ",index) 
                            let updated = []
                            for(let i = 0 ; i < listtag.length ; i++)
                            {
                                if(i != index)
                                {
                                    updated.push(listtag[i]) 
                                }
                            }
                            setListTag(updated) 
                           
                            console.log("done")
                        }} className="btn btn-danger">x</button></span>
                    )
                })
            }
        </div>
   }
</div>
</div>

            {
               // Displays the search results 
                <div>
                    <br></br>
                    <h3 style={{textAlign:'left'}}>Search Results: </h3>
                                    
                                    {
                                        list.map((val,index)=>{
                                            return(
                                                
                                                <div class="card my-2" style={{
                                                    width:'70%',
                                                    
                                                }} key={index} >
                                                    <img src={val.coverImageURL} class="card-img-top" alt="..." width='200' height='200'/>
                                                        <div class="card-body">
                                                            <div class="card-title">
                                                            <img src={val.profileImageURL} width='40' height='40' className="rounded-circle"></img>
                                                            &nbsp;
                                                            <a href={'/gr/' + val.name} style={{
                                                                textDecoration: 'none',
                                                                color: 'black',
                                                                fontWeight:'bold',
                                                            }}>{val.name}</a>
                                                            </div>
                                                            <div class="card-text" style={{textAlign:'left'}}>
                                                                <span style={{
                                                                    fontWeight: 'bold' 
                                                                }}>Description: </span>
                                                                <span> {val.description}</span>
                                                                <br></br>
                                                                <span style={{
                                                                    fontWeight: 'bold' 
                                                                }}>Followers: </span>
                                                                <span> {val.followers.length + val.moderators.length}</span>
                                                                <br></br>
                                                                <span style={{
                                                                    fontWeight: 'bold' 
                                                                }}>Posts: </span>
                                                                <span> {val.posts.length}</span>
                                                            </div>
                                                        </div>
                                                </div>
                                                
                                            )
                                        })
                                    }
                                    

                               
                </div>
                
            }
        </div>
        <div className="col">

        </div>
        </div>
        
        </div>
    )
}

export default HomePage