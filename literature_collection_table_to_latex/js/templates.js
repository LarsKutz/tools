/**
 * Create a LaTeX template for a book.
 * @param {JSON} data 
 * @returns {string} LaTeX template
 */
function create_latex_book(data) {
    const template = `@book{book_${data.id},
    author = {${data.author}},
    title = {${data.title}},
    publisher = {${data.publisher}},
    year = {${data.year}},
    volume = {${data.volume}},
    series = {${data.series}},
    address = {${data.address}},
}`;

    return template;
}


/**
 * Create a LaTeX template for an online source.
 * @param {JSON} data 
 * @returns {string} LaTeX template
 */
function create_latex_online(data) {
    const template = `@online{online_${data.id},
    author = {${data.author}},
    title = {${data.title}},
    year = {${data.year}},
    url = {${data.url}},
    note = {${data.access}}
}`;

    return template;
}
