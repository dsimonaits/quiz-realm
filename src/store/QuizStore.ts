import { makeAutoObservable, observable, action } from "mobx";
import { IQuiz } from "../types/types";
import { QuizData } from "../FakeQuizData";

class Store {
  static instance: Store | null = null;

  static getInstance() {
    if (!this.instance) {
      this.instance = new Store();
    }
    return this.instance;
  }

  QuizzesData: IQuiz[] = [...QuizData];
  StartQuizData: IQuiz[] = [];
  selectedTopics: string[] = [];
  selectedCategory: string = "";
  constructor() {
    makeAutoObservable(this, {
      QuizzesData: observable,
      StartQuizData: observable,
      selectedCategory: observable,
      selectedTopics: observable,
      setCategory: action,
      getAllCategories: action,
      setTopic: action,
      getAllTopics: action,
      getQuestionsByCategoryAndTopics: action,
      resetStore: action,
    });
  }

  getAllCategories() {
    const categories = [...new Set(QuizData.map((quiz) => quiz.category))];
    return categories;
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }

  getAllTopics(categoryName: string) {
    const filteredQuestions = this.QuizzesData.filter(
      (data) => data.category === categoryName
    );
    const uniqueTopics = [...new Set(filteredQuestions.map((q) => q.topic))];

    return uniqueTopics;
  }

  setTopic(topic: string[]) {
    this.selectedTopics = [...topic];
  }

  getQuestionsByCategoryAndTopics() {
    return this.QuizzesData.filter((quiz) => {
      return (
        quiz.category === this.selectedCategory &&
        this.selectedTopics.includes(quiz.topic)
      );
    });
  }

  setStartQuizData(questions: IQuiz[]) {
    this.StartQuizData = [...questions];
  }

  resetStore() {
    this.selectedTopics = [];
    this.selectedCategory = "";
  }
}

export default Store.getInstance();
