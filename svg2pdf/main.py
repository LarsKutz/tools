import argparse
import os
import sys
import cairosvg


def check_path(path: str) -> None:
    """ Check if the path exists and is a directory.

    Args:
        path (str): Path to check

    Raises:
        FileNotFoundError: Error if the path does not exist
        NotADirectoryError: Error if the path is not a directory
    """
    if not os.path.exists(path):
        raise FileNotFoundError(f"Path \"{path}\" does not exist.")
    if not os.path.isdir(path):
        raise NotADirectoryError(f"Path \"{path}\" is not a directory.")
    

def convert_svg_2_pdf(src_file_path: str, dest_file_path: str) -> None:
    """ Convert SVG file to PDF.

    Args:
        src_file_path (str): Path to the SVG file
        dest_file_path (str): Path to save the PDF file
    """
    try:
        cairosvg.svg2pdf(url=src_file_path, write_to=f"{dest_file_path}.pdf")
        print(f"File \"{src_file_path}\" converted to PDF.")
    except Exception as e:
        print(f"An error occurred while converting file \"{src_file_path}\" to PDF: {type(e).__name__}. {e}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Convert SVG files to PDF.")

    parser.add_argument('src', type=str, help='Source folder with SVGs to transform')
    parser.add_argument('dest', type=str, help='Destination folder to save the PDFs') 
    parser.add_argument('-f', '--file', type=str, help='Specific file to transform instead of all files in the source folder')

    args = parser.parse_args()

    try:
        check_path(args.src)
        check_path(args.dest)
        files = []

        if args.file:
            file = args.file if args.file.endswith(".svg") else f"{args.file}.svg"
            if file not in os.listdir(args.src):
                raise FileNotFoundError(f"File \"{file}\" not found in source folder")

            files.append(file)

        else:
            svg_files = [f for f in os.listdir(args.src) if f.endswith(".svg")]
            if not svg_files:
                raise FileNotFoundError(f"No SVG files found in source folder")

            files.extend(svg_files)
            
        for file in files:
            convert_svg_2_pdf(os.path.join(args.src, file), os.path.join(args.dest, file).replace(".svg", ""))

    except Exception as e:
        print(f"An error occurred: {type(e).__name__}. {e}")
        sys.exit(1)
