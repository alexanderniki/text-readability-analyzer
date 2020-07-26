function main() {}

function calcTextProperties() {
    let textArea = document.getElementById("text-area");
    
    let symbolsCount = document.getElementById("symbols");
    let wordsCount = document.getElementById("words");
    let complexWordsCount = document.getElementById("complex-words");
    let sentencesCount = document.getElementById("sentences");
    let spanIndex = document.getElementById("fog-index");
    
    let textCalc = new StrQualityUtils();
    let text = textArea.value;
    
    symbolsCount.innerHTML = textCalc.calcSymbols(text);
    wordsCount.innerHTML = textCalc.calcWords(text);
    complexWordsCount.innerHTML = textCalc.calcComplexWords(text);
    sentencesCount.innerHTML = textCalc.calcSentences(text)
    spanIndex.innerHTML = textCalc.calcFogIndex(text);
}