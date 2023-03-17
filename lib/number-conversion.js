import { readFile } from 'node:fs';

const NUMBER_CONSTRAINTS = {
    2: 'ABC', 3: 'DEF', 4: 'GHI', 5: 'JKL', 6: 'MNO', 7: 'PQR', 8: 'STU', 9: 'VXYZ'
}

function convertToLetterString(number) {
    const letterEquivelents = [];

    for (let i = 0; i < number.length; i++) {
        letterEquivelents.push(NUMBER_CONSTRAINTS[number[i]]);
    }

    return letterEquivelents;
}

function iterateLetters (lettersArray, words, index = 0) {
	const filteredWords = [];
	for (let l = 0; l < lettersArray[index].length; l++) {
		const letter = lettersArray[index][l];
		for (let w = 0; w < words.length; w++) {
			if(words[w][index] === letter.toLowerCase()) {
				filteredWords.push(words[w]);
			}
		}
	}
	index = index + 1;

	if (lettersArray.length !== index) {
		return iterateLetters(lettersArray, filteredWords, index)
	} else {
		return filteredWords;
	}

}


function findWords(lettersArray) {
    return new Promise((resolve, reject) => {
        readFile('./lib/words.json', 'utf-8', (err, data) => {
            if (err) throw err;

            const words = JSON.parse(data).words

			resolve(iterateLetters(lettersArray, words))
        })
    })
}

export default async function(numbers) {
	return await findWords(convertToLetterString(numbers))
}