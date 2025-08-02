import { 
    calculateTabel, 
    calculateTabelMaqrebi 
} from "./functions";

const calculateTypes = [
    {
        id:1,
        title:'عادی',
        method:calculateTabel,
    },
    {
        id:2,
        title:'مغربی',
        method:calculateTabelMaqrebi,
    },
];

export default calculateTypes;
