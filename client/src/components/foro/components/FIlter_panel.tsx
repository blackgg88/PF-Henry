import findIcon from '../../../assets/foro/findIcon.svg';
import refreshIcon from '../../../assets/foro/refresh.svg';
import logoSmartW from '../../../assets/logo_smart_w.png'

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

export default function FilterPanel({
  searchInput,
  onChangeSearch,
  handleFilterByTitle,
  resetFilter,
}: filterPanel) {
  return (
    <div className='foro_panelContainer'>
      <div>
        <form className="foro_panel_SearchContainer" onSubmit={handleFilterByTitle}>
          <input
            name='title'
            value={searchInput}
            onChange={onChangeSearch}
            type='text'
            placeholder='Search'
          />
          <button>
            <img className='foro_panel_findIcon' src={findIcon} alt="find" />
          </button>
        </form>
        
        <div onClick={resetFilter} className='foro_panel_refreshContainer'>
          <img src={refreshIcon} alt="refresh" />
          <p>Actualizar</p>
        </div>
      </div>
      <div className='foro_panel_logoContainer'>
        <img src={logoSmartW} alt="logoSmartNEST" />
      </div>
    </div>
  );
}
