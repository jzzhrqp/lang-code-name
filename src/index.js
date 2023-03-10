import {langsOwnLang} from "./langsOwnLang.js";
import {langsEnglish} from "./langsEnglish.js";
import {langsChinese} from "./langsChinese.js";

 function getLangCodeNameInChinese(langCode) {
    if(Object.keys(langsChinese).find((k)=>k===langCode)){
        return langsChinese[`${langCode}`]
    }else {
        return langCode
    }
}

 function getLangCodeNameInEnglish(langCode){
    if(Object.keys(langsEnglish).find((k)=>k===langCode)){
        return langsEnglish[`${langCode}`]
    }else {
        return langCode
    }
}

 function getLangCodeNameInLocalLang(langCode){
    if(Object.keys(langsOwnLang).find((k)=>k===langCode)){
        return langsOwnLang[`${langCode}`]
    }else {
        return langCode
    }
}

const LangName = {
     getLangCodeNameInChinese,
    getLangCodeNameInEnglish,
    getLangCodeNameInLocalLang
}
export default LangName