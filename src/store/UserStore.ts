/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeAutoObservable, observable, action } from "mobx";
import api from "../service/api";
import calculateLevel from "../utils/levelCalculator";
import Toast from "../components/UI/Toastify/Toastify";

interface Credentials {
  email: string;
  password: string;
}

interface IResult {
  good: number;
  fault: number;
}

export interface IUser {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  role: string;
  token: string;
  username: string;
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

export interface IProgress {
  quizzes_played: number;
  total_correct_answers: number;
  total_incorrect_answers: number;
  questions_answered: number;
  questions_to_next_level: number;
  current_level: number;
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
    email: "",
    first_name: "null",
    id: 0,
    last_name: "null",
    role: "null",
    token: "",
    username: "null",
  };

  userProgress: IProgress = {
    quizzes_played: 0,
    total_correct_answers: 0,
    total_incorrect_answers: 0,
    questions_answered: 0,
    questions_to_next_level: 10,
    current_level: 1,
  };

  constructor() {
    makeAutoObservable(this, {
      user: observable,
      userProgress: observable,
      isAuthenticated: observable,
      isLoading: observable,
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
      const { id: progressId, user_id, ...userProgress } = response.data;

      this.userProgress = userProgress;
    } catch (error: AxiosError | any) {
      Toast(error.response.data.errorMessage);
    } finally {
      this.setIsLoading(false);
    }
  }

  async updateUserProgress(id: number, body: IProgress) {
    try {
      this.setIsLoading(true);
      const response = await api.patch(`/api/v1/user-progress/id/${id}`, body);
      console.log(response.data);
    } catch (error: AxiosError | any) {
      Toast(error.response.data.errorMessage);
    } finally {
      this.setIsLoading(false);
    }
  }

  async currentUser() {
    try {
      this.setIsLoading(true);
      const response = await api.get("/api/v1/users/whoami");

      this.user = response.data.user;
      this.setAuthenticated(true);
      this.fetchUserProgress(response.data.user.id);
    } catch (error: AxiosError | any) {
      Toast(error.response.data.errorMessage);
    } finally {
      this.setIsLoading(false);
    }
  }

  async login(body: Credentials) {
    try {
      this.setIsLoading(true);
      const response = await api.post("/api/v1/users/login", body);

      this.user = response.data.user;

      const token = response.data.token;
      localStorage.setItem("token", token);
      this.setAuthenticated(true);
      this.fetchUserProgress(response.data.user.id);
    } catch (error: AxiosError | any) {
      Toast(error.response.data.errorMessage);
    } finally {
      this.setIsLoading(false);
    }
  }
  async register(body: Credentials) {
    try {
      this.setIsLoading(true);
      const response = await api.post("/api/v1/users", body);

      this.user = response.data.user;

      const token = response.data.token;
      localStorage.setItem("token", token);
      this.setAuthenticated(true);
      this.fetchUserProgress(response.data.user.id);
    } catch (error: AxiosError | any) {
      Toast(error.response.data.errorMessage);
      console.error("Error during registration", error.message);
    } finally {
      this.setIsLoading(false);
    }
  }
  async updateUserProfile(body: Credentials) {
    try {
      this.setIsLoading(true);
      const id = this.user.id;

      const nonEmptyValues = Object.fromEntries(
        Object.entries(body).filter(([_, value]) => value !== "")
      );

      const response = await api.patch(
        `/api/v1/users/id/${id}`,
        nonEmptyValues
      );

      this.user = { ...this.user, ...response.data };
    } catch (error: AxiosError | any) {
      Toast(error.response.data.errorMessage);
      console.error("Error during update", error.message);
    } finally {
      this.setIsLoading(false);
    }
  }

  logout() {
    delete api.defaults.headers.common["Authorization"];

    this.setAuthenticated(false);

    localStorage.removeItem("token");

    this.userProgress = {
      quizzes_played: 0,
      total_correct_answers: 0,
      total_incorrect_answers: 0,
      current_level: 1,
      questions_answered: 0,
      questions_to_next_level: 10,
    };
  }

  setPlayedGames() {
    this.userProgress.total_correct_answers += 1;
  }

  setUserResult(result: IResult) {
    if (result) {
      this.userProgress.quizzes_played += 1;
      this.userProgress.total_correct_answers += result.good;
      this.userProgress.total_incorrect_answers += result.fault;
      const totalAnswers = result.good + result.fault;
      this.userProgress.questions_answered += totalAnswers;

      const lvl = calculateLevel(
        this.userProgress.total_correct_answers,
        this.userProgress.questions_to_next_level
      );

      this.userProgress.current_level = this.userProgress.current_level + lvl;

      lvl === 1
        ? (this.userProgress.questions_to_next_level +=
            this.userProgress.questions_to_next_level)
        : this.userProgress.questions_to_next_level;

      this.updateUserProgress(this.user.id, this.userProgress);
    }
  }
}

export default UserStore.getInstance();
