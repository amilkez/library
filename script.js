const booksList = document.querySelector(".books-list");
const newBookBtn = document.querySelector(".new-book");

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

myLibrary.forEach((book) => {
	const li = document.createElement("li");
	li.textContent = book.title;
	booksList.appendChild(li);
});

const addForm = () => {
	// Create form element
	const form = document.createElement("form");
	form.setAttribute("method", "post");
	form.setAttribute("action", "#");

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

	const submitForm = document.createElement("button");
	submitForm.setAttribute("type", "submit");
	submitForm.setAttribute("class", "submit");
	submitForm.textContent = "Add Book";

	//Append Author
	form.appendChild(labelAuthor);
	form.appendChild(inputAuthor);

	// Append Title
	form.appendChild(labelTitle);
	form.appendChild(inputTitle);

	// Append Is Read? fields
	form.appendChild(labelIsRead);
	form.appendChild(inputIsRead);

	// Append Submit Btn
	form.appendChild(submitForm);

	document.body.appendChild(form);
};

newBookBtn.addEventListener("click", addForm);

const submitFormBtn = document.querySelector(".submit");

console.log(submitFormBtn);
