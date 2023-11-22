/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { makeAutoObservable, observable, action } from "mobx";

interface IUser {
  name: string;
  email: string;
}

interface Credentials {
  email: string;
  password: string;
}

interface IResult {
  good: number;
  fault: number;
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
  user: IUser = { name: "", email: "" };

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

  async fetchUserProgress() {
    try {
      const response = await axios.get("/api/user/progress"); // Adjust the API endpoint accordingly
      const userProgressData = response.data;
      // Update the user progress in the store
      this.userProgress = userProgressData;
    } catch (error: AxiosError | any) {
      // Handle errors, e.g., show an error message or redirect to the login page
      console.error("Error fetching user progress:", error.message);
    }
  }

  async login(credentials: Credentials) {
    try {
      const response = await axios.post("/api/login", credentials); // Adjust the API endpoint accordingly
      // Assuming the server returns a token upon successful login
      const token = response.data.token;
      // Set the token in Axios headers for future requests
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      // Set the authentication status to true
      this.setAuthenticated(true);
      // Fetch user progress after successful login
      this.fetchUserProgress();
    } catch (error: AxiosError | any) {
      // Handle login errors, e.g., show an error message
      console.error("Error during login:", error.message);
    }
  }

  logout() {
    // Remove the token from Axios headers
    delete axios.defaults.headers.common["Authorization"];
    // Set the authentication status to false
    this.setAuthenticated(false);
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
