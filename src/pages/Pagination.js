import React,{useEffect, useState} from 'react'

const Pagination = ({itemsPerPage,data}) => {
    const [currentPage,setCurrentPage]=useState(1);
    const [currentItems,setCurrentItems]=useState([]);


    useEffect(()=>{
        const startI=(currentItems-1)*itemsPerPage;
        const endI=(currentItems+1)*itemsPerPage
        setCurrentItems(data.slice(startI,endI))
    },[currentPage,data,itemsPerPage])

    const totalPage=Math.ceil(data.length/itemsPerPage);

    const handlePageChange=(page)=>{
        setCurrentPage(page)
    }
    console.log(currentPage,"currentPage");


    // const totalPage=Math.ceil((totalitem/itemsPerPage))
    // const [currentPage,setCurrentPage]=useState(1)
    // const handlePageChange=(page)=>{
    //     setCurrentPage(page)
    //     onPageChange(page)
    // }
  return (
    <div>
        {
            currentItems.map((res)=>{
                return(
                    <tr>
                    <td>{res.name}</td>
                    <td>{res.Taskdescription}</td>
                    <td>{res.Taskpriority}</td>
                </tr>
                )
            })
        }
        {currentPage}<br/>
{totalPage}

         <button onClick={()=>handlePageChange(currentPage-1)}>Prev</button>
            <button onClick={()=>handlePageChange(currentPage+1)}>Next</button>
    </div>
  )
}

export default Pagination
