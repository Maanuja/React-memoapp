
const Search = ({SearchBarHandler}) => {
    return (
        <div className="search">
            <input type="text" placeholder="Search memos..." onChange={(e)=>SearchBarHandler(e.target.value)}/>      
        </div>
    );
}

export default Search;