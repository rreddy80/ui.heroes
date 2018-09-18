declare var require: any;
// without declaring a require package below imports will fail or throw compilation issues

import { 
	Component, 
	Input, 
	OnInit,
	Output,
	EventEmitter
}	from '@angular/core';

import { CommentService } from '../comment.service';
import { Comment } from '../comment';
import { tap } from 'rxjs/operators';

// require statement added for webpack build process while consuming this module
var comment_form_html = require("./comment-form.component.html");
@Component({
	selector: 'comment-form',
	template: comment_form_html
})
export class CommentFormComponent implements OnInit {

	@Input() parent: Comment;
	@Output() commentAdded = new EventEmitter<boolean>();

	comment: Comment;

	constructor(private commentService: CommentService){}

	new_comment() {
		return { 
			_id: 0, 
			message: '', 
			name: '', 
			email: '', 
			parent_id: 0, 
			replying: false, 
			unique_id: '',
			upvotes: 0,
			downvotes: 0 
		};
	}

	ngOnInit() {
		this.reset();
	}

	reset() {
		this.comment = this.new_comment();
		if(! this.parent) // if there is no parent comment, assign a new comment object
			this.parent = this.new_comment();
		this.comment.parent_id = this.parent._id;
	}

	onSubmit() {
		if(! this.comment.name) 
			this.comment.name = 'Anonymous';
		if(! this.comment.email)
			this.comment.email = 'anonymous@comment.app';

		let component = this;

		this.commentService.save(this.comment)
			.pipe(tap(comment => {

				if(!component.comment.parent_id) {
					component.reset(); // reset form field; but form closure is not neede
				} else {
					component.parent.replying = false; // close the reply form
				}
				this.commentAdded.emit(true); // flag event on addition of comment, 
											  // so that comment list can be refreshed
			}));
	}

}