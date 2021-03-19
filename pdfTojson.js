function readPDFFile(pdfFilePath) {
    var PDFParser = require("pdf2json"); //store pdf2json library into variable which contains all methods of reading PDF file.
    var fs=require("fs"); //create file system object
    let FileParser = new PDFParser(this,1); // Create object of PDFParser defined in first line.
    //if any error occured while reading data
    FileParser.on("pdfParser_dataError", errText => console.error(errData.parserError)); //execute only when receive any error while reading PDF file.
    //If data read successfully
    FileParser.on("pdfParser_dataReady", pdfText => {
    //to print data on console
    console.log(FileParser.getRawTextContent().toString());
    //To print data in json file
    fs.writeFile("D:/DataFiles/pdfData.json", JSON.stringify(pdfText));
    });
    FileParser.loadPDF(pdfFilePath);
    }
    //To execute above function
    var pdfFilePath="D:/DataFiles/pdfRead.pdf"; //you can use any pdf here by providing PDF file path.
    readPDFFile(pdfFilePath);