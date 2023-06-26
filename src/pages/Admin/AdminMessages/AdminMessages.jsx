import AdminDashboardNav from "../../../components/AdminDashboardNav/AdminDashboardNav";
import Message from "../../Student/StudentMessage/studentMessage.module.css";

const AdminMessage = () => {
    return (
        <div className={Message.cont}>
            <AdminDashboardNav navTitle="Messages" />
            <div className={Message.messageContainer}>
                <p>No Chats</p>
            </div>

        </div>
    );
};

export default AdminMessage;