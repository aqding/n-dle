import { get, post } from "../utilities";

export class WordCorpus {
    /**
     * 
     * @param {*} wordList Array of words in corpus 
     */
    constructor(wordList) {
        this.wordList = wordList;
    }

    /**
     * 
     * @param {*} wordCorpusPath path to corpus text file
     * @returns WordCorpus object
     */
    static async corpusFromPath(wordCorpusPath) {
        console.log("starting corpus path");
        const rawCorpusText = await get("/api/corpusText", { wordCorpusPath: wordCorpusPath });
        console.log("rawCorpusText:", rawCorpusText);
        const wordList = rawCorpusText.split('\n');
        return new WordCorpus(wordList);
    }

    containsWord(word) {
        return this.wordList.includes(word);
    }
}

export default WordCorpus;

