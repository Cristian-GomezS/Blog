import { Injectable } from '@angular/core';
import { post } from '../post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPost: post[];

  constructor() {
    this.arrPost = [];
  }

  addPost(nuevoPost: post) {
    return new Promise((resolve, reject) => {
      this.arrPost.push(nuevoPost);
      resolve(this.arrPost)
    })
  }

  getAllPost(): Promise<post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPost)
    })
  }



  getPostByCategory(categoria: string): Promise<post[]> {
    return new Promise((resolve, reject) => {
      const arrFiltrado = this.arrPost.filter(post => {
        return post.categoria === categoria
      })
      resolve(arrFiltrado)
    })
  }

  getCategory(): string[] {
    const arrNuevo = this.arrPost.map(post => post.categoria);
    return [... new Set(arrNuevo)]
  }
}
