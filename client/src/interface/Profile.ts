export interface Profile {
  firstName: string;
  lastName: string;
  gender: string;
  birthday: string;
  email: string;
  phoneNumber: string;
  address: string;
  description: string;
}

export interface SearchProfilesApiData {
  profile?: Profile[];
  error?: { message: string };
}
