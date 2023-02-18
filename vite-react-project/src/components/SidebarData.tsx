import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as BsIcons from "react-icons/bs"

export const SidebarData = [
    {
        title: "Home",
        path: "/home",
        icon: <AiIcons.AiFillHome />,
        classN: "nav-text",
        total: null,
    },
    {
        title: "Collections",
        path: "/collections",
        icon: <BsIcons.BsCollectionFill />,
        classN: "nav-text",
        total: null,
    },
    {
        title: "Hot Picks",
        path: "/picks",
        icon: <BsIcons.BsStarFill />,
        classN: "nav-text",
        total: null,
    },
    {
        title: "Cart",
        path: "/cart",
        icon: <BsIcons.BsFillHandbagFill />,
        classN: "nav-text",
        total: 6,
    },
]
