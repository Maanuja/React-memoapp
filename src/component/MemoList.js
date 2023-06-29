import AddMemo from './AddMemo';
import MemoCard from './MemoCard';

const MemoList = ({ memos, AddMemoHandler, DeleteMemoHandler }) => {
  return (
    <div className="memo-list">
        <AddMemo AddMemoHandler={AddMemoHandler}/>
        {memos.map((memo)=>
            <MemoCard key={memo.id} id={memo.id} text={memo.text} date={memo.date} DeleteHandler={DeleteMemoHandler}/>
        )}
    </div>
  );
}

export default MemoList;