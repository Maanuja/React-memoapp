import Header from './component/Header';
import Search from './component/Search';
import MemoList from './component/MemoList';
import {useState,useEffect} from 'react';
import {nanoid} from 'nanoid';

function App() {

  const [memos,setMemos] = useState([
    {
      id: nanoid(),
      text:"My first todo",
      date:"29/06/2023"
    },
    {
      id: nanoid(),
      text:"my second todo",
      date:"29/06/2023"
    },
    {
      id: nanoid(),
      text:"My third todo",
      date:"29/06/2023"
    },
  ]);

  //Search bar state
  const [searchMemo,setSearchMemo] = useState('');
  //DarkMode state
  const [darkMode,setDarkMode] = useState(false);

  //Save data to local storage
  useEffect(()=>{
    localStorage.setItem('react-memoapp-data',JSON.stringify(memos))
  },[memos])

  //Add memo
  const addMemo = (text) => {
    const newMemo = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString(),
    }
    const newMemos = [...memos,newMemo];
    setMemos(newMemos);
  };

  //Delete memo
  const deleteMemo = (id) => {
    const newMemos = memos.filter((memo)=>memo.id !== id);
    setMemos(newMemos);
  };

  //Delete all memos
  const deleteAllMemos = () => {
    setMemos([]);
  };

  //Filter memos
  const filteredMemos = memos.filter((memo)=>memo.text.toLowerCase().includes(searchMemo.toLowerCase()));

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header DeleteAllHandler={deleteAllMemos} DarkModeToggleHandler={setDarkMode}/>
        <Search SearchBarHandler={setSearchMemo}/>
        <MemoList memos={filteredMemos} AddMemoHandler={addMemo} DeleteMemoHandler={deleteMemo}/>
      </div>
    </div>
  );
}

export default App;
