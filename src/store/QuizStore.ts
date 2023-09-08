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
      selectedTopics: observable,
      selectedCategory: observable,
      StartQuizData: observable,
      setTopic: action,
      getAllTopics: action,
      getAllCategories: action,
      setCategory: action,
      getQuestionsByCategoryAndTopics: action,
      resetStore: action,
    });
  }

  getAllTopics(categoryName: string) {
    const filteredQuestions = this.QuizzesData.filter(
      (data) => data.category === categoryName
    );
    const uniqueTopics = [...new Set(filteredQuestions.map((q) => q.topic))];

    return uniqueTopics;
  }

  getAllCategories() {
    const categories = [...new Set(QuizData.map((quiz) => quiz.category))];
    return categories;
  }

  setTopic(topic: string[]) {
    this.selectedTopics = [...topic];
  }

  setCategory(category: string) {
    this.selectedCategory = category;
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
    console.log(this.StartQuizData);
  }

  resetStore() {
    this.selectedTopics = [];
    this.selectedCategory = "";
    this.StartQuizData = [];
  }
}

export default Store.getInstance();
