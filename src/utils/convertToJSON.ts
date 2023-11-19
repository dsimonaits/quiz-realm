function convertToJSON<T>(data: T) {
  return JSON.stringify(data, null, 2);
}

export default convertToJSON;
