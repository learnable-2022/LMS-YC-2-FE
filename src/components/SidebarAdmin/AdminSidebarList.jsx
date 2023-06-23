import { BsColumnsGap, BsFillCollectionFill } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { MdAssignment, MdOutlineSettingsSuggest } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { FcOvertime } from "react-icons/fc";
import { VscReport } from "react-icons/vsc";





const AdminSidebarList = [
    {
        id: 1,
        logo: <BsColumnsGap/>,
        name: 'Home',
        link: "/admin/dashboard"
    },
    {
        id: 2,
        logo: <FaBookReader/>,
        name: 'Students',
        link: "/admin/dashboard"
    },
    {
        id: 3,
        logo: <BsFillCollectionFill/>,
        name: 'Lessons',
        link: "lessons"
    },
    {
        id: 4,
        logo: <MdAssignment/>,
        name: 'Assignments',
        link: "/admin/dashboard"
    },
    {
        id: 5,
        logo: <TiMessages/>,
        name: 'Messages',
        link: "/admin/dashboard"
    },
    {
        id: 6,
        logo: <FcOvertime/>,
        name: 'Timetable',
        link: "/admin/dashboard"
    },
    
]

export default AdminSidebarList;