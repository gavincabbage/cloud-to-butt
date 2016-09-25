const RULES = [
	{ regex: /\b[Ff][Cc] [Ss]chalke 04\b/g, replacement: 'FC Coleslaw 04' },
	{ regex: /\b[Ss]chalke\b/g, replacement: 'Shitke' },
	{ regex: /\b[Ss]chalke04\b/g, replacement: 'Shitke04' },
	{ regex: /\b[Ss]04\b/g, replacement: '03+1' },
	{ regex: /\b[Kk]önigsblauen/g, replacement: 'Königscheissen' },
	{ regex: /\bSCHALKE\b/g, replacement: 'SHITKE' },
	{ regex: /\b[Gg]elsenkirchen\b/g, replacement: 'Herne West' },
	{ regex: /\b[Rr]oyal [Bb]lues\b/g, replacement: 'Royal Shits' },
	{ regex: /\b[Ee]mbolo\b/g, replacement: 'Ebola Plunger' },
	{ regex: /\b[Hh]untelaar\b/g, replacement: 'Satan' },
];

function walk(node)
{
	var child, next;

	switch (node.nodeType)
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child)
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	for (var i = 0; i < RULES.length; i++) {
		var rule = RULES[i]
		v = v.replace(rule.regex, rule.replacement);
	}

	textNode.nodeValue = v;
}

function handleTitle() {
	for (var i = 0; i < RULES.length; i++) {
		var rule = RULES[i]
		document.title = document.title.replace(rule.regex, rule.replacement);
	}
}

function setupObserver() {
	new MutationObserver(function() {
		walk(document.body);
	}).observe(document.body, {
		childList: true
	});
}

function main() {
	walk(document.body);
	handleTitle();
	setupObserver();
}

main();
