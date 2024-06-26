# literature_collection_table_to_latex

## data structur
```js
// data.js
{
    "book": [
        {
            "id": 
            "author":
            "title":
            "publisher":
            "year":
            "volume":
            "series": 
            "address": 
            "url":
            "information":
        }
    ],
    "online": [
        {
            "id":
            "author":
            "title":
            "year":
            "url": 
            "access":
            "information":
        }
    ]
}
```

### Book
- **ID**: Index
- **Auhor**: Author of the book. 
- **Title**: Title of the book.
- **Publisher**: Publisher of the book.
- **Year**: Release date of the book.
- **Volume**: Volume of the book.
- **Series**: Series of the book.
- **Address**: Address of publication.
- **Url**: URL to a website that has the book or a redirect. 
- **Information**: More information

### Online Source
- **ID**: Index
- **Auhor**: Author of the source.
- **Title**: Title of the source.
- **Year**: Release date of the source.
- **URL**: URL of the source.
- **Access**: Your access of the source.
- **Information**: More information


## .bib structur
```bib
@book{,
    author = {},
    title = {},
    publisher = {},
    year = {},
    volume = {},
    series = {},
    address = {}
}

@online{,
    author = {},
    title = {},
    year = {},
    url = {},
    note = {}
}
```