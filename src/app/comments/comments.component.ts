import { Component, Input, OnInit }	from '@angular/core';

import { CommentService } from '../comment.service';
import { Comment } from '../comment';

@Component({
	selector: 'app-comments',
	templateUrl: './comments.component.html'
})
export class CommentsComponent {
	@Input() config: any;

	constructor(public commentService: CommentService) {}
	comments: Comment[];

	ngOnInit() {
		this.getComments();
	}

	getComments(): void{
		this.commentService.getComments()
		.subscribe(comments => this.comments = comments);
	}
}