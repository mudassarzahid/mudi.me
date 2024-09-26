'use client';
import {Button, ButtonGroup} from "flowbite-react";
import Devpost from "../logos/Devpost.jsx";
import GitHub from "../logos/GitHub.jsx";
import LinkedIn from "../logos/LinkedIn.jsx";
import Inbox from "../logos/Inbox.jsx";


const SocialButtons = (props) => {
    const logoClass = "flex items-stretch transition-all duration-200 rounded-md px-2 py-1 text-sm rounded-l-none"

    return <ButtonGroup className="justify-center">
        <Button color="gray">
            <a href="https://devpost.com/mudassar99" target="_blank" className={logoClass}>
                <Devpost/> Devpost
            </a>
        </Button>
        <Button color="gray">
            <a href="https://github.com/mudassarzahid" target="_blank" className={logoClass}>
                <GitHub/> GitHub
            </a>
        </Button>
        <Button color="gray">
            <a href="https://www.linkedin.com/in/mudassarzahid/" target="_blank" className={logoClass}>
                <LinkedIn/> LinkedIn
            </a>
        </Button>
        <Button color="gray">
            <a href="mailto:mudassar99zahid@gmail.com" target="_blank" className={logoClass}>
                <Inbox/> E-Mail
            </a>
        </Button>
    </ButtonGroup>
}

export default SocialButtons;