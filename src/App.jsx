import {DarkThemeToggle} from "flowbite-react"
import {TypeAnimation} from "react-type-animation";
import Headline from "./components/Headline.jsx";
import SocialButtons from "./components/SocialButtons.jsx";
import {useSubtitleDone} from "./state/Hooks.jsx";

function App() {
    const {subtitleDone} = useSubtitleDone();

    return <main className="flex flex-col min-h-screen p-10 gap-2 dark:bg-gray-800">
        <div className="w-10 h-10"> {/* Adjust the width and height to your preference */}
            <DarkThemeToggle/>
        </div>
        <Headline/>
        <br/>
        {subtitleDone && <SocialButtons/>}
    </main>

}

export default App
