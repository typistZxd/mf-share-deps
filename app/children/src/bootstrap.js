import {getStorage, setStorage} from "main/storage";

setTimeout(() => {
    console.log(getStorage())
    setStorage('children')
    console.log(getStorage())
}, 2000)