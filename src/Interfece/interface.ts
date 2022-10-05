export interface IUsers {
  name: { title: string; first: string; last: string };
  email: string;
  picture: { medium: string };
  location: { street: { name: string }; city: string; country: string };
  // id: { name: string; value: string };
  login: { uuid: string };
}

export interface IFilter {
  name: string;
  email: string;
  location: string;
}
