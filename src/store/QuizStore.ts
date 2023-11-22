import { makeAutoObservable, observable, action } from "mobx";
import { IQuiz, Categories } from "../types/types";
import { QuizData } from "../MockQuizData";

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

  getAllCategories() {
    const categories: Categories[] = [
      ...new Set(QuizData.map((quiz) => quiz.category)),
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
    console.log(this.selectedCategory);
  }

  setAnswer(answer: string) {
    this.selectedAnswer = answer;
  }
}

export default Store.getInstance();
