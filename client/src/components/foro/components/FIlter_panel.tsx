import findIcon from '../../../assets/foro/findIcon.svg';
import refreshIcon from '../../../assets/foro/refresh.svg';
import logoSmartW from '../../../assets/logo_smart_w.png';
import profileIconW from '../../../assets/foro/profile-white.svg';
import homeIcon from '../../../assets/foro/homeIconW.svg';

import connectivityIconW from '../../../assets/foro/connectivityIconW.svg';
import entertainmentW from '../../../assets/foro/EntertainmentW.svg';
import energyW from '../../../assets/foro/energyW.svg';
import securityW from '../../../assets/foro/securityW.svg'
import healthW from '../../../assets/foro/health.svg'
import confort from '../../../assets/foro/confortW.svg';




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
  handleFilterByCategory: any;
}
export default function FilterPanel({
  searchInput,
  onChangeSearch,
  handleFilterByTitle,
  resetFilter,handleFilterByCategory
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
          <p>Reset</p>
        </div>


        {
          
          
          <div className='foro_panel_MenuContainer'>
            <div className='foro_panel_Menu_HomeContainer'>
              <img src={healthW} alt="profile_Icon" />
              <p onClick={()=>handleFilterByCategory("Lifestyle and Health")}>Lifestyle and Health</p>
            </div>
            <div className='foro_panel_Menu_HomeContainer'>
              <img src={connectivityIconW} alt="connectivity" />
              <p onClick={()=>handleFilterByCategory("Connectivity and Control")}>Connectivity and Control</p>
            </div>
            <div className='foro_panel_Menu_HomeContainer'>
              <img src={entertainmentW} alt="entertainment" />
              <p onClick={()=>handleFilterByCategory("Home Entertainment")}>Home Entertainment</p>
            </div>
            <div className='foro_panel_Menu_HomeContainer'>
              <img src={energyW} alt="energy" />
              <p onClick={()=>handleFilterByCategory("Energy Management")} >Energy Management</p>
            </div>
            <div className='foro_panel_Menu_HomeContainer'>
              <img src={securityW} alt="security" />
              <p onClick={()=>handleFilterByCategory("Safety and Security")}>Safety and Security</p>
            </div>
            <div className='foro_panel_Menu_HomeContainer'>
              <img src={confort} alt="comfort" />
              <p onClick={()=>handleFilterByCategory("Comfort and Ease")}>Comfort and Ease</p>
            </div>
          </div>
          
          
          
        }
        {
          /* 
          
          <div className='foro_panel_tagsContainer'>
            <fieldset>
              <legend>Tags</legend>
              <p>Connectivity and Control</p>
              <p>Home Entertainment</p>
              <p>Energy Management</p>
              <p>Safety and Security</p>
              <p>Comfort and Ease</p>
              <p>Lifestyle and Health</p>
            </fieldset>
          </div>
          
          */
        }

      </div>
      <div className='foro_panel_logoContainer'>
        <img src={logoSmartW} alt="logoSmartNEST" />
      </div>
    </div>
  );
}
