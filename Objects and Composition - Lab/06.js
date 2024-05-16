function fromJSONToHTMLTable(input) {
    let obj = JSON.parse(input);
    let keys = Object.keys(obj[0]);
    let result = "";
    let special_symbols = /[&<>"–—©®™≈≠£€° ]/mg;
    let xxx = (x) => {
        switch (x) {
            case "&": return "&amp;"
            case "<": return "&lt;"
            case ">": return "&gt;"
            case "\"": return "&quot;"
            case "–": return "&ndash;"
            case "—": return "&mdash;"
            default: return "&nbsp;"
        }
    }
    result += "<table>\n\t<tr>"
    for (let key of keys) {
        result += "<th>" + key.replace(special_symbols, xxx) + "</th>";
    }
    result += "</tr>\n"
    obj.forEach(element => {
        result += "\t<tr>"
        for (keys_element in element) {
            if(keys.includes(keys_element)){
            let word = element[keys_element].toString();
            word = word.replace(special_symbols, xxx)
            result += `<td>${word}</td>`;
            }else{
                result += `<td></td>`;
            }
        }
        result += "</tr>\n"
    });
 
    return result += "</table>\n"
}