import { Component, OnInit } from '@angular/core';
import { Apollo,gql } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post, Query } from '../types';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  posts!: Observable<any[]>;

  constructor(private apollo: Apollo) {}
  private querySubscription!: Subscription;

  ngOnInit(): void {
    this.posts = this.apollo
    .watchQuery<any>({
      query: gql`
        query allPosts {
          posts {
            id
            title
            votes
            author {
              id
              firstName
              lastName
            }
          }
        }
      `
    })
    .valueChanges.pipe(map(result => result.data.posts));

  }

}
