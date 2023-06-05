import logger from "./logger.js";

//Kiểu import 1
import {TYPE_ERROR,
        TYPE_WARNING,
        TYPE_LOG } from "./constants.js";

//Kiểu import 2 *
import * as constants from "./constants.js";        


//Export 1 hàm
export default function test_module1() {
        //Sử dụng  kiểu 1
        logger("LAD TEST123 OK module1", TYPE_WARNING);
        //Sử dụng  kiểu 2
        logger("LAD TEST123 OK module2", constants.TYPE_LOG);

}

//Kiểu export với windows
window.hello1 = test_module1;

logger("LAD TEST123 OK from app.js", TYPE_WARNING);