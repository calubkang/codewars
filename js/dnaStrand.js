function DNAStrand(dna) {
    let match = '';
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === "A") match += "T";
        else if (dna[i] === "T") match += "A";
        else if (dna[i] === "G") match += "C";
        else if (dna[i] === "C") match += "G";
    }
    return match;
}