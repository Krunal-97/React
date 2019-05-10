import React , { Component } from 'react'
import Output from './output'


class Input extends Component {
    state = {
        noteBooks: undefined,
        pages: undefined,
        finalPrice: undefined
    }
      
      onSubmitForm = (event) => {
        event.preventDefault()
        // const {name , value} = event.target
        const noteBooks = event.target.elements.noteBooks.value
        const pages = event.target.elements.pages.value

        if(!isNaN(noteBooks) && !isNaN(pages) && noteBooks === '5000') {
            const step1 = ((noteBooks * pages * 1200) / 8000) 
            const step2 = (noteBooks * 2.70)
            const step3 = parseInt(step1) + parseInt(step2) + 2200
            const finalPrice = parseFloat(step3/noteBooks)
            console.log(finalPrice)
            this.setState({
                noteBooks: noteBooks,
                pages: pages,
                finalPrice: finalPrice
                })
               
            } else if(!isNaN(noteBooks) && !isNaN(pages) && noteBooks === '10000') {
                const step1 = ((noteBooks * pages * 1200) / 8000) 
                const step2 = (noteBooks * 2.70)
                const step3 = parseInt(step1) + parseInt(step2) + 2600
                const finalPrice = parseFloat(step3/noteBooks)
                console.log(finalPrice)
                this.setState({
                    noteBooks: noteBooks,
                    pages: pages,
                    finalPrice: finalPrice
                    })
                   
            } else if(!isNaN(noteBooks) && !isNaN(pages) && noteBooks === '15000') {
                const step1 = ((noteBooks * pages * 1200) / 8000) 
                const step2 = (noteBooks * 2.70)
                const step3 = parseInt(step1) + parseInt(step2) + 3200
                const finalPrice = parseFloat(step3/noteBooks)
                console.log(finalPrice)
                this.setState({
                    noteBooks: noteBooks,
                    pages: pages,
                    finalPrice: finalPrice
                    })
                   
            } else if(!isNaN(noteBooks) && !isNaN(pages) && noteBooks === '20000') {
                const step1 = ((noteBooks * pages * 1200) / 8000) 
                const step2 = (noteBooks * 2.70)
                const step3 = parseInt(step1) + parseInt(step2) + 3600
                const finalPrice = (step3/noteBooks)
                console.log(finalPrice)
                this.setState({
                    noteBooks: noteBooks,
                    pages: pages,
                    finalPrice: finalPrice
                    })
                   
            }
             else {
                this.setState({
                error: "Please Enter Valid Values"
                })
            }
        }
    
  
render() {
    return (
        <div>
            <form onSubmit = {this.onSubmitForm} className = "inputs">
                <input type = "text"  name = "noteBooks" placeholder = "Enter Total No. of Notebooks"/><br />
                <input type = "text"  name = "pages" placeholder = "Enter Number of Pages" /><br />
               
                <button type="submit">Get Price</button>
            </form>
            <Output 
                noteBooks = {this.state.noteBooks}
                pages = {this.state.pages}
                finalPrice = {this.state.finalPrice}
                error = {this.state.error}
            />
        </div>
        )
    }
}
export default Input