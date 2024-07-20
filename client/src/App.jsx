import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
	HomeLayout,
	Error,
	Landing,
	Register,
	Login,
	DashboardLayout,
	EditJob,
} from "./pages";

// importation des pages

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{ index: true, element: <Landing /> },
			{
				path: "register",
				element: <Register />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "dashboard",
				element: <DashboardLayout />,
			},
		],
	},

	{
		path: "/presentation",
		element: <Landing />,
	},
	{
		path: "/editjob",
		element: <EditJob />,
	},
	{
		path: "/error",
		element: <Error />,
	},
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
