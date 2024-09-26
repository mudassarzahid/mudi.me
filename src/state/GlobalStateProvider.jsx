import {useState} from 'react';
import PropTypes from "prop-types";
import {
    HeadlineDoneContext,
    SubtitleDoneContext
} from './ContextProviders.jsx';

export const GlobalStateProvider = ({children}) => {
    const [headlineDone, setHeadlineDone] = useState(false);
    const [subtitleDone, setSubtitleDone] = useState(false);


    return (
        <HeadlineDoneContext.Provider value={{headlineDone, setHeadlineDone}}>
            <SubtitleDoneContext.Provider value={{subtitleDone, setSubtitleDone}}>
                {children}
            </SubtitleDoneContext.Provider>
        </HeadlineDoneContext.Provider>
    );
};

GlobalStateProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
