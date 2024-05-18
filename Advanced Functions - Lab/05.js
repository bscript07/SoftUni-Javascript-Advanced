function solution() {
    var content = '';

    return {
        append: str => (content += str),
        removeStart: num => (content = content.slice(num)),
        removeEnd: num => (content = content.slice(0, -num)),
        print: () => console.log(content),
    }
}