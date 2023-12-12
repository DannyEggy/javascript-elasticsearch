// app.mjs



window.searchBooks = function () {
    const searchTerm = document.getElementById("searchTerm").value;
    const elasticsearchEndpoint = "http://localhost:9200";
    const indexName = "books";

    const searchQuery = {
        query: {
            match: {
                title: searchTerm
            }
        }
    };

    axios.post(`${elasticsearchEndpoint}/${indexName}/_search`, searchQuery)
        .then(response => {
            const hits = response.data.hits.hits;

            const data = hits.map(hit => ({
                id: hit._source.id,
                title: hit._source.title,
                desc: hit._source.desc,
                authors: hit._source.authors,
                categories: hit._source.categories,
                averagerating: hit._source.averagerating,
                maturityrating: hit._source.maturityrating,
                publisheddate: hit._source.publisheddate,
                pagecount: hit._source.pagecount
            }));

            displaySearchResults(data);
        })
        .catch(error => {
            console.error("Error during search:", error);
        });
}

window.displaySearchResults = function (data) {
    const searchResultsContainer = document.getElementById("searchResultsContainer");
    searchResultsContainer.innerHTML = ""; // Clear previous results

    // Create card elements
    data.forEach(book => {
        console.log(book.id);
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("div");
        title.classList.add("card-title");
        title.textContent = book.title;

        const description = document.createElement("div");
        description.classList.add("card-description");
        description.textContent = book.desc;

        const authors = document.createElement("div");
        if(Array.isArray(book.authors)) {
            authors.classList.add("card-authors");
            authors.textContent = book.authors.join(', ');
        }else{
            authors.classList.add("card-authors");
            authors.textContent = book.authors;
        }
        

        const categories = document.createElement("div");
        if(Array.isArray(book.categories)){
            categories.classList.add("card-categories");
            categories.textContent =  book.categories.join(', ');
        }else{
            categories.classList.add("card-categories");
            categories.textContent =  book.categories;
        }

        
        const averageRating = document.createElement("div");
        averageRating.classList.add("card-average-rating");
        averageRating.textContent =  book.averagerating;

        const maturityRating = document.createElement("div");
        maturityRating.classList.add("card-maturity-rating");
        maturityRating.textContent = "Maturity Rating: " + book.maturityrating;

        const publishedDate = document.createElement("div");
        publishedDate.classList.add("card-published-date");
        publishedDate.textContent = "Published Date: " + book.publisheddate;

        const pageCount = document.createElement("div");
        pageCount.classList.add("card-page-count");
        pageCount.textContent = "Page Count: " + book.pagecount;

        const thumbnail = document.createElement("img");
        thumbnail.src = `https://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`;
        thumbnail.alt = "Book Thumbnail";

        // Append elements to the card
        
        card.appendChild(thumbnail);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(authors);
        card.appendChild(categories);
        card.appendChild(averageRating);
        card.appendChild(maturityRating);
        card.appendChild(publishedDate);
        card.appendChild(pageCount);
        

        // Append the card to the search results container
        searchResultsContainer.appendChild(card);
    });
}

export default searchBooks;
