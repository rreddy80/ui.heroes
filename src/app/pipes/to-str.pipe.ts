import { Pipe, PipeTransform } from '@angular/core';

/*
 * Convert elementary mathematical operation into a word such as + to 'plus'
 * 
 * Usage:
 *     operation | to_str
 * Example:
 * 		let op = '+';
 *     {{ op | to_str }}
 *     results in: plus
 */
@Pipe({
	name: 'to_str'
})

export class ToStrPipe implements PipeTransform {

	transform(value: string): string {

		let answer: string = '';
		
		switch(value) {
			case '+': answer = 'plus'; break;
			case '-': answer = 'minus'; break;
			case '*':
			case 'x': answer = 'multiply'; break;
			case '/': answer = 'divided by'; break;
			default: answer = '';
		}
		return answer;
	}
}
