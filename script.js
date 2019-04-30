// const download_button = document.getElementById('btn');
// const upload_button = document.getElementById("btn_upload");
// const inpFile = document.getElementById('inpFile');


// const saveFile = () => {
//     const blob = new Blob(['This file is created in JS'], {type: 'text/plain;charset=utf-8'});
//     saveAs(blob , 'static.txt')
// }

// inpFile.addEventListener('change', () => {
//     console.log(inpFile.files);
// })


// download_button.addEventListener('click', saveFile);



const jsonInput = document.getElementById("jsonInput");
const csvInput = document.getElementById('csvInput');
const convertBtn = document.getElementById('convert');
const clearBtn = document.getElementById('clear');
const downloadBtn = document.getElementById('download');

const convertJsonToCsv = () => {
    if (jsonInput.value === '') { //Checks for empty field
        alert('Please enter JSON data');
    } else {
          //Receives JSON data and parses it into object
    const jsonData = jsonInput.value;
    try {
        var obj = JSON.parse(jsonData);
    }
        catch(err) {
            alert('Input provided is not a valid JSON Data! Try Again!');
            jsonInput.value = '';
        }
    }
  
    //stores the headings as array
    const heading = []

    //loops through the object
  let outputValues =  obj.map((el, i) => {
        heading.push(Object.keys(el));
        const values = Object.values(el);

        //Adds the string and comma between words
        const stringValues =  values.join('","')

        let outputValues = 
        `"${stringValues}"\n`
        return outputValues
    }).join('')

    //Adds the string and comma between words
    const stringHeading = heading[0].join('","');

    const outputData = 
        `"${stringHeading}"\n${outputValues}`
    

    //Creates new file and read the file
    const blob = new Blob([outputData], {type: 'text/plain;charset=utf-8'});
    let reader = new FileReader();
    reader.addEventListener('loadend', () => {
       csvInput.value = reader.result
    })
    reader.readAsText(blob);
}

//Clears the input field
const clearInputField = () => {
    jsonInput.value = '';
    csvInput.value = '';
}

const downloadConvertedFile = () => {
    if(csvInput.value === '') {
        alert('First enter JSON data and convert to download!')
    } else {
        const blobCSV = new Blob([csvInput.value], {type: 'text/plain;charset=utf-8'});
        saveAs(blobCSV , 'yourFile.csv')
    }
   
}

convertBtn.addEventListener('click', convertJsonToCsv);
clear.addEventListener('click', clearInputField);
downloadBtn.addEventListener('click', downloadConvertedFile);

