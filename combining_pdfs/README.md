# Combine PDFs

## About
This tool can be used to combine multiple `.pdf`-files.

## Installation
Please install the required packages in `requirements.txt`. For this tool, we use the [PyPDF2](https://pypdf2.readthedocs.io/en/3.x/) package.

## Usage
This is a simple cmd application. You can run the app with following parameters:

- `src_file_path`  
The path to your folder where the `.pdf`-files are.

- `dest_file_path`  
The path to your folder to save your combined `.pdf`-file.

- `output_file_name`  
The name of the combined `.pdf`-file. Default is set to `combined.pdf`.

**ATTENTION: Be sure, that your `.pdf`-files have numerical file names (*e.g. 1.pdf, 2.pdf, ...*), because the application is ordering the pdf-files. The title should have the lowest number, the end the highest. The files dont need to be in correct order.**

### Application usage

- with `pipenv`:
```cmd
>> pipenv run py .\main.py <src_file_path> <dest_file_path> -o <output_file_name>
```

- if you have the package installed locally:
```cmd
>> py .\main.py <src_file_path> <dest_file_path> -o <output_file_name>
```
