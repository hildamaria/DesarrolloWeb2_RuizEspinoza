function removeChar(theString, theChar) {
    var theRegex = new RegExp(theChar, "gi");
    return theString.replace(theRegex, '');
}
function removeIt(theInput, theIt) {
    var theRegex = new RegExp(theIt, "gi");
    return theInput.replace(theRegex, '');
}
