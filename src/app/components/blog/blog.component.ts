import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { post } from 'src/app/post.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: post[]
  listaCategorias: string[]
  constructor(private postService: PostService) { }

  async ngOnInit() {
    try {
      const arrPost = await this.postService.getAllPost();
      this.posts = arrPost
    }
    catch (error) {
      console.log(error);
    }
    this.listaCategorias = this.postService.getCategory()
  }

  async onChange($event) {
    try {
      if ($event.target.value === 'todos') {
        this.posts = await this.postService.getAllPost();
      } else {
        this.posts = await this.postService.getPostByCategory($event.target.value);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
