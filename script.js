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

const convertJsonToCsv = () => {
    //Receives JSON data and parses it into object
    const jsonData = jsonInput.value;
    const obj = JSON.parse(jsonData);
    console.log(obj)


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
       console.log(reader.result);
       csvInput.value = reader.result
    })
    reader.readAsText(blob);

}

convertBtn.addEventListener('click', convertJsonToCsv);

