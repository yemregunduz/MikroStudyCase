/**
 * Creates a query string from an object's properties and values.
 * @param data The object to create the query string from.
 * @returns A string containing the query parameters.
 */
const generateQueryStringFromObject = (data: any) => {
  let queryString = ``;
  for (let key in data) {
    let value = data[key];

    if (value != undefined) {
      queryString = queryString.concat(`${key}=${value}&`);
    }
  }
  return queryString;
};
const read = (key: string): any => {
  const data = localStorage.getItem(key);
  if (data) {
    return data;
  }
  return;
};

const readAsJson = (key: string): any => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return;
};

const write = (key: string, value: any): void =>
  localStorage.setItem(key, value);

const writeAsJson = (key: string, value: any): void =>
  localStorage.setItem(key, JSON.stringify(value));

const remove = (key: string): void => localStorage.removeItem(key);

const removeAll = (): void => localStorage.clear();

const generateRandomPhoneNumber = () =>
  `(${Math.floor(Math.random() * 899) + 100}) ${
    Math.floor(Math.random() * 899) + 100
  }-${Math.floor(Math.random() * 8999) + 1000}`;

const generateRandomEmailAddress = (firstName?: string, lastName?: string) => {

  if(!firstName || !lastName){
    return undefined
  }
  const emailProviders = ['gmail.com', 'yandex.com', 'outlook.com'];
  const randomProvider =
    emailProviders[Math.floor(Math.random() * emailProviders.length)];
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${randomProvider}`;
};
export const Helpers = {
  generateQueryStringFromObject,
  localStorage: {
    read,
    readAsJson,
    write,
    writeAsJson,
    remove,
    removeAll,
  },
  dummy: {
    generateRandomPhoneNumber,
    generateRandomEmailAddress,
  },
};
