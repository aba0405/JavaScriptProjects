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


function BookList (){
  return (
    <section className = 'booklist'>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  )
}

// const Person = () => <h2>John Doe</h2>
// const Message = () => {
//   return <p>This is the Message</p>
// }

const Book = () => {
  return <article className = 'book'>
    <Image></Image>
    <Title></Title>
    <Author></Author>
  </article>
}

const Image = () => (
  <
    img src="https://images-na.ssl-images-amazon.com/images/I/91BQbqTW6oL._AC_UL200_SR200,200_.jpg" alt=""
  />
)

const Title = () => <h1>Follow the Money: The Shocking Deep State</h1>

const Author = () => <h4>Dan Bongino</h4>

ReactDom.render(<BookList/>, document.getElementById('root'))