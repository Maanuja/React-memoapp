import { MdDeleteOutline } from "react-icons/md";
const MemoCard = ({id, text, date, DeleteHandler}) => {
    return (
      <div className="memo-card">
            <div className="memo-card-body">
                <small>{date}</small>
                <p>{text}</p>
            </div>
            <div className="memo-card-footer">
                <MdDeleteOutline className="delete-btn" onClick={()=>DeleteHandler(id)} />
            </div>
      </div>
    );
  }
  
  export default MemoCard;