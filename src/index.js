/* eslint-disable no-console */
import modeSwitchInit from './components/modeswitch/modeSwitch';
import personFinderInit from './components/personFinder/personFinder';
import SERVER_URL from './constants/server-url';
import Formular from './components/formular/formular';
import SearchContainer from './components/search/searchContainer';

const init = async () => {
    await chayns.ready;

    const root = document.querySelector('.tapp__content');

    root.appendChild(new SearchContainer('chayns', 'Suche', 20).render());
    root.appendChild(new Formular().render());

    console.info('ServerUrl for current environment:', SERVER_URL);

    // initialise a Modeswitch
    //modeSwitchInit();

    // start Personfinder
    //personFinderInit();

    
};

init();
