import React, { Component } from 'react'

import { firestore, auth } from '../firebase'

import Posts from './Posts'
import { collectIdsAndDocs } from '../utilities'
import Authentication from './Authentication'

class Application extends Component {
  state = {
    posts: [],
    user: null,
  }

  unsubscribeFromFirestore = null
  unsubscribeFromAuth = null

  componentDidMount = async () => {
    // const snapshot = await firestore.collection('posts').get()
    // const posts = snapshot.docs.map(collectIdsAndDocs)
    // this.setState({ posts })
    this.unsubscribeFromFirestore = firestore
      .collection('posts')
      .onSnapshot(snapshot => {
        const posts = snapshot.docs.map(collectIdsAndDocs)
        this.setState({ posts })
      })
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log('user', user)
      this.setState({ user })
    })
  }

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore()
  }

  //   handleCreate = async post => {
  //     firestore.collection('posts').add(post)

  //     // const { posts } = this.state
  //     // const docRef = await firestore.collection('posts').add(post)
  //     // const doc = await docRef.get()
  //     // const newPost = collectIdsAndDocs(doc)
  //     // this.setState({ posts: [newPost, ...posts] })
  //   }

  //   handleRemove = async id => {
  //     firestore.doc(`posts/${id}`).delete()

  //     // const allPosts = this.state.posts
  //     // await firestore.doc(`posts/${id}`).delete()
  //     // const posts = allPosts.filter(post => post.id !== id)
  //     //this.setState({ posts })
  //   }

  render() {
    const { posts, user } = this.state

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Authentication user={user} />
        <Posts
          posts={posts}
          //   onCreate={this.handleCreate}
          //   onRemove={this.handleRemove}
        />
      </main>
    )
  }
}

export default Application
