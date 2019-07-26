import { homedir } from "os";
import Manufacturer from "./manufacturer";
import { watch } from "fs";






pageBuild();

function pageBuild(){
    home();
    collection();
    manufacturer();
    watch();
}

