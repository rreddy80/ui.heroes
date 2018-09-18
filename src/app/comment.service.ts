import { Injectable } from '@angular/core';
import { Http, Headers, ResponseType } from '@angular/http';
import { Comment } from './comment';

import 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


@Injectable()
export class CommentService {
	private commentsUrl = 'api/comments';  // URL to web api
	comments: Comment[] = [];

	constructor(
		private http: HttpClient,
		private messageService: MessageService
		) {}

	/** Log a CommentService message with the MessageService */
	private log(message: string) {
		this.messageService.add(`CommentService: ${message}`);
	}

	getComments(): Observable<Comment[]> {
		return this.http.get<Comment[]>(this.commentsUrl)
		.pipe(
			tap(comments => {
				this.log('fetched ' + comments.length + ' comments');
				this.comments = comments;
			}),
			catchError(this.handleError('getComments', []))
		);
	}

	getCommentsWithReplies(): Observable<Comment[]> {
		return this.http.get<Comment[]>(this.apiUrl()+'/commentsWithReplies')
		.pipe(
			catchError(this.handleError('getCommentsWithReplies', []))
		);
	}

	save(comment: Comment): Observable<any> {
		if(comment._id) {
			return this.put(comment);
		} else {
			return this.post(comment);
		}
	}

	// Add new comment
	private post(comment: Comment): Observable<any> {
		return this.http
			.post(this.commentsUrl, JSON.stringify(comment), httpOptions);
	}

	/**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
	
		// TODO: send the error to remote logging infrastructure
		console.error(error); // log to console instead
	
		// TODO: better job of transforming error for user consumption
		this.log(`${operation} failed: ${error.message}`);
	
		// Let the app keep running by returning an empty result.
		return of(result as T);
		};
	}

	// Update existing Comment
	private put(comment: Comment): Observable<any> {
		let url = `${this.commentsUrl}/${comment._id}`;

		return this.http
			.put(url, JSON.stringify(comment), httpOptions);
	}

	private apiUrl() {
		return 'api';
	}

/*  Below function is commented as it is meant for admin purpose
	delete(comment: Comment) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let url = `${this.commentsUrl()}/${comment._id}`;
		return this.http
			.delete(url, { headers: headers })
			.toPromise()
			.catch(this.handleError);
	}
*/

/** Below function is added for Demo purpose only; For production use, it SHOULD BE commented out OR Removed */
	clearComments():any {
		let url = this.commentsUrl + '/clear/*';

		return this.http
			.delete(url, httpOptions)
			.toPromise()
			.catch(this.handleError);		
	}
}