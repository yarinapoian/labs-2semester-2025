import {giveCurrentSecond} from "../lab2_1.js";
import {wrapper} from "../lab2_2.js";

let generator = giveCurrentSecond()

// Test cases
wrapper(generator, 10)

wrapper(generator, 100)