const morseWords = [
  '.-',
  '-...',
  '-.-.',
  '-..',
  '.',
  '..-.',
  '--.',
  '....',
  '..',
  '.---',
  '-.-',
  '.-..',
  '--',
  '-.',
  '---',
  '.--.',
  '--.-',
  '.-.',
  '...',
  '-',
  '..-',
  '...-',
  '.--',
  '-..-',
  '-.--',
  '--..'
]

const morseNumber = [
  '-----',
  '.----',
  '..---',
  '...--',
  '....-',
  '.....',
  '-....',
  '--...',
  '---..',
  '----.'
]

interface WordsNumMorse<T> {
  wordsToMorse: T;
  morseToWords: T;
  morseToNum: T;
}

const interWordsNumMorse: WordsNumMorse<{ [key: string]: string }> = {
  wordsToMorse: {},
  morseToWords: {},
  morseToNum: {}
}

const words: string[] = []
for (let i = 10; i < 36; i++) {
  const j = i.toString(36)
  words.push(j)
}

// 数字加密字典
const numToMorse = morseNumber

// 字母加密字典
for (const i in words) {
  const word = words[i]
  interWordsNumMorse.wordsToMorse[word] = morseWords[i]
}
// 字母解密字典
for (const i in interWordsNumMorse.wordsToMorse) {
  const word = interWordsNumMorse.wordsToMorse[i]
  interWordsNumMorse.morseToWords[word] = i
}
// 数字解密字典
for (const i in morseNumber) {
  const morsenumber = morseNumber[i]
  interWordsNumMorse.morseToNum[morsenumber] = i
}
// 合并字典
const decodeWords = Object.assign(
  interWordsNumMorse.morseToWords,
  interWordsNumMorse.morseToNum
)
/* 附件字符 */
const unicodeSplit = '|/|' // unicode 分割符
decodeWords['-...-'] = ' '
decodeWords['.--.-'] = '\\'
decodeWords['.--..'] = unicodeSplit
interWordsNumMorse.wordsToMorse['\\'] = '.--.-'
interWordsNumMorse.wordsToMorse[unicodeSplit] = '.--..'

export { interWordsNumMorse, numToMorse, decodeWords, unicodeSplit }
