import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

// stateless functional component
// always return JSX
// JSX Rules
// return single element
// div / section / article or fragment only <>
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

const firstBook = {
  img:
  "https://images-na.ssl-images-amazon.com/images/I/91BQbqTW6oL._AC_UL200_SR200,200_.jpg",
  title:'Follow the Money: The Shocking Deep State',
  author:'Dan Bongino'
}

const secondBook = {
  img:
  "https://images-na.ssl-images-amazon.com/images/I/91BQbqTW6oL._AC_UL200_SR200,200_.jpg",
  title:'Follow the Money: The Shocking Deep State',
  author:'Dan Bongino'
}

function BookList (){
  return (
    <section className = 'booklist'>
      <Book
      img = {firstBook.img}
      title = {firstBook.title}
      author={firstBook.author}
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam beatae nihil non aperiam, odio accusantium porro earum quia! Nesciunt error porro fugiat ratione consequuntur placeat omnis voluptatum sapiente veritatis ducimus.</p>
      </Book>
      <Book/>
      <Book
      img = {secondBook.img}
      title = {secondBook.title}
      author={secondBook.author}
      />
    </section>
  )
}

// const Person = () => <h2>John Doe</h2>
// const Message = () => {
//   return <p>This is the Message</p>
// }

const Book = ({img, title, author,children}) => {
  return (
  <article className = 'book'>
  <img src={img} alt=""/>
  <h1>{title}</h1>
  <h4>{author}</h4>
  {children}
  </article>
  )
}

ReactDom.render(<BookList/>, document.getElementById('root'))