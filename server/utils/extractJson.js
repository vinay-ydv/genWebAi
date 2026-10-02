const extractJson=async(text)=>{
    if(!text){
        return
    } 
    const cleaned=text.
    replace(/```json/gi,"")
    .replace(/```/g,"")
    .trim();

    const firstBrace=cleaned.indexOf('{')
    const closeBrace=cleaned.lastIndexOf('}')
    if(firstBrace===-1 || closeBrace===-1)return null
    const jsonString=cleaned.slice(firstBrace,closeBrace+1)
 return JSON.parse(jsonString)
}
export default extractJson

// function sanitizeJsonControlChars(str) {
//   let result = "";
//   let inString = false;
//   let escaped = false;

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     const code = str.charCodeAt(i);

//     if (escaped) {
//       result += char;
//       escaped = false;
//       continue;
//     }

//     if (char === "\\" && inString) {
//       result += char;
//       escaped = true;
//       continue;
//     }

//     if (char === '"') {
//       inString = !inString;
//       result += char;
//       continue;
//     }

//     // Inside a string: escape raw control characters
//     if (inString && code < 0x20) {
//       if (code === 0x0a) result += "\\n";       // newline
//       else if (code === 0x0d) result += "\\r";  // carriage return
//       else if (code === 0x09) result += "\\t";  // tab
//       else if (code === 0x08) result += "\\b";  // backspace
//       else if (code === 0x0c) result += "\\f";  // form feed
//       else result += `\\u${code.toString(16).padStart(4, "0")}`;
//       continue;
//     }

//     result += char;
//   }

//   return result;
// }

// const extractJson = async (text) => {
//   if (!text) return null;

//   // Strip markdown code fences
//   const cleaned = text
//     .replace(/```json/gi, "")
//     .replace(/```/g, "")
//     .trim();

//   const firstBrace = cleaned.indexOf("{");
//   const closeBrace = cleaned.lastIndexOf("}");
//   if (firstBrace === -1 || closeBrace === -1) return null;

//   const jsonString = cleaned.slice(firstBrace, closeBrace + 1);

//   // 1st attempt: direct parse (works for well-behaved models like deepseek)
//   try {
//     return JSON.parse(jsonString);
//   } catch (_) {}

//   // 2nd attempt: sanitize control characters then parse
//   try {
//     return JSON.parse(sanitizeJsonControlChars(jsonString));
//   } catch (_) {}

//   // 3rd attempt: regex fallback — extract message + code manually
//   // Handles cases where JSON is severely malformed
//   try {
//     const messageMatch = cleaned.match(/"message"\s*:\s*"((?:[^"\\]|\\.)*)"/);
//     const codeMatch = cleaned.match(/"code"\s*:\s*"([\s\S]*?)"\s*[,}]/);
//     if (codeMatch) {
//       return {
//         message: messageMatch ? messageMatch[1] : "",
//         code: codeMatch[1]
//           .replace(/\\n/g, "\n")
//           .replace(/\\r/g, "\r")
//           .replace(/\\t/g, "\t")
//           .replace(/\\"/g, '"')
//           .replace(/\\\\/g, "\\"),
//       };
//     }
//   } catch (_) {}

  return null;
};

export default extractJson;
