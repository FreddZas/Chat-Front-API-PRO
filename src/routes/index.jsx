import { useRoutes } from "react-router-dom";
import LoginPage from "../modules/auth/login/pages/LoginPage";
import AuthLayout from "../modules/auth/AuthLayout";
import RegisterPage from "../modules/auth/register/pages/RegisterPage";
import ValidateEmail from "../modules/auth/validate-email/ValideteEmail";
import Chat from "../modules/chat/pages/Chat";
import Home from "../modules/home/pages/Home";
import Conversation from "../modules/chat/components/Conversation";
import ProtectedRoute from "./ProtectedRoutes";

function ChatRouter() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
        {
          path: "email-validation",
          element: <ValidateEmail />,
        },
      ],
    },
    {
      path: "/chats",
      element: (
        <ProtectedRoute>
          <Chat />
        </ProtectedRoute>
      ),
      children: [{ path: "conversation/:id", element: <Conversation /> }],
    },
  ]);
}

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/auth",
//     element: <AuthLayout />,
//     children: [
//       {
//         path: "login",
//         element: <LoginPage />,
//       },
//       {
//         path: "register",
//         element: <RegisterPage />,
//       },
//       {
//         path: "email-validation",
//         element: <ValidateEmail />,
//       },
//     ],
//   },
//   {
//     path: "/chats",
//     element: (
//       <ProtectedRoute>
//         <Chat />
//       </ProtectedRoute>
//     ),
//     children: [{ path: "conversation/:id", element: <Conversation /> }],
//   },
// ]);

export default ChatRouter;
