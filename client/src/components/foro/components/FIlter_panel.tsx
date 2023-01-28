interface filterPanel {
  searchInput: string;
  onChangeSearch: any;
  handleFilterByTitle: any;

}

interface filterPanel {
  searchInput: string;
  onChangeSearch: any;
  handleFilterByTitle: any;
  resetFilter: any;
}

export default function FilterPanel({searchInput,onChangeSearch,handleFilterByTitle,resetFilter}: filterPanel) {

  return (
    <div className='foro_menuTags_container'>
      <input name="title" value={searchInput} onChange={onChangeSearch} type='text' placeholder='Search' />
      <button onClick={handleFilterByTitle}>Search</button>
      <button onClick={resetFilter}>Reset</button>

    </div>
  );
}
