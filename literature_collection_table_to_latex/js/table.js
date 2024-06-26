// const json_file_name = "bibliography.json";
const main = document.querySelector("main");

/**
 * Get the data from the JSON file.
 */
window.onload = () => {
    try {
        const data = get_data();
        const keys = Object.keys(data);

        keys.forEach(key => {
            create_header(key);
            const table = create_table(key);
            const keys = Object.keys(data[key][0]);
            create_table_header(table, keys);

            data[key].forEach(elements => {
                create_table_row(table, elements);
            });
        });
    } catch (error) {
        console.error(error);
        window.alert("Error loading the bibliography data. Please try again later.");
    }
};


/**
 * Create a header with the given name.
 * @param {string} name 
 */
function create_header(name) {
    const head = document.createElement("h2");
    head.textContent = name.charAt(0).toUpperCase() + name.slice(1);
    main.appendChild(head);
}


/**
 * Create a table and append it to the main element.
 * @param {string} key name for table id
 * @returns table element
 */
function create_table(key) {
    const table = document.createElement("table");
    table.id = key;
    const thead = document.createElement("thead");
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    main.appendChild(table);
    return table;
}


/**
 * Create the header of the table.
 * @param {HTMLTableElement} table 
 * @param {Array} data 
 */
function create_table_header(table, data) {
    const thead = table.querySelector("thead");
    const tr = document.createElement("tr");
    thead.appendChild(tr);

    data.forEach(element => {
        const th = document.createElement("th");
        th.textContent = element.charAt(0).toUpperCase() + element.slice(1);
        th.title = get_tooltip_text(element);
        tr.appendChild(th);
    });
}


/**
 * Create a row in the table.
 * @param {HTMLTableElement} table 
 * @param {JSON} data 
 */
function create_table_row(table, data) {
    // console.log(data);
    const tbody = table.querySelector("tbody");
    table.appendChild(tbody);

    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    Object.entries(data).forEach(([key, value]) => {
        if (key === "url" && value !== "") {
            const td = document.createElement("td");
            const a = document.createElement("a");
            a.href = value;
            a.textContent = "Link";
            a.target = "_blank";
            td.appendChild(a);
            tr.appendChild(td);
            return;
        }

        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
    });
}


/**
 * Get the tooltip text for a given column name.
 * @param {string} columnName 
 * @returns {string} tooltip text
 */
function get_tooltip_text(columnName) {
    const tooltips = {
        id: "The unique identifier of the work",
        author: "The person who wrote the work",
        title: "The name of the work",
        publisher: "The company that published the work",
        year: "The year the work was published",
        volume: "Volume number of the work",
        series: "The series number of the work",
        address: "The address of the work. Where it was published",
        access: "The access date of the work. When i accessed the work",
        url: "A link to the work",
        information: "Additional information about the work"
    };
    return tooltips[columnName.toLowerCase()] || "No tooltip available";
}