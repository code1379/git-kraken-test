interface Ifronts {
  [index: number]: string
}

const frontLanguage: Ifronts = {
  0: "HTML",
  1: "CSS",
  2: "JavaScript",
  3: "Vue"
}

// 案例
interface ILanguageYear {
  [name: string]: number
}
const languageYear: ILanguageYear = {
  "C": 1972,
  "Java": 1995,
  "JavaScript": 1996,
  "TypeScript": 2014
}
export {}