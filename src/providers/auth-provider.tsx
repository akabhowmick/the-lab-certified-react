import { User } from "@supabase/supabase-js";
import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import Swal from "sweetalert2";
import { signInUserSupabase } from "../api/LabAuthRequests/SignInUser";
import { signUpUserSupabase } from "../api/LabAuthRequests/SignUpUser";
import { updateUserSupabase } from "../api/LabAuthRequests/UpdateUser";
import { UserSignIn } from "../types/interfaces";
import { supabase } from "../api/supabase-requests";
import { signOutUserSupabase } from "../api/LabAuthRequests/LogoutUser";

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;

  userLoading: boolean;
  signUpUser: (user: UserSignIn) => Promise<string | undefined>;
  signInUser: (user: UserSignIn) => Promise<boolean>;
  editUserLogin: (password: string) => Promise<void>;
  logOutUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userLoading, setUserLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const setLocalStorage = (user: User) => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      setLoggedIn(true);
    }
  };

  const checkUserSession = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      setUser(user);
      setLoggedIn(true);
    }
    setUserLoading(false);
  };

  const logOutUser = async () => {
    const { error } = await signOutUserSupabase();
    if (!error) {
      setUser(null);
      setLoggedIn(false);
      localStorage.removeItem("user");
    }
  };

  useEffect(() => {
    checkUserSession();
  }, []);

  const signUpUser = async (userInfo: UserSignIn) => {
    const { data, error } = await signUpUserSupabase(userInfo.email, userInfo.password);
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
    if (data.user) {
      setLocalStorage(data.user);
      setUser(data.user);
      return data!.user?.id;
    }
  };

  const signInUser = async (userInfo: UserSignIn) => {
    const { data, error } = await signInUserSupabase(userInfo.email, userInfo.password);
    if (data.user) {
      setLocalStorage(data.user);
      return true;
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${error}`,
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      return false;
    }
  };

  const editUserLogin = async (password: string) => {
    const { data, error } = await updateUserSupabase(password);
    if (data.user) {
      setLocalStorage(data.user);
    }
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        userLoading,
        loggedIn,
        setLoggedIn,
        signUpUser,
        signInUser,
        editUserLogin,
        logOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);
