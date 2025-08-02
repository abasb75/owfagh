import { calculateTabelAsefi } from "./functions";

const types = [
    {
        title:'آصفی',
        isDefault:true,
        method:calculateTabelAsefi,
        table:[
            16,   10,    1,   12,   26,
             9,   21,   19,   13,    3,
            15,   11, null,   14,   25,
             5,    6,   23,   24,    7,
            20,   17,   22,    2,    4,
        ]
    },
    
];

export default types;