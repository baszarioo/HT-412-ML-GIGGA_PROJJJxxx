/* CODE's ACTUALLY HTML XD */
/* / ADD DOCUMENT ELEMENTS WITH D3 / */
const anchor = d3.select("a");
// select an unordered list, append a list item and add a text:
d3.select("ul")
	.append("li")
	.text("Very important item");
//exercise;
<body>
	<script>
		d3.select("body")
			.append("h1")
			.text("learning D3");
	</script>
</body>

// SELECT A GROUP OF ELEMENTS WITH D3 //
//using: const anchors = d3.selectAll("a");
<body>
	<ul>
		<li>Example</li>
		<li>Example</li>
		<li>Example</li>
	</ul>
	<script>
		d3.selectAll("li")
			.text("list item");
	</script>
</body>
	

/* / WORK WITH DATA IN D3 / */
//example: select ul element and create a new list item based on the numbe of entries in the arr.
<body>
	<ul></ul>
	<script>
		const dataset=["a","b","c"]'
		d3.select("ul").selectAll("li")
			.data(dataset)
			.enter()
			.append("li")
			.text("New item");
	</script>
</body>
//exercise:
<body>
	<script>
		const dataset=[12,31,22,17,25,18,29,14,9];
		d3.select("body").selectAll("h2")
			.data(dataset)
			.enter()
			.append("h2")
			.text("New Title");
	</script>
</body>


 
// WORK WITH DYNAMIC DATA IN D3 //
//the text() from D3 can tak a string or a callback function as an argumetn: selection.text((d) => d);
//v1: <body><script>
const dataset=[12,31,22,17,25,18,29,14,9];
d3.select("body").selectAll("h2")
	.data(dataset)
	.enter()
	.append("h2")
	.text((d) => d + ' USD');
//v2:  <body><script> ... 
d3.select("body").selectAll("h2")
	.data(dataset)
	.enter()
	.append("h2")
	.text((d)=> `${d} USD`);



/* / ADD INLINE STYLING TO ELEMENTS / */
//use a style() method: selection.style("color", "blue");
//exercsie: <body><script>
const dataset = [12,31,22,17,25,18,29,14,9];
d3.select("body").selectAll("h2")
	.data(dataset)
	.enter()
	.append("h2")
	.text((d) => (d + " USD"))
	.style("font-family", "verdana");



// CHANGE STYLES BASED ON DATA.
//using conditional logic. `condition ? value if true : value if false`
//exercise; <body><script>
const dataset = [12,31,22,17,25,18,29,14,9];
d3.select("body").selectAll("h2")
	.data(dataset)
	.enter()
	.append("h2")
	.text((d) => ( d + "USD"))
	.style("color", (d) => {
		if(d<20) {
			return 'red'
		} else {
			return 'green'
		}
	})
	
	

/* / ADD CLASSES WITH D3 ./ */
// selection.attr("class", "container"); exercise: give a class = bar, on the div elements
/*  <style> .bar { width: 25px; height: 100px; display: inline-block; background-color: blue; } </style> */
// <body><script>
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
d3.select("body").selectAll("div")
.data(dataset)
.enter()
.append("div")
.attr("class", "bar");

