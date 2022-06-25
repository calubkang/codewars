function grabscrab(anagram, dictionary) {
    return dictionary.filter(word => word.split('').sort().join('') == anagram.split('').sort().join(''))
}