import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as BsIcons from "react-icons/bs"

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        classN: "nav-text"
    },
    {
        title: "Artists",
        path: "/artists",
        icon: <FaIcons.FaPaintBrush />,
        classN: "nav-text"
    },
    {
        title: "Collections",
        path: "/collections",
        icon: <BsIcons.BsCollectionFill />,
        classN: "nav-text"
    },
    {
        title: "Hot Picks",
        path: "/picks",
        icon: <BsIcons.BsStarFill />,
        classN: "nav-text"
    }
]
