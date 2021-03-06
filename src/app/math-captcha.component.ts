import { Component, OnInit }	from '@angular/core';

@Component({
	selector: 'math-captcha',
	template: `
		Give an answer: {{ number1 | in_word }} {{ operation | to_str }} {{ number2 | in_word }} = 

		<input 
			type="text" 
			name="answer" 
			id="answer"
			class="btn btn-default" 
			title="Prove you are human by answering to this math question" 
			placeholder=" ? " 
			[(ngModel)]="user_input" 
			pattern="{{ answer }}"
			size="2" 
			required
		>
		<button 
			(click)="refresh()" 
			class="btn btn-link"
			title="Get Another Math Question"
		><span 
				class="glyphicon glyphicon-refresh" 
				aria-hidden="true"
			></span> Refresh</button>

	`
})
export class MathCaptchaComponent implements OnInit {
	user_input: string;
	number1: number;
	number2: number;
	operation: string;
	answer: string;

	ngOnInit() {
		this.number1 = this.random_number();
		this.number2 = this.random_number();
		this.operation = '+'; // for now, only + operation is used
		this.answer = this.number1 + this.number2 + ''; // empty string used to convert number to string
	}

	reset(){
		this.user_input = '';
		this.refresh();
	}

	random_number() { 
		return Math.floor((Math.random() * 10) + 1); // multiplication factor 10 is used to get single digit
	}

	refresh() {
		this.ngOnInit();
	}
}