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

export interface Pet {
  name: string,
  bio: string,
  mainPicture: string,
  pictures: string[],
  enviroment: "Hambiente amplo" | "Hambiente pequeno",
  energy: Energy,
  adress: Adress,
  petRequirements: string[],
  phone: number
}

