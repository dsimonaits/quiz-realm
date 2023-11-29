/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeAutoObservable, observable, action } from "mobx";
import { IQuiz, Categories } from "../types/types";
import api from "../service/api";
import Toast from "../components/UI/Toastify/Toastify";

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

class Store {
  static instance: Store | null = null;

  static getInstance() {
    if (!this.instance) {
      this.instance = new Store();
    }
    return this.instance;
  }

  QuizzesData: IQuiz[] = [];
  StartQuizData: IQuiz[] = [];
  startQuiz: true | false = false;
  selectedTopics: string[] = [];
  selectedCategory: Categories | "" = "";
  selectedAnswer: string = "";
  constructor() {
    makeAutoObservable(this, {
      QuizzesData: observable,
      startQuiz: observable,
      StartQuizData: observable,
      selectedCategory: observable,
      selectedTopics: observable,
      selectedAnswer: observable,
      getAllQuestions: action,
      setStartQuiz: action,
      setCategory: action,
      getAllCategories: action,
      setTopics: action,
      getAllTopics: action,
      getQuestionsByCategoryAndTopics: action,
      resetStore: action,
      setAnswer: action,
    });
  }

  setStartQuiz() {
    this.startQuiz = !this.startQuiz;
  }

  async getAllQuestions() {
    try {
      const { data } = await api.get("/api/v1/questions/");

      this.QuizzesData = data.questions;

      console.log(this.QuizzesData);
    } catch (error: AxiosError | any) {
      Toast(error.response.data.errorMessage);
    }
  }

  getAllCategories() {
    const categories: Categories[] = [
      ...new Set(this.QuizzesData.map((quiz) => quiz.category)),
    ];
    return categories;
  }

  setCategory(category: Categories) {
    this.selectedCategory = category;
  }

  getAllTopics(categoryName: string) {
    const filteredQuestions = this.QuizzesData.filter(
      (data) => data.category === categoryName
    );
    const uniqueTopics = [...new Set(filteredQuestions.map((q) => q.topic))];

    return uniqueTopics;
  }

  setTopics(topics: string[]) {
    this.selectedTopics = [...topics];
  }

  getQuestionsByCategoryAndTopics() {
    return this.QuizzesData.filter((quiz) => {
      return (
        quiz.category === this.selectedCategory &&
        this.selectedTopics.includes(quiz.topic)
      );
    });
  }

  setNewQuizQuestions(questions: IQuiz[]) {
    this.StartQuizData = [...questions];
  }

  resetStore() {
    this.selectedTopics = [];
    this.selectedCategory = "JavaScript";
    this.selectedAnswer = "";
  }

  setAnswer(answer: string) {
    this.selectedAnswer = answer;
  }
}

export default Store.getInstance();
