import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Comment } from '../comment';
import { HeroService } from '../hero.service';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  comments: Comment[] = [];

  constructor(
    private heroService: HeroService,
    private commentService: CommentService
    ) { }

  ngOnInit() {
    this.getHeroes();
    this.getComments();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  getComments(): void {
    this.commentService.getComments()
    .subscribe(comments => this.comments = comments.slice(1, 5));
  }
}