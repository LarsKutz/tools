import argparse
import os
import sys
import PyPDF2


def check_path(path: str) -> None:
    """ Check if the path exists and is a directory.

    Args:
        path (str): Path to check

    Raises:
        FileNotFoundError: Error if the path does not exist
        NotADirectoryError: Error if the path is not a directory
    """
    if not os.path.exists(path):
        raise FileNotFoundError(f"Path {path} does not exist.")
    if not os.path.isdir(path):
        raise NotADirectoryError(f"Path {path} is not a directory.")
    

def sort_files(filename: str) -> int:
    """ Sort files by their name. Used in combination with the sorted() function 
    as the key argument. Expected file name format is <number>.pdf.

    Args:
        filename (str): Filename

    Raises:
        ValueError: Error if the file name is not in the expected format <number>.pdf

    Returns:
        int: File name as integer
    """
    try:
        return int(filename.split('.')[0])
    except ValueError:
        raise ValueError(f"File name {filename} is not in the expected format <number>.pdf.")


def combine_pdfs(src_path: str, dest_path: str, pdf_files: list, dest_filename: str) -> None:
    """ Combine PDF files into a single PDF.

    Args:
        src_path (str): Source folder with PDF files
        dest_path (str): Destination folder to save the combined PDF
        pdf_files (list): List of PDF files to combine
        dest_filename (str): Name of the combined PDF file
    """
    merger = PyPDF2.PdfWriter()
    
    for pdf_file in pdf_files:
        full_path = os.path.join(src_path, pdf_file)
        merger.append(full_path)

    merger.write(os.path.join(dest_path, dest_filename))
    merger.close()


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Combine PDFs")

    parser.add_argument('src', type=str, help='Source folder with PDFs to combine')
    parser.add_argument('dest', type=str, help='Destination folder to save the combined PDFs')
    parser.add_argument('-o', '--output', type=str, default='combined.pdf', help='Output file name')

    args = parser.parse_args()

    try:
        check_path(args.src)
        check_path(args.dest)

        src_file_contents = os.listdir(args.src)
        src_pdf_files = [file for file in src_file_contents if file.endswith(".pdf")]
        sorted_pdf_files = sorted(src_pdf_files, key=sort_files)

        output_filename = args.output if args.output.endswith(".pdf") else args.output + ".pdf"

        combine_pdfs(args.src, args.dest, sorted_pdf_files, output_filename)

        print(f"Combined PDFs saved to {os.path.join(args.dest, output_filename)}")

    except (FileNotFoundError, NotADirectoryError) as e:
        print(e)
        sys.exit(1)
