import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as BsIcons from "react-icons/bs"

export const SidebarData = [
    {
        title: "Home",
        path: "/home",
        icon: <AiIcons.AiFillHome />,
        classN: "nav-text",
    },
    {
        title: "Full Collection",
        path: "/collection",
        icon: <BsIcons.BsCollectionFill />,
        classN: "nav-text",
    },
    {
        title: "Editor's Picks",
        path: "/picks",
        icon: <BsIcons.BsStarFill />,
        classN: "nav-text",
    },
    {
        title: "Cart",
        path: "/cart",
        icon: <BsIcons.BsFillHandbagFill />,
        classN: "nav-text",
    },
]
