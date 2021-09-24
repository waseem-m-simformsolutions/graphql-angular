import { Component, Input, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-upvoter',
  templateUrl: './upvoter.component.html',
  styleUrls: ['./upvoter.component.css']
})
export class UpvoterComponent implements OnInit {

  @Input() postId!: number;

  constructor(private apollo: Apollo) {}

  upvote() {
    this.apollo.mutate({
      mutation: gql`
        mutation upvotePost($postId: Int!) {
          upvotePost(postId: $postId) {
            id
            votes
          }
        }
      `,
      variables: {
        postId: this.postId,
      },
    }).subscribe();
  }

  ngOnInit(): void {
  }

}
