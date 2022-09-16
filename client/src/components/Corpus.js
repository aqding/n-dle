import { get, post } from "../utilities";

export class WordCorpus {
  /**
   *
   * @param {*} wordList Array of words in corpus
   */
  constructor(wordList) {
    this.words = new Set(wordList);
  }

  /**
   *
   * @param {*} wordCorpusPath path to corpus text file
   * @returns WordCorpus object
   */
  static async corpusFromPath(wordCorpusPath) {
    console.log("starting corpus path");
    const corpusText = await get("/api/corpusText", { wordCorpusPath: wordCorpusPath });
    return new WordCorpus(corpusText);
  }

  /**
   *
   * @param {*} word word to check if in the corpus
   * @returns returns True if word is in the corpus, False otherwise
   */
  containsWord(word) {
    return this.words.has(word);
  }

  generateWord() {
    const arr = [...this.words];
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
  }
}

export default WordCorpus;
