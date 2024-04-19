import { returnPaginationRange } from "../utils/app.utils";

const Pagination = (props) => {
    let arr = returnPaginationRange(props.totalPage,props.page,props.limit,props.siblings)
    console.log(arr)
    return (
        <ul className="pagination pagination md justify-content-end">
            <li className="page-item" ><span className="page-link" onClick={() => props.onPageChange("&laquo;")}>&laquo;</span></li>
            <li className="page-item" ><span className="page-link" onClick={() => props.onPageChange("&lsaquo;")}>&lsaquo;</span></li>
            {arr.map((value) => {
                if(value === props.page){
                    return( <li key={value} className="page-item active"><span className="page-link" onClick={() => props.onPageChange(value)}>{value}</span></li>)
                }else{
                    return( <li key={value} className="page-item"><span className="page-link" onClick={() => props.onPageChange(value)}>{value}</span></li>)
                }
            }
               
            )}
            <li className="page-item"><span className="page-link" onClick={() => props.onPageChange("&rsaquo;")} >&rsaquo;</span></li>
            <li className="page-item"><span className="page-link" onClick={() => props.onPageChange("&raquo;")}>&raquo;</span></li>
        </ul>
    )
}
  



  
  export default Pagination;
  