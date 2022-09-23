

let first = () => {
	var p1 = document.getElementById("p1");
	var p1Text = p1.firstChild;

	console.log("P1s first child", p1Text);
	//p1.removeChild(p1Text);
	
	console.log("Printing P1 ", p1 );

	//var span = document.createElement("span");
	var textContent = document.createTextNode("Hi there and greetings!");
	
	//span.appendChild(textContent);

	//p1.appendChild(span);

	//p1.removeChild(span);

	p1.appendChild(textContent);
	// p1.replaceChild(textContent, p1Text);

	console.log("Printing P1 ", p1 );
}

let second = () => {
	const matches = document.querySelectorAll("p");
	matches.forEach((matching) => {
  	console.log(matching);
});
}

let third = () => {
	var section = document.getElementById("section1");
	section.innerHTML = "HI this is a section";
	console.log("Section ::", section.innerHTML);
};

let fourth = () => {
	var button = document.getElementById("testButton");
	button.addEventListener('click', () => {
		var operation = document.getElementById("operText").value;
		switch (operation){
			case "1" :
				console.log("TV Button Clicked !!");
				break;
			case "2" : 
				console.log("FIRETV Button Clicked !!");
				break;
			default : 
				console.log("No Device programmed !!");
 		}
	})
}




let runAll = () => {
	// first();
	// second();
	// third();
	fourth();
}