import Abjad from "./abjads";
import Mokhamas from "./owfaghs/mokhamas";
import MokhamasKhaliolQalb from "./owfaghs/mokhamasKhaliolQalb";
import Moraba from "./owfaghs/moraba";
import MorabaKhaliAzJama from "./owfaghs/morabaKhaliAzJama";
import MorabaKhaliAzQalb from "./owfaghs/morabaKhaliAzQalb";
import Mosalasi from "./owfaghs/mosalasi";
import MosalasiDopa from "./owfaghs/mosalasiDopa";

const pages = [
    {
        title:'محاسبه ابجد',
        component: Abjad,
    },
    {
        title:'وفق مربعی 4 در 4',
        component: Moraba,
    },
    {
        title:'وفق مربع خالی از جنب 4 در 4',
        component: MorabaKhaliAzJama,
    },
    {
        title:'مربع خالی از قلب',
        component: MorabaKhaliAzQalb,
    },
    {
        title:'وفق مخمس ۵ در ۵',
        component: Mokhamas,
    },
    {
        title:'مخمس خالی از قلب ۵ در ۵',
        component: MokhamasKhaliolQalb,
    },
    {
        title:'وفق مثلثی 3 در 3',
        component: Mosalasi,
    },
    {
        title:'وفق مثلثی دوپا 3 در 3',
        component: MosalasiDopa,
    },
    
]

export default pages;