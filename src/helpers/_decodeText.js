export default function decodeText(text) {
  let decodedText
  decodedText = text.replace(/&#x2F;/gm, '/')
  decodedText = decodedText.replace(/&amp;/gm, '&')
  decodedText = decodedText.replace(/&#x27;/gm, "'")
  decodedText = decodedText.replace(/&lt;/gm, '<')
  decodedText = decodedText.replace(/&gt;/gm, '>')
  decodedText = decodedText.replace(/&quot;/gm, '"')
  decodedText = decodedText.replace(/<p>/gm, '\n')

  return decodedText
}
