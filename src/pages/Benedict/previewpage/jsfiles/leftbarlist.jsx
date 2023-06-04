import { BsColumnsGap, BsFillCollectionFill } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { MdAssignment, MdOutlineSettingsSuggest } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { FcOvertime } from "react-icons/fc";
import { VscReport } from "react-icons/vsc";





const leftbarlist = [
    {
        id: 1,
        logo: <BsColumnsGap/>,
        name: 'Home'
    },
    {
        id: 2,
        logo: <FaBookReader/>,
        name: 'Students'
    },
    {
        id: 3,
        logo: <BsFillCollectionFill/>,
        name: 'Lessons'
    },
    {
        id: 4,
        logo: <MdAssignment/>,
        name: 'Assignments'
    },
    {
        id: 5,
        logo: <TiMessages/>,
        name: 'Messages'
    },
    {
        id: 6,
        logo: <FcOvertime/>,
        name: 'Timetable'
    },
    {
        id: 7,
        logo: <VscReport/>,
        name: 'Reports'
    },
    {
        id: 8,
        logo: <MdOutlineSettingsSuggest/>,
        name: 'Settings'
    },
]

export default leftbarlist;