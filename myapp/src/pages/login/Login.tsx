import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserType } from "../../type";
import { AppDispatch, RootState } from "../../store/store";
import { userAction } from "../../store/action/userAction";
import { cartAction } from "../../store/action/cartAction";

export const Login = (props: object) => {
    console.log("login");
    const navigate = useNavigate();

    const dispatch: AppDispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userAccessToken = useSelector(
        (state: RootState) => state.userReducer.accessToken,
    );

    const handleLogin = async () => {
        try {
            const data: UserType = {
                email,
                password,
            };
            await dispatch(userAction.login(data));
        } catch (e: any) {
            console.log(e);
        }
    };
    const userEmail = useSelector(
        (state: RootState) => state.userReducer.email,
    );

    useEffect(() => {
        if (userAccessToken) {
            dispatch(cartAction.getAllCart(userEmail));
            navigate("/");
        }
    }, [userAccessToken]);

    return (
        <>
            <div className="flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br">
                <div className="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
                    <div className="max-w-md mx-auto space-y-6 py-8">
                        <div className="col-span-6 sm:col-span-3">
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="text"
                                name="first-name"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1  block w-full shadow-sm sm:text-sm border-gray-500 rounded-md h-8 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80 px-4"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                name="first-name"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1  block w-full shadow-sm sm:text-sm border-gray-500 rounded-md h-8 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80 px-4"
                            />
                        </div>
                        <button
                            type="submit"
                            className="block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
