import { calculateTabelAsefi } from "./functions";

const types = [
    {
        title:'مخمس طبیعی',
        isDefault:true,
        method:calculateTabelAsefi,
        table:[
            18, 10, 22, 14,  1,
            12,  4, 16,  8, 25,
             6, 23, 15,  2, 25,
             5, 17,  9, 21, 13,
            24, 11,  3, 20,  7,
        ],
    },
    
];

export default types;