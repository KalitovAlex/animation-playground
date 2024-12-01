import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { authApi } from "../api/auth.api";
import { tokenModel } from "./token.model";
import { useAuthStore } from "./store/auth.store";
import { Tokens } from "../../../shared/types/auth";
import { AUTH, DASHBOARD } from "../../../shared/constants/routes";
import { toast } from "sonner";

export const useAuth = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { setUser, setAccessToken, reset } = useAuthStore();

  const handleAuthSuccess = (data: Tokens) => {
    if (!data.accessToken || !data.refreshToken || !data.user) {
      toast.error(t("auth.invalidAuth"));
      return;
    }

    try {
      setAccessToken(data.accessToken);
      setUser(data.user);
      tokenModel.setRefreshToken(data.refreshToken);
      toast.success(t("auth.successLogin"));
      navigate(DASHBOARD);
    } catch (error) {
      toast.error(t("auth.loginFailed", { error }));
      reset();
      tokenModel.removeRefreshToken();
    }
  };

  const login = useMutation({
    mutationFn: authApi.login,
    onSuccess: handleAuthSuccess,
    onError: (error: Error) => {
      toast.error(error.message || t("auth.loginFailed"));
      reset();
      tokenModel.removeRefreshToken();
    },
  });

  const signup = useMutation({
    mutationFn: authApi.signup,
    onSuccess: handleAuthSuccess,
    onError: (error: Error) => {
      toast.error(error.message || t("auth.signupFailed"));
      reset();
      tokenModel.removeRefreshToken();
    },
  });

  const logout = () => {
    try {
      reset();
      tokenModel.removeRefreshToken();
      toast.success(t("auth.successLogout"));
      navigate(AUTH);
    } catch (error) {
      toast.error(t("auth.loginFailed", { error }));
    }
  };

  return {
    login: login.mutate,
    signup: signup.mutate,
    logout,
    isLoading: login.isPending,
    isSigningUp: signup.isPending,
  };
};