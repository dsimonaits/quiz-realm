/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeAutoObservable, observable, action } from "mobx";
import api from "../service/api";

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
      setAuthenticated: action,
      setPlayedGames: action,
      setUserResult: action,
      fetchUserProgress: action,
    });
  }

  setAuthenticated(status: boolean) {
    this.isAuthenticated = status;
  }

  async fetchUserProgress(id: number) {
    try {
      const response = await api.get(`/api/v1/user-progress/id/${id}`); // Adjust the API endpoint accordingly
      // const userProgressData = response.data;
      // Update the user progress in the store
      console.log({ userProgress: response });
      // this.userProgress = userProgressData;
    } catch (error: AxiosError | any) {
      // Handle errors, e.g., show an error message or redirect to the login page
      console.error("Error fetching user progress:", error.message);
    }
  }

  async currentUser() {
    try {
      const response = await api.get("/api/v1/users/whoami");

      this.user = response.data;
      this.setAuthenticated(true);
      console.log(this.user);
    } catch (error: AxiosError | any) {
      console.error("Error during receiving current user:", error.message);
    }
  }

  async login(body: Credentials) {
    try {
      const response = await api.post("/api/v1/users/login", body); // Adjust the API endpoint accordingly
      // Assuming the server returns a token upon successful login
      console.log(response.data);

      this.user = response.data;

      console.log(this.user.id);

      const token = response.data.token;
      localStorage.setItem("token", token);
      // Set the token in Axios headers for future requests
      // Set the authentication status to true
      this.setAuthenticated(true);
      // Fetch user progress after successful login
      // this.fetchUserProgress();
    } catch (error: AxiosError | any) {
      // Handle login errors, e.g., show an error message
      console.error("Error during login:", error.message);
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
