import React from "react";
import { AuthContext } from "../hooks/useAuth";

export const LogoutButton = () => {
    const { setIsLoggedIn } = React.useContext(AuthContext);

    setIsLoggedIn(false);

}
