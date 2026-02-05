# Transliteration App (v0)
## What it does
This is a simple web app that converts certain letters from Latin script to a target script (currently Amharic vowels). 
## Difference Between Translation and Transliteration
- **Translation**: Converts the **meaning** of text from one language to another.  
  - Example: "Hello" -> "ሰላም"
- **Transliteration**: Converts **letters or sounds** from one script to another, keeping the pronunciation.  
  - Example: "Selam" -> "ሰላም" 

## How to Use
1. [click here](https://malchiel-d.github.io/transliteration-app/).
2. Enter a letter in the input box.
3. Click **Convert** to see the result.

## Dictionary 
| Order | 1st (e/a/ee) | 2nd (u) | 3rd (i) | 4th (a) | 5th (e) | 6th (-) | 7th (o) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **VOWELS** | ኧ ee | ኡ u | ኢ i | አ a | ኤ ei | እ e | ኦ o |
| **H** | ሀ ha | ሁ hu | ሂ hi | ሃ haa | ሄ he | ህ h | ሆ ho |
| **L** | ለ le | ሉ lu | ሊ li | ላ la | ሌ lee | ል l | ሎ lo |
| **M** | መ me | ሙ mu | ሚ mi | ማ ma | ሜ mee | ም m | ሞ mo |
| **R** | ረ re | ሩ ru | ሪ ri | ራ ra | ሬ ree | ር r | ሮ ro |
| **S** | ሰ se | ሱ su | ሲ si | ሳ sa | ሴ see | ስ s | ሶ so |
| **SH** | ሸ she | ሹ shu | ሺ shi | ሻ sha | ሼ shee | ሽ sh | ሾ sho |
| **Q** | ቀ qe | ቁ qu | ቂ qi | ቃ qa | ቄ qee | ቅ q | ቆ qo |
| **B** | በ be | ቡ bu | ቢ bi | ባ ba | ቤ bee | ብ b | ቦ bo |
| **T** | ተ te | ቱ tu | ቲ ti | ታ ta | ቴ tee | ት t | ቶ to |
| **CH** | ቸ che | ቹ chu | ቺ chi | ቻ cha | ቼ chee | ች ch | ቾ cho |
| **N** | ነ ne | ኑ nu | ኒ ni | ና na | ኔ nee | ን n | ኖ no |
| **NG** | ኘ nge | ኙ ngu | ኚ ngi | ኛ nga | ኜ ngee | ኝ ng | ኞ ngo |
| **K** | ከ ke | ኩ ku | ኪ ki | ካ ka | ኬ kee | ክ k | ኮ ko |
| **HEE** | ኸ hee | - | -| - | - | - | - |
| **W** | ወ we | ዉ wu | ዊ wi | ዋ wa | ዌ wee | ው w | ዎ wo |
| **Z** | ዘ ze | ዙ zu | ዚ zi | ዛ za | ዜ zee | ዝ z | ዞ zo |
| **ZZ** | ዠ zze | ዡ zzu | ዢ zzi | ዣ zza | ዤ zzee | ዥ zz | ዦ zzo |
| **Y** | የ ye | ዩ yu | ዪ yi | ያ ya | ዬ yee | ይ y | ዮ yo |
| **D** | ደ de | ዱ du | ዲ di | ዳ da | ዴ dee | ድ d | ዶ do |
| **GG** | ጀ gge | ጁ ggu | ጂ ggi | ጃ gga | ጄ ggee | ጅ gg | ጆ ggo |
| **G** | ገ ge | ጉ gu | ጊ gi | ጋ ga | ጌ gee | ግ g | ጎ go |
| **TT** | ጠ tte | ጡ ttu | ጢ tti | ጣ tta | ጤ ttee | ጥ tt | ጦ tto |
| **CHH** | ጨ chhe | ጩ chhu | ጪ chhi | ጫ chha | ጬ chhee | ጭ chh | ጮ chho |
| **PP** | ጰ ppe | ጱ ppu | ጲ ppi | ጳ ppa | ጴ ppee | ጵ pp | ጶ ppo |
| **TS** | ፀ tse | ፁ tsu | ፂ tsi | ፃ tsa | ፄ tsee | ፅ ts | ፆ tso |
| **F** | ፈ fe | ፉ fu | ፊ fi | ፋ fa | ፌ fee | ፍ f | ፎ fo |
| **P** | ፐ pe | ፑ pu | ፒ pi | ፓ pa | ፔ pee | ፕ p | ፖ po |
| **V** | ቨ ve | ቩ vu | ቪ vi | ቫ va | ቬ vee | ቭ v | ቮ vo |

## Roadmap

✅️- fullyDone 🟢-done but not fully  

### v0: Proof of Concept ✅
* **Goal:** Verify that a single Latin character can be swapped for a Ge'ez character.
* **Capability:** The user can type "a" and see "አ" on the screen.
### v1: Complete Vowel Support✅️
* **Goal:** Support the primary vowel sounds in the Amharic alphabet.
* **Capability:** The user can generate the 7 basic vowel forms (ኧ, ኡ, ኢ, አ, ኤ, እ, ኦ).
### v2: Full Character Set (All Letters)
* **Goal:** Expand the logic to include all consonant-vowel combinations (መ, ለ, ሐ, ሰ, etc.).
* **Capability:** The application can handle the entire Amharic "Fidel" syllabus using a standardized mapping system.
### v3: Multi-letter Word Processing
* **Goal:** Transition from mapping individual sounds to processing continuous letter strings as single words.
* **Capability:** The user can type a sequence of sounds without spaces and receive a correctly combined Amharic word (e.g., "selam" -> "ሰላም").
### v4: Sentence support
* **Goal:** Process multiple words 
* **Capability:** The user can type full sentences. 
### v5: Polished UI
* **Goal:** Transform the tool into a professional-grade web application.
* **Capability:** A polished interface featuring a copy-to-clipboard button, and mobile responsiveness.