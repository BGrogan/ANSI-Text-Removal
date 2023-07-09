const debug = false;

// This regex only covers 1 pattern, add more regex as more problems are discovered
const regex1 = new RegExp(/\\x1b\[[0-9;]+m/);

var elements = document.querySelectorAll('*');
if (debug) console.group("Looping through elements");
for (var element of elements) {

	for (var node of element.childNodes) {
		var text = node.nodeValue;
		if (text != null && text.match(regex1)) {
			if (debug) console.log("match found: " + text)
			var replacedText = text.replace(regex1, '');
			element.replaceChild(document.createTextNode(replacedText), node);
		}
	}
}
if (debug) console.groupEnd;
