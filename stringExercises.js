// Exercise 1: String Length 
// Write a function that takes a string and returns its length.

function strlength(str)
{
    return str.length;
}
console.log("String Length =>",strlength("salam"));

// Exercise 2: Character at Index 
// Write a function that takes a string and an index. Return the character at that index.

function str_index(str,index)
{
    return str[index];
}

console.log("Character at Index =>",str_index("salam",1));

// Exercise 3: Extract Substring 
// Write a function that takes a string and two indices (start and end). Return the substring between the given indices.
function mysubstring(str,start,end) 
{
    return str.substring(start,end);   
}
console.log("Extract Substring  =>",mysubstring("salam",1,3));

// Exercise 4: Split and Count Words 
// Write a function that takes a sentence and returns the number of words in the sentence.
function mysplit(sentence)
{
    return sentence.split(" ").length;
}
console.log("Split and Count Words   =>",mysplit("hello world"));

// Exercise 5: Search and Replace 
// Write a function that takes a sentence and allows the user to search for a word or phrase and replace it with another word or phrase.

function myreplace(sentence,search,rep)
{
    return sentence.replace(search,rep);
}
console.log("Search and Replace    =>",myreplace("hello world","world","Baku"));

// Exercise 6: Find Index of Character 
// Write a function that takes a string and a character and returns the index of the first occurrence of that character in the string.
function myindexof(str,char)
{
    return str.indexOf(char);
}


console.log("Find Index of Character    =>",myindexof("hello world","d"));

// Exercise 7: Reverse a String 
// Write a function that reverses and returns a given string.
function myreverse(str)
{
    return str.reverse();
}

// Exercise 8: Remove Whitespace 
// Write a function that takes a sentence with extra whitespace, removes the extra spaces and returns the sentence.
function remove_space(str)
{
    return str.replace(" ","");
}
console.log("Remove Whitespace     =>",remove_space("hello world"));

// Exercise 9: Concat
// Write a function that concatenates two given strings and returns the resulting string.
function myconcat(str,str2)
{
    return str.concat(str2);
}
console.log("Concat =>",myconcat("hello world"," welcome"));

// Exercise 10: Uppercase Conversion 
// Write a function that takes a sentence and converts the first letter of each word to uppercase.
function upper(sentence)
{
    let words = sentence.split(" ");
   
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");

}

console.log("Uppercase Conversion  =>",upper("hello world welcome"));