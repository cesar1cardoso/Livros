// Selecionando os elementos do formulário e da tabela
const bookForm = document.getElementById('bookForm');
const bookTableBody = document.getElementById('bookTableBody');
const searchInput = document.getElementById('searchInput');
let books = []; // Array para armazenar os livros adicionados

// Adicionando um evento de 'submit' ao formulário
bookForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado
    // Obtendo os valores dos campos do formulário
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const year = document.getElementById('year').value;
    const classification = document.getElementById('classification').value;

    // Criando um objeto 'book' com os valores obtidos
    const book = { title, author, genre, year, classification };
    books.push(book); // Adicionando o livro ao array 'books'
    displayBooks(books); // Exibindo os livros na tabela
    bookForm.reset(); // Limpando o formulário após a submissão
});

// Função para exibir os livros na tabela
function displayBooks(booksArray) {
    bookTableBody.innerHTML = ''; // Limpa o conteúdo atual da tabela
    // Itera sobre o array de livros e cria uma linha na tabela para cada livro
    booksArray.forEach(function(book) {
        const row = document.createElement('tr'); // Cria uma nova linha
        // Adiciona as células da linha com os dados do livro
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>${book.year}</td>
            <td>${book.classification}</td>
        `;
        bookTableBody.appendChild(row); // Adiciona a linha à tabela
    });
}

// Função para buscar livros conforme o texto digitado no campo de pesquisa
function searchBooks() {
    const searchText = searchInput.value.toLowerCase(); // Obtém o texto de pesquisa e converte para minúsculas
    // Filtra os livros pelo texto de pesquisa em qualquer um dos campos
    const filteredBooks = books.filter(function(book) {
        return (
            book.title.toLowerCase().includes(searchText) ||
            book.author.toLowerCase().includes(searchText) ||
            book.genre.toLowerCase().includes(searchText) ||
            book.year.toLowerCase().includes(searchText) ||
            book.classification.toLowerCase().includes(searchText)
        );
    });
    displayBooks(filteredBooks); // Exibe os livros filtrados na tabela
}