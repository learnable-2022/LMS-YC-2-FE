import {
    BsColumnsGap,
    BsFillCollectionFill,
    BsFillPersonFill,
} from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { MdAssignment, MdOutlineSettingsSuggest } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { FcOvertime } from "react-icons/fc";
import { VscReport } from "react-icons/vsc";
import { GiPoliceBadge } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb"

const StudentSidebarList = [
    {
        id: 1,
        logo: <BsColumnsGap />,
        name: 'Home',
        link: "/student/dashboard"
    },
    {
        id: 2,
        logo: <FaBookReader />,
        name: 'Lessons',
        link: "lessons"
    },
    {
        id: 3,
        logo: <MdAssignment />,
        name: 'Quiz',
        link: "quiz"
    },
    {
        id: 4,
        logo: <TiMessages />,
        name: 'Messages',
        link: "message"
    },
    {
        id: 5,
        logo: <TbCertificate />,
        name: "Certification",
        link: "certification"
    },
    {
        id: 6,
        logo: <BsFillPersonFill />,
        name: 'Profile',
        link: "/student/dashboard/profile"
    },
]

export default StudentSidebarList;
