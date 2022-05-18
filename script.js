const booksList = document.querySelector(".books-list");
const newBookBtn = document.querySelector(".new-book");
const submitFormBtn = document.createElement("button");

const myLibrary = [{ title: "The Pragmatic Programmer" }, { title: "oculus" }];

function Books(title, author, numOfPages, isRead) {
	this.title = title;
	this.author = author;
	this.numOfPages = numOfPages;
	this.isRead = isRead;
	this.info = function () {
		return `${title} by ${author}, ${numOfPages} pages,, ${isRead} `;
	};
}

function addBookToLibrary(book) {
	// do stuff here
	myLibrary.push(book);
}

function appendBookToBody() {
	myLibrary.forEach((book) => {
		const li = document.createElement("li");
		li.textContent = book.title;
		booksList.appendChild(li);
	});
}

let isNewBookBeingDisplayed = false;

const addForm = () => {
	if (isNewBookBeingDisplayed) return;

	// set isNewBookBeingDisplayed displayed to false
	isNewBookBeingDisplayed = true;
	// Create form element
	const form = document.createElement("form");
	form.setAttribute("method", "post");
	form.setAttribute("action", "#");
	form.setAttribute("class", "form");

	// Author
	const labelAuthor = document.createElement("label");
	labelAuthor.setAttribute("for", "author");
	labelAuthor.textContent = "Author: ";

	const inputAuthor = document.createElement("input");
	inputAuthor.setAttribute("type", "text");
	inputAuthor.setAttribute("name", "author");
	inputAuthor.setAttribute("id", "author");

	// Generate title

	const labelTitle = document.createElement("label");
	labelTitle.setAttribute("for", "title");
	labelTitle.textContent = "Title: ";

	const inputTitle = document.createElement("input");
	inputTitle.setAttribute("type", "text");
	inputTitle.setAttribute("name", "title");
	inputTitle.setAttribute("id", "title");

	// Generate is Read switch

	const labelIsRead = document.createElement("label");
	labelIsRead.setAttribute("for", "is-read");
	labelIsRead.setAttribute("class", "switch");

	const inputIsRead = document.createElement("input");
	inputIsRead.setAttribute("type", "checkbox");
	inputIsRead.setAttribute("name", "is-read");
	inputIsRead.setAttribute("id", "is-read");

	const spanIsRead = document.createElement("span");
	spanIsRead.setAttribute("class", "slider round");

	labelIsRead.appendChild(inputIsRead);
	labelIsRead.appendChild(spanIsRead);

	// Submit btn

	submitFormBtn.setAttribute("type", "submit");
	submitFormBtn.setAttribute("class", "submit");
	submitFormBtn.textContent = "Add Book";

	//Append Author
	form.appendChild(labelAuthor);
	form.appendChild(inputAuthor);

	// Append Title
	form.appendChild(labelTitle);
	form.appendChild(inputTitle);

	// Append Is Read Switch
	form.appendChild(labelIsRead);

	// Append Submit Btn
	form.appendChild(submitFormBtn);

	document.body.appendChild(form);
};

newBookBtn.addEventListener("click", addForm);

submitFormBtn.addEventListener("click", (e) => {
	e.preventDefault();
	// Get the form values

	//return new book object

	// Get the form values
	removeForm();
});

function removeForm() {
	// Get and Remove Form element from body
	const form = document.querySelector(".form");
	form.remove();
	// Set true isNewBookBeingDisplayed to false
	isNewBookBeingDisplayed = false;
}

// Get form values
function getFormValues() {
	const form = document.querySelector(".form");
	const author = form.elements["author"];
	const title = form.elements["title"];
	const isRead = form.elements["is-read"];

	const authorValue = author.value;
	const titleValue = title.value;
	const isReadValue = isRead.checked;
}
