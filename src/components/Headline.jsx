import {TypeAnimation} from "react-type-animation";
import GraphemeSplitter from 'grapheme-splitter';
import {useHeadlineDone, useSubtitleDone} from "../state/Hooks.jsx";

const Headline = () => {
    const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';
    const splitter = new GraphemeSplitter();
    const {headlineDone, setHeadlineDone} = useHeadlineDone();
    const {setSubtitleDone} = useSubtitleDone();

    return <>
        <TypeAnimation
            speed={85}
            splitter={(str) => splitter.splitGraphemes(str)}
            cursor={false}
            className={`${CURSOR_CLASS_NAME} text-3xl dark:text-white text-center font-bold`}
            sequence={[
                300,
                "Hi, I'm Mudassar!",
                300,
                "Hi, I'm Mudassar! 👋",
                (el) => {
                    el.classList.remove(CURSOR_CLASS_NAME)
                    setHeadlineDone(true);
                },
            ]}
            repeat={0}
        />
        <br/>
        {
            headlineDone && <TypeAnimation
                style={{whiteSpace: 'pre-line'}}
                speed={85}
                splitter={(str) => splitter.splitGraphemes(str)}
                cursor={false}
                className={`${CURSOR_CLASS_NAME} text-xl dark:text-white leading-9`}
                sequence={[
                    "... or just Mudi for short! :)",
                    300,
                    "... or just Mudi for short! :) I'm a CompSci student and aspiring software engineer.\nFeel free to connect with me!",
                    () => {
                        setSubtitleDone(true);
                    },
                ]}
                repeat={0}
            />
        }


    </>
}

export default Headline;