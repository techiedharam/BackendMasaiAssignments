const path = require("path");
const fs = require("fs")

const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];

switch (operation) {
  // complete the fillowing function.
  case "create":
    fs.writeFile(file, "", (err)=>{
      if(err){
        console.log(err);
        console.log("Cannot write the file!");
      }
      else{
        console.log("File successfully created!")
      }
    })
    
    break;

    case "read":
      fs.readFile(file, {encoding:"utf-8"}, (err, data)=>{
        if(err){
          console.log(err);
          console.log("Cannot read the file!");
        }
        else{
          console.log(data);
        }
      })
      break;

      case "delete":
        fs.unlink(file, (err)=>{
          if(err){
            console.log(err);
            console.log("Can't delete the file")
          }else{
            console.log("Successfully delete!")
          }
        })
        break;

      case "append":
        fs.appendFile(file, content, (err)=>{
          if(err){
            console.log(err);
            console.log("Can't append the file")
          }
          else{
            console.log("Successfully appended!")
          }
        })
        break;


      case "rename":
        fs.rename(file, content, (err)=>{
          if(err){
            console.log(err);
            console.log("Can't renamed the file")
          }
          else{
            console.log("Successfully renamed!")
          }
        })
        break;

      case "list":
        let listOfFile = fs.readdirSync("./");
        listOfFile.forEach((itm)=>{
          console.log(itm);
        });
        break;
    
  default:
    console.log(`Invalid operation '${operation}'`);
}