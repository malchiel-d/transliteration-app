function clicked() {
      let inpt = document.getElementById("userInput");
      let text = inpt.value.trim().toLowerCase();
      let outp = document.getElementById("outp");
      //reset color
      outp.style.color = "";        
const dictionary = {
    "ee": "ኧ","u": "ኡ","i": "ኢ","a": "አ","ei": "ኤ","e": "እ","o": "ኦ",
    "ha": "ሀ","hu": "ሁ","hi": "ሂ","haa": "ሃ","he": "ሄ","h": "ህ","ho": "ሆ",
    "le": "ለ","lu": "ሉ","li": "ሊ","la": "ላ","lee": "ሌ","l": "ል","lo": "ሎ",
    "me": "መ","mu": "ሙ","mi": "ሚ","ma": "ማ","mee": "ሜ","m": "ም","mo": "ሞ",
    "re": "ረ","ru": "ሩ","ri": "ሪ","ra": "ራ","ree": "ሬ","r": "ር","ro": "ሮ",
    "se": "ሰ","su": "ሱ","si": "ሲ","sa": "ሳ","see": "ሴ","s": "ስ","so": "ሶ",
    "she": "ሸ","shu": "ሹ","shi": "ሺ","sha": "ሻ","shee": "ሼ","sh": "ሽ","sho": "ሾ",
    "qe": "ቀ","qu": "ቁ","qi": "ቂ","qa": "ቃ","qee": "ቄ","q": "ቅ","qo": "ቆ",
    "be": "በ","bu": "ቡ","bi": "ቢ","ba": "ባ","bee": "ቤ","b": "ብ","bo": "ቦ",
    "te": "ተ","tu": "ቱ","ti": "ቲ","ta": "ታ","tee": "ቴ","t": "ት","to": "ቶ",
    "che": "ቸ","chu": "ቹ","chi": "ቺ","cha": "ቻ","chee": "ቼ","ch": "ች","cho": "ቾ",
    "ne": "ነ","nu": "ኑ","ni": "ኒ","na": "ና","nee": "ኔ","n": "ን","no": "ኖ",
    "nge": "ኘ","ngu": "ኙ","ngi": "ኚ","nga": "ኛ","ngee": "ኜ","ng": "ኝ","ngo": "ኞ",
    "ke": "ከ","ku": "ኩ",
    "ki": "ኪ","ka": "ካ","kee": "ኬ","k": "ክ","ko": "ኮ",
    "hee": "ኸ",
    "we": "ወ","wu": "ዉ","wi": "ዊ","wa": "ዋ","wee": "ዌ","w": "ው","wo": "ዎ",
    "ze": "ዘ","zu": "ዙ","zi": "ዚ","za": "ዛ","zee": "ዜ","z": "ዝ","zo": "ዞ",
    "zze": "ዠ","zzu": "ዡ","zzi": "ዢ","zza": "ዣ","zzee": "ዤ","zz": "ዥ","zzo": "ዦ",
    "ye": "የ","yu": "ዩ","yi": "ዪ","ya": "ያ","yee": "ዬ","y": "ይ","yo": "ዮ",
    "de": "ደ","du": "ዱ","di": "ዲ","da": "ዳ","dee": "ዴ","d": "ድ","do": "ዶ",
    "je": "ጀ","ju": "ጁ","ji": "ጂ","ja": "ጃ","jee": "ጄ","j": "ጅ","jo": "ጆ",
    "ge": "ገ","gu": "ጉ","gi": "ጊ","ga": "ጋ","gee": "ጌ","g": "ግ","go": "ጎ",
    "tte": "ጠ","ttu": "ጡ","tti": "ጢ","tta": "ጣ","ttee": "ጤ","tt": "ጥ","tto": "ጦ",
    "chhe": "ጨ","chhu": "ጩ","chhi": "ጪ","chha": "ጫ","chhee": "ጬ","chh": "ጭ","chho": "ጮ",
    "ppe": "ጰ","ppu": "ጱ","ppi": "ጲ","ppa": "ጳ","ppee": "ጴ","pp": "ጵ","ppo": "ጶ",
    "tse": "ፀ","tsu": "ፁ","tsi": "ፂ","tsa": "ፃ","tsee": "ፄ","ts": "ፅ","tso": "ፆ",
    "fe": "ፈ","fu": "ፉ","fi": "ፊ","fa": "ፋ","fee": "ፌ","f": "ፍ","fo": "ፎ",
    "pe": "ፐ","pu": "ፑ","pi": "ፒ","pa": "ፓ","pee": "ፔ","p": "ፕ","po": "ፖ",
    "ve": "ቨ","vu": "ቩ","vi": "ቪ","va": "ቫ","vee": "ቬ","v": "ቭ","vo": "ቮ"
};

      
 
      let translate = dictionary[text];
      if(text === ""){
        outp.innerHTML = `field is required,<br>check <a href="dictionary.html">dictionary</a>`
        outp.style.color = "red"
      }
      else if(translate){
        outp.innerHTML = translate;
      }else{
        outp.innerHTML = ` "${text}" NOT FOUND please check,<br><a href="dictionary.html">dictionary</a>`;
        outp.style.color = "red";
      }
     
      
      //reset input
      inpt.value = "";
      
    }