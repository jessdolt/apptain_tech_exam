import { uniqueNamesGenerator, Config, names } from "unique-names-generator"

const config: Config = {
  dictionaries: [names, names],
  length: 2,
  separator: " ",
}

export const generateNickName = (): string => uniqueNamesGenerator(config)
