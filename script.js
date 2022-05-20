const booksList = document.querySelector(".books-list");
const newBookBtn = document.querySelector(".new-book");
const addBookBtn = document.createElement("button");

let isNewBookBeingDisplayed = false;

const myLibrary = [];

function Book(title, author, isRead) {
	this.title = title;
	this.author = author;
	this.isRead = isRead;
	this.info = function () {
		return `${title} by ${author}, Read: ${isRead ? "✅" : "❌"} `;
	};
}

function addBookToLibrary(newBook) {
	// do stuff here
	myLibrary.push(newBook);
}

// loop through mylibrary array and append the items to the body
function appendBookToBody() {
	myLibrary.forEach((book, i) => {
		if (i === myLibrary.length - 1) {
			const card = createCard(book, i);
			booksList.appendChild(card);
		}
	});
}

// Create a card element to display each book
function createCard(book, index) {
	const div = document.createElement("div");
	div.setAttribute("class", "card");
	div.dataset.index = index;

	const title = document.createElement("div");
	title.setAttribute("class", "title");
	title.textContent = book.title;

	const author = document.createElement("div");
	author.setAttribute("class", "author");
	author.textContent = book.author;

	const info = document.createElement("p");
	info.setAttribute("class", "info");
	info.textContent = book.info();

	const deleteBtn = document.createElement("button");
	deleteBtn.setAttribute("class", "delete-book");
	deleteBtn.textContent = "Delete Book";

	div.appendChild(title);
	div.appendChild(author);
	div.appendChild(info);
	div.appendChild(deleteBtn);

	return div;
}

function addForm() {
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
	inputAuthor.required = true;

	// Generate title

	const labelTitle = document.createElement("label");
	labelTitle.setAttribute("for", "title");
	labelTitle.textContent = "Title: ";

	const inputTitle = document.createElement("input");
	inputTitle.setAttribute("type", "text");
	inputTitle.setAttribute("name", "title");
	inputTitle.setAttribute("id", "title");
	inputTitle.required = true;

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

	addBookBtn.setAttribute("type", "submit");
	addBookBtn.setAttribute("class", "submit");
	addBookBtn.textContent = "Add Book";

	//Append Author
	form.appendChild(labelAuthor);
	form.appendChild(inputAuthor);

	// Append Title
	form.appendChild(labelTitle);
	form.appendChild(inputTitle);

	// Append Is Read Switch
	form.appendChild(labelIsRead);

	// Append Submit Btn
	form.appendChild(addBookBtn);

	document.body.appendChild(form);
}

function removeForm() {
	// Get and Remove Form element from body
	const form = document.querySelector(".form");
	form.remove();
	// Set true isNewBookBeingDisplayed to false
	isNewBookBeingDisplayed = false;
}

// Get form values
function createNewBook() {
	const form = document.querySelector(".form");
	const author = form.elements["author"];
	const title = form.elements["title"];
	const isRead = form.elements["is-read"];

	const authorValue = author.value;
	const titleValue = title.value;
	const isReadValue = isRead.checked;

	const newBook = new Book(titleValue, authorValue, isReadValue);

	return newBook;
}

newBookBtn.addEventListener("click", addForm);

addBookBtn.addEventListener("click", (e) => {
	e.preventDefault();

	const newBook = createNewBook();
	// Get the form values
	addBookToLibrary(newBook);
	//Append book to body
	appendBookToBody();

	// Get the form values
	removeForm();
});

booksList.addEventListener("click", (e) => {
	if (!e.target.classList.contains("delete-book")) return;
	const cardNumber = e.target.parentElement.dataset.index;
	e.target.parentElement.remove();
	myLibrary.splice(cardNumber, 1);
});

function removeCard(currentCardNumber) {
	// Get and Remove Form element from body
	const cards = document.querySelectorAll(".card");
	cards.forEach((card) => {
		if (card.dataset.index === currentCardNumber) {
			card.remove();
		}
	});
}
