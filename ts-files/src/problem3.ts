// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

function countWordOccurrences(sentence: string  , word:string){
    const lowerCasedSentence = sentence.toLowerCase()
    const lowerCasedWord = word.toLowerCase()

    const splitedSentence = lowerCasedSentence.split(' ')

    const wordCount = splitedSentence.filter(word => word === lowerCasedWord).length
    
    return wordCount
}
console.log(countWordOccurrences("I love typescript and typescript", "typescript"))