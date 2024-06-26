/**
 * Open the modal dialog.
 */
function open_modal() { 
    const modal = document.querySelector("dialog");
    const code_area = document.querySelector("dialog code");
    modal.showModal();
    code_area.textContent = table_to_latex().join("\n\n");
}


/**
 * Close the modal dialog.
 */
function close_modal() {
    const modal = document.querySelector("dialog");
    modal.close();
}


/**
 * Copy the content of the code area to the clipboard.
 */
function copy_to_clipboard() {
    const code_area = document.querySelector("dialog code");
    navigator.clipboard.writeText(code_area.textContent)
        .then(() => {
            close_modal();
            window.alert("The content has been copied to the clipboard.");
        })
        .catch((error) => {
            console.error(error);
            window.alert("Could not copy the content to the clipboard.");
        });
}


/**
 * Create a LaTeX bibliography entry.
 * @returns {Array} latex
 */
function table_to_latex() {
    const latex = [];
    const tables = document.querySelectorAll("table");
    tables.forEach(table => {
        switch (table.id) {
            case "book":
                const data_books = get_data_from_table(table);
                Object.values(data_books).forEach(value => {
                    const latex_book = create_latex_book(value);
                    latex.push(latex_book);
                });
                break;

            case "online":
                const data_online = get_data_from_table(table);
                Object.values(data_online).forEach(value => {
                    const latex_online = create_latex_online(value);
                    latex.push(latex_online);
                });
                break;

            default:
                console.error("Could not create LaTeX bibliography for \"" + table.id + "\". No Template found.");
                window.alert("Could not create LaTeX bibliography for \"" + table.id + "\". No Template found.");
                break;
        }
    });

    return latex;
}


/**
 * Get the data from the table.
 * @param {HTMLTableElement} table 
 * @returns {JSON} data
 */
function get_data_from_table(table) {
    const data = {}
    const tr = document.querySelectorAll(`#${table.id} tbody tr`);
    
    tr.forEach((row, index) => {
        const th = document.querySelectorAll(`#${table.id} thead th`);
        data[index] = {};

        row.querySelectorAll("td").forEach((element, i) => {
            if (element.querySelector("a")) {
                const key = th[i].textContent.toLowerCase();
                data[index][key] = element.querySelector("a").href;
                return;
            }

            const key = th[i].textContent.toLowerCase();
            data[index][key] = element.textContent;
        });
    });

    return data;
}
