export interface ILink {
  name: string;
  path: string;
}

export interface IAnswer {
  answer: string;
  fakeAnswer1: string;
  fakeAnswer2: string;
  fakeAnswer3: string;
}

export interface IQuiz {
  id: number;
  category: string;
  topic: string;
  question: string;
  answers: IAnswer;
}
