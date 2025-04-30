import AuthForm from "../../components/Form/AuthForm";
import style from "./AuthPage.module.scss";
import { useNavigate, useSearchParams } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get("type");

  const handleTabNavigation = (authType) => {
    navigate(authType);
  };

  return (
    <div className={style.authPage}>
      <div className={style.authPageContent}>
        <section className={style.contentContainer}>
          <div className={style.tabContainer}>
            <button
              className={`${style.tab} ${activeTab === "login" ? style.active : ""}`}
              onClick={() => handleTabNavigation("/auth?type=login")}
            >
              Login
            </button>

            <button
              className={`${style.tab} ${activeTab === "signup" ? style.active : ""}`}
              onClick={() => handleTabNavigation("/auth?type=signup")}
            >
              Signup
            </button>
          </div>
          <AuthForm />
        </section>
      </div>
    </div>
  );
};

export default AuthPage;
