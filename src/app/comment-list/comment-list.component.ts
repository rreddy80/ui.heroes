declare var require: any;

import { Component, OnInit, Input }	from '@angular/core';

import { CommentService } from '../comment.service';
import { Comment } from '../comment';
import { tap } from 'rxjs/operators';

var comment_listing_html = require("./comment-list.component.html");  // require statement added for webpack build process
var comment_listing_css = require("./comment-list.component.css"); // while consuming this module
var comment_listing_css_string = comment_listing_css.toString(); // convert to string as @Component.styles accept only string
@Component({
	selector: 'comment-list',
	template: comment_listing_html,
	styles: [ comment_listing_css_string ]
})

export class CommentListComponent implements OnInit {

	comments: Comment[];
	commentsTreeExpanded: any[];
	user: any = {canDelete: true};

	constructor(private commentService: CommentService){}

	ngOnInit() {
		this.getComments();
	}

	private getComments() { // retrieves all comments
		this.commentService.getComments()
		.pipe(
			tap(comments => this.comments = comments)
		)}

	// private getCommentsWithReplies() { // retrieves all comments in hierarchy tree
	// 	var delay = 500; // milllseconds
	// 	var component = this;
	// 	console.log('checkpoint 1: ');
	// 	console.log(component);
	// 	this.commentService.getCommentsWithReplies().then(comments => {		
	// 		component.comments = comments;
	// 		console.log('checkpoint 2: ');
	// 		console.log(component);				
	// 	});
	// 	setTimeout(
	// 		function(){
	// 			console.log('checkpoint 3: ');
	// 			console.log(component);					
	// 			component.commentsTreeExpanded = component.expandCommentsTree(component.comments);
	// 			console.log('checkpoint 4: ');
	// 			console.log(component);					
	// 		}, 
	// 		delay
	// 	); // wait for build process to complete		
	// }

	private getCommentsWithReplies() { // retrieves all comments in hierarchy tree
		this.commentService.getCommentsWithReplies()
		.pipe(
			tap(comments => {
				this.comments = comments;
				this.commentsTreeExpanded = this.expandCommentsTree(this.comments)
			})
		)}


	private expandCommentsTree(comments: any[]):Array<any> {
		var result: any[] = [];
		var component = this;
		comments.forEach(function(comment){
			result.push(comment);
			var temp: any[];
			if(comment.replies){
				console.log('Recursive call to get replies of...');
				console.log(comment);
				temp = component.expandCommentsTree(comment.replies);
				result.push.apply(result, temp);
			}
		});
		return result;
	}
/*  Below method is commented as it is meant for admin purpose
	private deleteComment(comment: Comment) {
		var component = this;
		this.commentService
			.delete(comment)
			.then(response => {
				component.refresh(true);  // refresh the comment list
			})
	}
*/
	public refresh(proceed: boolean) {
		this.getCommentsWithReplies();
	}

	public upvoted(comment: Comment) {
		comment.upvotes++; // increment upvotes count by 1
		this.commentService.save(comment)
		.pipe(
			tap(comments => {})
		)}

	public downvoted(comment: Comment) {
		comment.downvotes++; // increment upvotes count by 1
		this.commentService.save(comment)
		.pipe(
			tap(comments => {})
		)}

	public clear() {
		var component = this;
		this.commentService.clearComments()
			.then( () => {
				component.refresh(true);
			});
	}
}