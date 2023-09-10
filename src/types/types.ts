export interface ILink {
  name: string;
  path: string;
}

export interface IQuiz {
  id: number;
  category: string;
  topic: string;
  question: string;
  answer: string;
  fakeAnswer1: string;
  fakeAnswer2: string;
  fakeAnswer3: string;
}
