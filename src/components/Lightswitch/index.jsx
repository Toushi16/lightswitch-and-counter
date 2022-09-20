import { useContext, useState } from 'react';
import { DarkModeContext } from '../DarkModeContext';
import bulbOn from '../../img/lightbulb-on.png'
import bulbOff from '../../img/lightbulb-off.png'
import './index.scss';

const Lightswitch = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    const [text, setText] = useState('light off');

    const handleClick = () => {
        toggleDarkMode();
        setText(darkMode ? 'light off' : 'light on')
    };

    return (
        <div className='lightswitch'>
            <div className={ darkMode ? `switcher switcher-dark` : `switcher switcher-light`}>
                <button onClick={handleClick}>
                    <img src={ darkMode ? bulbOff : bulbOn } alt='bulb on/off' />
                </button>
                <h3>{text}</h3>
            </div>
        </div>
    )
};

export default Lightswitch;