/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeAutoObservable, observable, action } from "mobx";
import api from "../service/api";
import Toastify from "toastify-js";

interface Credentials {
  email: string;
  password: string;
}

interface IResult {
  good: number;
  fault: number;
}

interface IUser {
  age: number | null;
  email: string | null;
  first_name: string | null;
  id: number | null;
  last_name: string | null;
  role: string | null;
  token: string | null;
  username: string | null;
}

interface AxiosError {
  response?: {
    data?: any;
    status?: number;
    statusText?: string;
    headers?: any;
    config?: any;
  };
  request?: any;
  message?: string;
  config?: any;
}

interface IProgress {
  totalGamesPlayed: number;
  totalQuestionsAnsweredGames: number;
  totalGoodAnswers: number;
  totalBadAnswers: number;
  currentLevel: number;
  averageScore: number;
}

class UserStore {
  static instance: UserStore | null = null;

  static getInstance() {
    if (!this.instance) {
      this.instance = new UserStore();
    }
    return this.instance;
  }
  isAuthenticated = false;
  isLoading = false;

  user: IUser = {
    age: null,
    email: null,
    first_name: null,
    id: null,
    last_name: null,
    role: null,
    token: null,
    username: null,
  };

  userProgress: IProgress = {
    totalGamesPlayed: 0,
    totalQuestionsAnsweredGames: 0,
    totalGoodAnswers: 0,
    totalBadAnswers: 0,
    currentLevel: 0,
    averageScore: 0,
  };

  constructor() {
    makeAutoObservable(this, {
      user: observable,
      userProgress: observable,
      isAuthenticated: observable,
      setIsLoading: action,
      setAuthenticated: action,
      setPlayedGames: action,
      setUserResult: action,
      fetchUserProgress: action,
    });
  }

  setIsLoading(status: boolean) {
    this.isLoading = status;
  }

  setAuthenticated(status: boolean) {
    this.isAuthenticated = status;
  }

  async fetchUserProgress(id: number) {
    try {
      this.setIsLoading(true);
      const response = await api.get(`/api/v1/user-progress/id/${id}`);
    } catch (error: AxiosError | any) {
      console.error("Error fetching user progress:", error.message);
    } finally {
      this.setIsLoading(false);
    }
  }

  async currentUser() {
    try {
      this.setIsLoading(true);
      const response = await api.get("/api/v1/users/whoami");

      this.user = response.data;
      this.setAuthenticated(true);
    } catch (error: AxiosError | any) {
      console.error("Error during receiving current user:", error.message);
    } finally {
      this.setIsLoading(false);
    }
  }

  async login(body: Credentials) {
    try {
      this.setIsLoading(true);
      const response = await api.post("/api/v1/users/login", body);

      this.user = response.data;

      const token = response.data.token;
      localStorage.setItem("token", token);
      this.setAuthenticated(true);
    } catch (error: AxiosError | any) {
      Toastify({
        text: "Login failed, wrong email or password",
        className: "info",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",

        gravity: "top", // `top` or `bottom`
        stopOnFocus: true, // Prevents dismissing of toast on hover

        style: {
          zIndex: "999",
          position: "absolute",
          top: "10px",
          right: "10px",
          width: "250px",
          padding: "10px",
          borderRadius: "5px",
          color: "white",
          background: "var(--secondaryColor)",
        },
      }).showToast();
      console.error("Error during login:", error.message);
    } finally {
      this.setIsLoading(false);
    }
  }

  logout() {
    // Remove the token from Axios headers
    delete api.defaults.headers.common["Authorization"];
    // Set the authentication status to false
    this.setAuthenticated(false);

    localStorage.removeItem("token");
    // Reset user progress
    this.userProgress = {
      totalGamesPlayed: 0,
      totalQuestionsAnsweredGames: 0,
      totalGoodAnswers: 0,
      totalBadAnswers: 0,
      currentLevel: 0,
      averageScore: 0,
    };
  }

  setPlayedGames() {
    this.userProgress.totalGamesPlayed += 1;
  }

  setUserResult(result: IResult) {
    if (result) {
      this.userProgress.totalGoodAnswers += result.good;
      this.userProgress.totalBadAnswers += result.fault;
      const totalAnswers = result.good + result.fault;
      this.userProgress.totalQuestionsAnsweredGames += totalAnswers;
    }
  }
}

export default UserStore.getInstance();
