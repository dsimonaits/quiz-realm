import { IQuiz } from "./types/types";

export const QuizData: IQuiz[] = [
  {
    id: 1,
    category: "JavaScript",
    topic: "ArrayMethods",
    question: "What is the map() method?",
    answers: {
      answer:
        "The map() method creates a new array with the results of calling a provided function on every element in the array.",
      fakeAnswer1: "The map() method returns the first element of the array.",
      fakeAnswer2: "The map() method sorts the array in ascending order.",
      fakeAnswer3: "The map() method converts the array to a string.",
    },
  },
  {
    id: 2,
    category: "JavaScript",
    topic: "ArrayMethods",
    question: "How do you add an element to the end of an array?",
    answers: {
      answer:
        "You can use the push() method to add an element to the end of an array.",
      fakeAnswer1:
        "You can use the unshift() method to add an element to the end of an array.",
      fakeAnswer2:
        "You can use the concat() method to add an element to the end of an array.",
      fakeAnswer3:
        "You can use the insert() method to add an element to the end of an array.",
    },
  },
  {
    id: 3,
    category: "JavaScript",
    topic: "ArrayMethods",
    question: "What does the filter() method do?",
    answers: {
      answer:
        "The filter() method creates a new array with all elements that pass the test implemented by the provided function.",
      fakeAnswer1: "The filter() method removes all elements from the array.",
      fakeAnswer2: "The filter() method sorts the array in descending order.",
      fakeAnswer3: "The filter() method converts the array to a string.",
    },
  },
  {
    id: 4,
    category: "JavaScript",
    topic: "ArrayMethods",
    question: "How can you remove the last element from an array?",
    answers: {
      answer:
        "You can use the pop() method to remove and return the last element of an array.",
      fakeAnswer1:
        "You can use the shift() method to remove and return the last element of an array.",
      fakeAnswer2:
        "You can use the slice() method to remove and return the last element of an array.",
      fakeAnswer3:
        "You can use the push() method to remove and return the last element of an array.",
    },
  },
  {
    id: 5,
    category: "JavaScript",
    topic: "ArrayMethods",
    question: "What is the difference between forEach() and map() methods?",
    answers: {
      answer:
        "The forEach() method iterates over the array's elements and performs a provided action for each element. The map() method, on the other hand, creates a new array by applying a provided function to each element in the array and returns the results.",
      fakeAnswer1:
        "There is no difference between forEach() and map() methods.",
      fakeAnswer2:
        "The forEach() method returns a new array, while map() does not.",
      fakeAnswer3: "The map() method only works on even-indexed elements.",
    },
  },
  {
    id: 6,
    category: "JavaScript",
    topic: "ArrayMethods",
    question: "What is the purpose of the reduce() method?",
    answers: {
      answer:
        "The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.",
      fakeAnswer1: "The reduce() method removes all elements from the array.",
      fakeAnswer2: "The reduce() method sorts the array in ascending order.",
      fakeAnswer3: "The reduce() method converts the array to a string.",
    },
  },
  {
    id: 7,
    category: "JavaScript",
    topic: "ArrayMethods",
    question: "How do you find the index of a specific element in an array?",
    answers: {
      answer:
        "You can use the indexOf() method to find the index of a specific element in an array. It returns -1 if the element is not found.",
      fakeAnswer1:
        "You can use the includes() method to find the index of a specific element.",
      fakeAnswer2:
        "You can use the find() method to find the index of a specific element.",
      fakeAnswer3:
        "You can use the search() method to find the index of a specific element.",
    },
  },
  {
    id: 8,
    category: "JavaScript",
    topic: "ArrayMethods",
    question: "What does the some() method do?",
    answers: {
      answer:
        "The some() method checks if at least one element in the array satisfies the provided testing function. It returns true if any element passes the test; otherwise, it returns false.",
      fakeAnswer1:
        "The some() method returns true only if all elements pass the test.",
      fakeAnswer2: "The some() method returns false for all elements.",
      fakeAnswer3: "The some() method removes all elements from the array.",
    },
  },
  {
    id: 9,
    category: "JavaScript",
    topic: "ArrayMethods",
    question: "What is the purpose of the reverse() method?",
    answers: {
      answer:
        "The reverse() method reverses the order of the elements in an array.",
      fakeAnswer1: "The reverse() method sorts the array in ascending order.",
      fakeAnswer2: "The reverse() method removes all elements from the array.",
      fakeAnswer3: "The reverse() method converts the array to a string.",
    },
  },
  {
    id: 10,
    category: "JavaScript",
    topic: "ArrayMethods",
    question: "How do you add multiple elements to the beginning of an array?",
    answers: {
      answer:
        "You can use the unshift() method to add one or more elements to the beginning of an array.",
      fakeAnswer1:
        "You can use the push() method to add elements to the beginning of an array.",
      fakeAnswer2:
        "You can use the append() method to add elements to the beginning of an array.",
      fakeAnswer3:
        "You can use the prepend() method to add elements to the beginning of an array.",
    },
  },
  {
    id: 11,
    category: "JavaScript",
    topic: "ObjectMethods",
    question: "What is an object method in JavaScript?",
    answers: {
      answer:
        "An object method in JavaScript is a function that is stored as a property of an object. It can be invoked on that object to perform a specific action or computation.",
      fakeAnswer1: "An object method is a data type in JavaScript.",
      fakeAnswer2: "An object method is a type of array in JavaScript.",
      fakeAnswer3:
        "An object method is a way to define variables in JavaScript.",
    },
  },
  {
    id: 12,
    category: "React",
    topic: "ComponentLifecycle",
    question:
      "What is the constructor() method used for in React class components?",
    answers: {
      answer:
        "The constructor() method is used for initializing state and binding event handlers in React class components.",
      fakeAnswer1:
        "The constructor() method is used to render components in React.",
      fakeAnswer2: "The constructor() method is used to define props in React.",
      fakeAnswer3:
        "The constructor() method is used to create functional components in React.",
    },
  },
  {
    id: 13,
    category: "React",
    topic: "ComponentLifecycle",
    question: "What is the purpose of the componentDidMount() method in React?",
    answers: {
      answer:
        "The componentDidMount() method is called after a component has been added to the DOM. It is often used for data fetching and initializing the component's state.",
      fakeAnswer1:
        "The componentDidMount() method is called before rendering the component.",
      fakeAnswer2:
        "The componentDidMount() method is called when a component is removed from the DOM.",
      fakeAnswer3:
        "The componentDidMount() method is used for updating the component's state.",
    },
  },
  {
    id: 14,
    category: "React",
    topic: "ComponentLifecycle",
    question:
      "What is the purpose of the componentDidUpdate() method in React?",
    answers: {
      answer:
        "The componentDidUpdate() method is called after a component's state or props have changed and the component has been re-rendered. It is often used for side effects and interactions with the DOM.",
      fakeAnswer1:
        "The componentDidUpdate() method is called before rendering the component.",
      fakeAnswer2:
        "The componentDidUpdate() method is called when a component is initially mounted.",
      fakeAnswer3:
        "The componentDidUpdate() method is used for defining component props.",
    },
  },
  {
    id: 15,
    category: "React",
    topic: "ComponentLifecycle",
    question:
      "What is the purpose of the componentWillUnmount() method in React?",
    answers: {
      answer:
        "The componentWillUnmount() method is called before a component is removed from the DOM. It is used for cleanup tasks such as unsubscribing from event listeners or cancelling network requests.",
      fakeAnswer1:
        "The componentWillUnmount() method is called after a component is removed from the DOM.",
      fakeAnswer2:
        "The componentWillUnmount() method is used for initializing component state.",
      fakeAnswer3:
        "The componentWillUnmount() method is used for rendering the component.",
    },
  },
  {
    id: 16,
    category: "React",
    topic: "ComponentLifecycle",
    question:
      "What is the purpose of the shouldComponentUpdate() method in React?",
    answers: {
      answer:
        "The shouldComponentUpdate() method allows you to control whether a component should re-render when its state or props change. It can improve performance by preventing unnecessary re-renders.",
      fakeAnswer1:
        "The shouldComponentUpdate() method is called after a component is rendered.",
      fakeAnswer2:
        "The shouldComponentUpdate() method is used for initializing component state.",
      fakeAnswer3:
        "The shouldComponentUpdate() method is used for rendering the component.",
    },
  },
  {
    id: 17,
    category: "React",
    topic: "ComponentLifecycle",
    question:
      "What is the purpose of the getDerivedStateFromProps() method in React?",
    answers: {
      answer:
        "The getDerivedStateFromProps() method is called when the props of a component have changed, and it allows you to update the state of the component based on the new props. It is a static method and does not have access to the component's instance.",
      fakeAnswer1:
        "The getDerivedStateFromProps() method is called after rendering the component.",
      fakeAnswer2:
        "The getDerivedStateFromProps() method is used for defining component props.",
      fakeAnswer3:
        "The getDerivedStateFromProps() method is used for adding event listeners.",
    },
  },
  {
    id: 18,
    category: "React",
    topic: "ComponentLifecycle",
    question: "What is the purpose of the componentDidCatch() method in React?",
    answers: {
      answer:
        "The componentDidCatch() method is called when an error occurs within a component's child components. It is used for handling and logging errors in React applications.",
      fakeAnswer1:
        "The componentDidCatch() method is called when a component is initially mounted.",
      fakeAnswer2: "The componentDidCatch() method is used for data fetching.",
      fakeAnswer3:
        "The componentDidCatch() method is used for rendering the component.",
    },
  },
  {
    id: 19,
    category: "React",
    topic: "ComponentLifecycle",
    question:
      "What is the purpose of the getSnapshotBeforeUpdate() method in React?",
    answers: {
      answer:
        "The getSnapshotBeforeUpdate() method is called right before the most recently rendered output is committed to the DOM. It allows you to capture information about the DOM before changes are made.",
      fakeAnswer1:
        "The getSnapshotBeforeUpdate() method is called when a component is removed from the DOM.",
      fakeAnswer2:
        "The getSnapshotBeforeUpdate() method is used for initializing component state.",
      fakeAnswer3:
        "The getSnapshotBeforeUpdate() method is used for rendering the component.",
    },
  },
  {
    id: 20,
    category: "React",
    topic: "ComponentLifecycle",
    question:
      "What is the purpose of the static getDerivedStateFromError() method in React?",
    answers: {
      answer:
        "The static getDerivedStateFromError() method is called after an error has been thrown in a component's child components. It allows you to update the state of the component in response to the error.",
      fakeAnswer1:
        "The static getDerivedStateFromError() method is called before rendering the component.",
      fakeAnswer2:
        "The static getDerivedStateFromError() method is used for rendering the component.",
      fakeAnswer3:
        "The static getDerivedStateFromError() method is used for initializing component props.",
    },
  },
  {
    id: 21,
    category: "NodeJS",
    topic: "CoreModules",
    question: "What is the purpose of the 'fs' module in Node.js?",
    answers: {
      answer:
        "The 'fs' module in Node.js is used for working with the file system. It provides functions for creating, reading, updating, and deleting files and directories.",
      fakeAnswer1:
        "The 'fs' module is used for creating web servers in Node.js.",
      fakeAnswer2:
        "The 'fs' module is used for handling database operations in Node.js.",
      fakeAnswer3:
        "The 'fs' module is used for working with frontend components in Node.js.",
    },
  },
  {
    id: 22,
    category: "NodeJS",
    topic: "CoreModules",
    question: "What is the purpose of the 'http' module in Node.js?",
    answers: {
      answer:
        "The 'http' module in Node.js is used for creating HTTP servers and making HTTP requests. It allows you to handle HTTP requests and responses.",
      fakeAnswer1:
        "The 'http' module is used for handling file operations in Node.js.",
      fakeAnswer2:
        "The 'http' module is used for working with databases in Node.js.",
      fakeAnswer3:
        "The 'http' module is used for rendering web pages in Node.js.",
    },
  },
  {
    id: 23,
    category: "NodeJS",
    topic: "CoreModules",
    question: "What is the purpose of the 'path' module in Node.js?",
    answers: {
      answer:
        "The 'path' module in Node.js is used for working with file paths and directories. It provides functions for manipulating and resolving file paths.",
      fakeAnswer1:
        "The 'path' module is used for handling HTTP requests in Node.js.",
      fakeAnswer2:
        "The 'path' module is used for creating web components in Node.js.",
      fakeAnswer3:
        "The 'path' module is used for rendering web pages in Node.js.",
    },
  },
  {
    id: 24,
    category: "NodeJS",
    topic: "CoreModules",
    question: "What is the purpose of the 'util' module in Node.js?",
    answers: {
      answer:
        "The 'util' module in Node.js provides utility functions that can be used for various purposes, such as debugging, error handling, and working with objects.",
      fakeAnswer1:
        "The 'util' module is used for handling file operations in Node.js.",
      fakeAnswer2:
        "The 'util' module is used for creating web servers in Node.js.",
      fakeAnswer3:
        "The 'util' module is used for rendering web pages in Node.js.",
    },
  },
  {
    id: 25,
    category: "NodeJS",
    topic: "CoreModules",
    question: "What is the purpose of the 'events' module in Node.js?",
    answers: {
      answer:
        "The 'events' module in Node.js allows you to create and emit custom events. It is used for implementing the EventEmitter pattern.",
      fakeAnswer1:
        "The 'events' module is used for handling HTTP requests in Node.js.",
      fakeAnswer2:
        "The 'events' module is used for working with databases in Node.js.",
      fakeAnswer3:
        "The 'events' module is used for rendering web pages in Node.js.",
    },
  },
  {
    id: 26,
    category: "NodeJS",
    topic: "CoreModules",
    question: "What is the purpose of the 'os' module in Node.js?",
    answers: {
      answer:
        "The 'os' module in Node.js provides information about the operating system on which Node.js is running. It allows you to access information like CPU architecture, memory, and network interfaces.",
      fakeAnswer1:
        "The 'os' module is used for creating web servers in Node.js.",
      fakeAnswer2:
        "The 'os' module is used for handling file operations in Node.js.",
      fakeAnswer3:
        "The 'os' module is used for rendering web pages in Node.js.",
    },
  },
  {
    id: 27,
    category: "NodeJS",
    topic: "CoreModules",
    question: "What is the purpose of the 'child_process' module in Node.js?",
    answers: {
      answer:
        "The 'child_process' module in Node.js allows you to create and interact with child processes. It is used for running external commands and scripts from within a Node.js application.",
      fakeAnswer1:
        "The 'child_process' module is used for handling HTTP requests in Node.js.",
      fakeAnswer2:
        "The 'child_process' module is used for working with databases in Node.js.",
      fakeAnswer3:
        "The 'child_process' module is used for rendering web pages in Node.js.",
    },
  },
  {
    id: 28,
    category: "NodeJS",
    topic: "CoreModules",
    question: "What is the purpose of the 'crypto' module in Node.js?",
    answers: {
      answer:
        "The 'crypto' module in Node.js provides cryptographic functionality. It allows you to perform tasks like creating hashes, encrypting and decrypting data, and generating secure random numbers.",
      fakeAnswer1:
        "The 'crypto' module is used for handling file operations in Node.js.",
      fakeAnswer2:
        "The 'crypto' module is used for creating web servers in Node.js.",
      fakeAnswer3:
        "The 'crypto' module is used for rendering web pages in Node.js.",
    },
  },
  {
    id: 29,
    category: "NodeJS",
    topic: "CoreModules",
    question: "What is the purpose of the 'buffer' module in Node.js?",
    answers: {
      answer:
        "The 'buffer' module in Node.js is used for working with binary data. It allows you to create, manipulate, and read binary data directly.",
      fakeAnswer1:
        "The 'buffer' module is used for handling HTTP requests in Node.js.",
      fakeAnswer2:
        "The 'buffer' module is used for working with databases in Node.js.",
      fakeAnswer3:
        "The 'buffer' module is used for rendering web pages in Node.js.",
    },
  },
  {
    id: 30,
    category: "NodeJS",
    topic: "CoreModules",
    question: "What is the purpose of the 'url' module in Node.js?",
    answers: {
      answer:
        "The 'url' module in Node.js provides utilities for parsing and formatting URLs. It allows you to work with URLs in a structured way.",
      fakeAnswer1:
        "The 'url' module is used for creating web servers in Node.js.",
      fakeAnswer2:
        "The 'url' module is used for handling file operations in Node.js.",
      fakeAnswer3:
        "The 'url' module is used for rendering web pages in Node.js.",
    },
  },
  {
    id: 31,
    category: "MongoDB",
    topic: "QueryingDocuments",
    question: "What is a MongoDB query?",
    answers: {
      answer:
        "A MongoDB query is a request for data from a MongoDB database. It specifies the criteria for selecting documents from a collection.",
      fakeAnswer1: "A MongoDB query is a type of data storage in MongoDB.",
      fakeAnswer2:
        "A MongoDB query is used to create new databases in MongoDB.",
      fakeAnswer3:
        "A MongoDB query is a way to define schema for MongoDB collections.",
    },
  },
  {
    id: 32,
    category: "MongoDB",
    topic: "QueryingDocuments",
    question: "What is the purpose of the 'find' method in MongoDB?",
    answers: {
      answer:
        "The 'find' method in MongoDB is used to query documents in a collection based on specified criteria. It returns a cursor that can be used to iterate over the matching documents.",
      fakeAnswer1:
        "The 'find' method is used to insert documents into a collection in MongoDB.",
      fakeAnswer2:
        "The 'find' method is used to update documents in a collection in MongoDB.",
      fakeAnswer3:
        "The 'find' method is used to delete documents from a collection in MongoDB.",
    },
  },
  {
    id: 33,
    category: "MongoDB",
    topic: "QueryingDocuments",
    question: "What is the purpose of the 'findOne' method in MongoDB?",
    answers: {
      answer:
        "The 'findOne' method in MongoDB is used to query and retrieve a single document from a collection based on specified criteria. It returns the first matching document or null if no match is found.",
      fakeAnswer1:
        "The 'findOne' method is used to query all documents in a collection in MongoDB.",
      fakeAnswer2:
        "The 'findOne' method is used to update documents in a collection in MongoDB.",
      fakeAnswer3:
        "The 'findOne' method is used to delete documents from a collection in MongoDB.",
    },
  },
  {
    id: 34,
    category: "MongoDB",
    topic: "QueryingDocuments",
    question: "What is the purpose of the 'count' method in MongoDB?",
    answers: {
      answer:
        "The 'count' method in MongoDB is used to count the number of documents in a collection that match a specified query criteria.",
      fakeAnswer1:
        "The 'count' method is used to insert documents into a collection in MongoDB.",
      fakeAnswer2:
        "The 'count' method is used to update documents in a collection in MongoDB.",
      fakeAnswer3:
        "The 'count' method is used to delete documents from a collection in MongoDB.",
    },
  },
  {
    id: 35,
    category: "MongoDB",
    topic: "QueryingDocuments",
    question: "What is the purpose of the 'sort' method in MongoDB?",
    answers: {
      answer:
        "The 'sort' method in MongoDB is used to sort the results of a query in ascending or descending order based on one or more fields in the documents.",
      fakeAnswer1:
        "The 'sort' method is used to insert documents into a collection in MongoDB.",
      fakeAnswer2:
        "The 'sort' method is used to update documents in a collection in MongoDB.",
      fakeAnswer3:
        "The 'sort' method is used to delete documents from a collection in MongoDB.",
    },
  },
  {
    id: 36,
    category: "MongoDB",
    topic: "QueryingDocuments",
    question: "What is the purpose of the 'limit' method in MongoDB?",
    answers: {
      answer:
        "The 'limit' method in MongoDB is used to limit the number of documents returned by a query. It specifies a maximum number of documents to return.",
      fakeAnswer1:
        "The 'limit' method is used to insert documents into a collection in MongoDB.",
      fakeAnswer2:
        "The 'limit' method is used to update documents in a collection in MongoDB.",
      fakeAnswer3:
        "The 'limit' method is used to delete documents from a collection in MongoDB.",
    },
  },
  {
    id: 37,
    category: "MongoDB",
    topic: "QueryingDocuments",
    question: "What is the purpose of the 'skip' method in MongoDB?",
    answers: {
      answer:
        "The 'skip' method in MongoDB is used to skip a specified number of documents in the result set of a query. It is often used for pagination.",
      fakeAnswer1:
        "The 'skip' method is used to insert documents into a collection in MongoDB.",
      fakeAnswer2:
        "The 'skip' method is used to update documents in a collection in MongoDB.",
      fakeAnswer3:
        "The 'skip' method is used to delete documents from a collection in MongoDB.",
    },
  },
  {
    id: 38,
    category: "MongoDB",
    topic: "QueryingDocuments",
    question: "What is the purpose of the 'aggregate' method in MongoDB?",
    answers: {
      answer:
        "The 'aggregate' method in MongoDB is used to perform complex operations on data in a collection. It allows you to apply multiple stages of transformations to the data.",
      fakeAnswer1:
        "The 'aggregate' method is used to insert documents into a collection in MongoDB.",
      fakeAnswer2:
        "The 'aggregate' method is used to update documents in a collection in MongoDB.",
      fakeAnswer3:
        "The 'aggregate' method is used to delete documents from a collection in MongoDB.",
    },
  },
  {
    id: 39,
    category: "MongoDB",
    topic: "QueryingDocuments",
    question: "What is the purpose of the 'distinct' method in MongoDB?",
    answers: {
      answer:
        "The 'distinct' method in MongoDB is used to retrieve the distinct values of a field in a collection. It returns an array of unique values.",
      fakeAnswer1:
        "The 'distinct' method is used to insert documents into a collection in MongoDB.",
      fakeAnswer2:
        "The 'distinct' method is used to update documents in a collection in MongoDB.",
      fakeAnswer3:
        "The 'distinct' method is used to delete documents from a collection in MongoDB.",
    },
  },
  {
    id: 40,
    category: "MongoDB",
    topic: "QueryingDocuments",
    question: "What is the purpose of the 'mapReduce' method in MongoDB?",
    answers: {
      answer:
        "The 'mapReduce' method in MongoDB is used for aggregating and processing data in a collection using JavaScript functions. It allows for custom data transformations and analysis.",
      fakeAnswer1:
        "The 'mapReduce' method is used to insert documents into a collection in MongoDB.",
      fakeAnswer2:
        "The 'mapReduce' method is used to update documents in a collection in MongoDB.",
      fakeAnswer3:
        "The 'mapReduce' method is used to delete documents from a collection in MongoDB.",
    },
  },
];
