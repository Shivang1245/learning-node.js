import url from "url"

const myURL = new URL('https://example.org:8000')
myURL.pathname = 'a/b/c'
myURL.search = '?d=e'
myURL.hash = '#fgh'

// gives all the details about the coded url``
console.log(myURL)

// tells how thw cooked url will look
console.log(myURL.href)
