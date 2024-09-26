import {useContext} from 'react';
import {
    HeadlineDoneContext,
    SubtitleDoneContext
} from './ContextProviders.jsx';

export const useHeadlineDone = () => useContext(HeadlineDoneContext);
export const useSubtitleDone = () => useContext(SubtitleDoneContext);