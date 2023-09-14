import { makeAutoObservable, observable, action } from "mobx";
import { IQuiz } from "../types/types";
import { QuizData } from "../FakeQuizData";

interface IUserResult {
  good: number;
  fault: number;
}

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
  selectedCategory: string = "";
  selectedAnswer: string = "";
  userResult: IUserResult = { good: 0, fault: 0 };
  constructor() {
    makeAutoObservable(this, {
      QuizzesData: observable,
      startQuiz: observable,
      StartQuizData: observable,
      selectedCategory: observable,
      selectedTopics: observable,
      selectedAnswer: observable,
      userResult: observable,
      setStartQuiz: action,
      setCategory: action,
      getAllCategories: action,
      setTopic: action,
      getAllTopics: action,
      getQuestionsByCategoryAndTopics: action,
      resetStore: action,
      setAnswer: action,
      setUserResult: action,
    });
  }

  setStartQuiz() {
    this.startQuiz = !this.startQuiz;
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

  setTopic(topic: string) {
    console.log(topic);
    if (this.selectedTopics.includes(topic)) {
      this.selectedTopics = this.selectedTopics.filter((r) => r !== topic);
    } else {
      this.selectedTopics = [...this.selectedTopics, topic];
    }
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
    this.selectedAnswer = "";
    this.userResult = { good: 0, fault: 0 };
  }

  setAnswer(answer: string) {
    this.selectedAnswer = answer;
  }

  setUserResult(result: boolean) {
    result ? (this.userResult.good += 1) : (this.userResult.fault += 1);
  }
}

export default Store.getInstance();
