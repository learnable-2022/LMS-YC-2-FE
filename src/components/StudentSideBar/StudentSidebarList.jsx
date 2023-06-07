import { BsColumnsGap, BsFillCollectionFill, BsFillPersonFill } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { MdAssignment, MdOutlineSettingsSuggest } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { FcOvertime } from "react-icons/fc";
import { VscReport } from "react-icons/vsc";
import { GiPoliceBadge } from "react-icons/gi"





const StudentSidebarList = [
    {
        id: 1,
        logo: <BsColumnsGap/>,
        name: 'Home',
        link: "/student/dashboard"
    },
    {
        id: 2,
        logo: <FaBookReader/>,
        name: 'Lessons',
        link: "lessons"
    },
    {
        id: 3,
        logo: <MdAssignment/>,
        name: 'Assignments',
        link: "/student/dashboard"
    },
    {
        id: 4,
        logo: <TiMessages/>,
        name: 'Messages',
        link: "/student/dashboard"
    },
    {
        id:5,
        logo: <GiPoliceBadge />,
        name: "Badges",
        link: "/student/dashboard"
    },
    {
        id: 6,
        logo: <FcOvertime/>,
        name: 'Timetable',
        link: "/student/dashboard"
    },
    {
        id: 7,
        logo: <VscReport/>,
        name: 'Reports',
        link: "/student/dashboard"
    },
    {
        id: 8,
        logo: <BsFillPersonFill />,
        name: 'Profile',
        link: "/student/dashboard/profile"
    },
    {
        id: 9,
        logo: <MdOutlineSettingsSuggest/>,
        name: 'Settings',
        link: "/student/dashboard"
    },{
        id: "",
        logo: "",
        name: ""
    }
]

export default StudentSidebarList;