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
        logo: <BsFillCollectionFill/>,
        name: 'Lessons',
        link: "lessons"
    },
    {
        id: 3,
        logo: <TiMessages/>,
        name: 'Messages',
        link: "/admin/dashboard"
    },
]

export default AdminSidebarList;