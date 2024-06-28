# SVG2PDF

## About
This tool can be used to convert `.svg`-files to `.pdf`-files.

## Installation
Please install the required packages in `requirements.txt`. For this tool, we use the [CairoSVG](https://cairosvg.org/documentation/) package.

## Usage
This is a simple cmd application. You can run the app with following parameters:

- `src_file_path`  
The path to your folder where the `.svg`-files are.

- `dest_file_path`  
The path to your folder to save your converted `.pdf`-files.

- `specific_file` (optional)   
If you want to convert only a single file, you can use the optional flag `-f` or `--file`. After the flag you have to name the specific file. Its not necessary to add the ending. Its ok if you just add the name (*valid naming: `-f my_file` or `-f my_file.svg`*). Be aware that every other `.svg`-file instead of the named file will be ignored.

### Application usage

- with `pipenv`:
```cmd
>> pipenv run py .\main.py <src_file_path> <dest_file_path> -f <specific_file>
```

- if you have the package installed locally:
```cmd
>> py .\main.py <src_file_path> <dest_file_path> -f <specific_file>
```
