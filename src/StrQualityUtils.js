/*
TODO:
- академическая тошнота
- классическая тошнота
- общая естественность текста
- 
*/

class StrQualityUtils {

    constructor() {
        // init
    }

    calcSentences(text) {
        
        // Calculate amount of sentences in a string
        
        const re = /[.!?]/;
        const sentences = text.split(re);
        console.log(sentences);
        let counter = 0

        for (let i = 0; i < sentences.length; i++) {
            if (sentences[i] != ''){
                counter += 1;
            }
        }

        return (counter)
    }

    calcWords(text) {
        // Calculate amount of words in a string

        let count = 0;
        let words = text.split(" ");

        for (let i = 0; i < words.length; i++) {
            if (words[i] != "") {
                count += 1;
            }
        }

        return (count)
    }

    calcSymbols(text) {
        // Calculate amount of symbols in a string
        return (text.length)
    }

    calcComplexWords(text) {
        
        // Calculate amount of complex words in a string

        let counter = 0;
        let words = text.split(" ");

        for (let i = 0; i < words.length; i++) {
            let syllables = this.calcSyllables(words[i]);
            if (syllables >= 4) {
                counter += 1;
            }
        }

        return (counter);
    }

    calcFogIndex(text) {
        
        // Calculate fog-index of a string

        let words = this.calcWords(text);
        let sentences = this.calcSentences(text);
        let complexWords = this.calcComplexWords(text);

        let fogIndex = 0.4 * (0.78 * words / sentences + 100 * complexWords / words);
        fogIndex = Math.round(fogIndex);
        
        return (fogIndex);
    }

    calcFlashIndex(text) {
        // Calculate flash-index of a string
    }

    calcSyllables(text) {
        
        let word = text.toLowerCase();
        
        if (word.length <= 3) {
            return 1;
        }
        
        word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
        word = word.replace(/^y/, '');
        
        //return word.match(/[aeiouy]{1,2}/g).length;
        return word.match(/[aeiouyаеиоуыяю]{1,2}/g).length;
    }

}
