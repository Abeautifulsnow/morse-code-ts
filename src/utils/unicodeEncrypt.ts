import { encode, decode } from './encrypt'
import { unicodeSplit } from './morse'

/*
    @param {String} str 待加密文本
    @param {String} textBefore 前段明文
    @param {String} textAfter 后段明文
*/
export function encodeByUnicode (str = '', textBefore = '', textAfter = ''): string {
  const unicodeArr: string[] = []
  let unicodeStr = ''
  // unicode 转码
  for (let i = 0; i < str.length; i++) {
    unicodeArr.push(str.charCodeAt(i).toString(36))
  }
  unicodeStr = unicodeArr.join(unicodeSplit) + unicodeSplit
  // 零宽转码
  const ciphertext = encode(unicodeStr)
  return textBefore + ciphertext + textAfter
}
/*
  @param {String} str 待解密字符串
*/
export function decodeByUnicode (str: string): string {
  const plaintextArr = decode(str)
  let plaintext = ''
  let unicodeText = ''

  // 零宽逆转码
  plaintextArr!.map(val => {
    if (val) {
      unicodeText += val
    } else {
      unicodeText += unicodeSplit
    }
  })

  // unicode 逆转码
  unicodeText.split(unicodeSplit).forEach(val => {
    if (!val || val.length === 0) {
      return
    }
    const textNum = parseInt(val, 36)
    plaintext += String.fromCharCode(textNum)
  })

  return plaintext
}
