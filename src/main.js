const RULES = [
	{ regex: /\bSchalke\b/g, replacement: 'Shitke' },
	{ regex: /\bschalke\b/g, replacement: 'shitke' },
	{ regex: /\bSchalke04\b/g, replacement: 'Shitke04' },
	{ regex: /\bschalke04\b/g, replacement: 'shitke04' },
	{ regex: /\bS04\b/g, replacement: 'Shit04' },
	{ regex: /\bs04\b/g, replacement: 'shit04' },
	{ regex: /blauen/g, replacement: 'scheissen' },
	{ regex: /\bBlauen\b/g, replacement: 'Scheissen' },
	{ regex: /\bMiners\b/g, replacement: 'Shitters' },
	{ regex: /\bminers\b/g, replacement: 'shitters' },
	{ regex: /\bSCHALKE\b/g, replacement: 'SHITKE' },
	{ regex: /\bBlues\b/g, replacement: 'Shits' },
	{ regex: /\bblues\b/g, replacement: 'shits' },
	{ regex: /\bGelsenkirchen\b/g, replacement: 'Herne West' },
	{ regex: /\bgelsenkirchen\b/g, replacement: 'herne west' },
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
