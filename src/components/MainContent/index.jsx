import { useReducer, useContext } from 'react';
import { DarkModeContext } from '../DarkModeContext';
import Lightswitch from '../Lightswitch';
import './index.scss';

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch(action.type) {
        case 'DECREMENT':
            return { count: state.count - 1 }
        case 'INCREMENT':
            return { count: state.count + 1 }
        default:
            throw new Error();
    }
};

const MainContent = () => {
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { darkMode } = useContext(DarkModeContext);
    
    return (
        <>
        <div className={ darkMode ? `container container-dark` : `container container-light` }>
            <Lightswitch />
            <hr />
            <div className='counter'>
                <div className='counter-btn'>
                <button onClick={() => dispatch({ type: "DECREMENT"})}>-</button>
                <button onClick={() => dispatch({ type: "INCREMENT"})}>+</button>
                </div>
                <p className='counter-num'>counter : {state.count} </p>
            </div>
        </div>                                                                                          
        </>
    )
}

export default MainContent;