import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { CommentsComponent } from '../comments/comments.component';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { CommentListComponent } from '../comment-list/comment-list.component';
import { CommentService } from '../comment.service';


@NgModule({
	imports: [ CommonModule, FormsModule, NgxPaginationModule ],
	declarations: [ 
		CommentsComponent, 
		CommentFormComponent, 
		CommentListComponent, 
	],
	exports: [ CommentsComponent ],
	providers: [ CommentService ]
})
export class CommentModule {}