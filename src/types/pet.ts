// to refactor
interface Energy {
  level: 1 | 2 | 3 | 4 | 5,
  description: "Preguiçoso" | "Pouca energia" | "Média" | "Muita energia" | "Extremamente Agitado"
}

interface Adress {
  locationName: string,
  country: string,
  state: string,
  street: string,
  cep: number,
  phone: number
}

export interface IPetResume {
  name: string;
  mainPicture: string;
  specie: "cat" | "dog";
}

export interface Pet extends IPetResume {
  bio: string,
  pictures: string[],
  enviroment: "Hambiente amplo" | "Hambiente pequeno",
  energy: Energy,
  adress: Adress,
  petRequirements: string[],
  phone: number
}

