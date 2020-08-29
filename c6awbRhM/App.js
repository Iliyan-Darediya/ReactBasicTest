import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            gender:"",
            favCity:'',
            Mughalai:false,
            Chinese:false,
            Italian:false,
            Mexican:false
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
   handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    handleSubmit(event) {
        event.preventDefault()
        console.log('final state is'+ this.state)
  }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>First Name</h1>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange}
                />
                <br />
                <h1>Last Name</h1>
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name"  
                    onChange={this.handleChange}
                />
                <br />
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="Male"
                        checked={this.state.gender === "Male"}
                        onChange={this.handleChange}
                    /> Male
                </label>
                <br />
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="Female"
                        checked={this.state.gender === "Female"}
                        onChange={this.handleChange}
                    /> Female
                </label>
                <br />
                <label>
                    <h1>Your favourite Cuisine</h1>
                    <br />
                    <input 
                        type="checkbox" 
                        name="Mughlai"
                        checked={this.state.Mughlai}
                        onChange={this.handleChange}
                    /> Mughlai
                    <br />
                    <input 
                        type="checkbox" 
                        name="Chinese"
                        checked={this.state.Chinese}
                        onChange={this.handleChange}
                    /> Chinese
                    <br />
                    <input 
                        type="checkbox" 
                        name="Italian"
                        checked={this.state.Italian}
                        onChange={this.handleChange}
                    /> Italian
                    <br />
                    <input 
                        type="checkbox" 
                        name="Mexican"
                        checked={this.state.Mexican}
                        onChange={this.handleChange}
                    /> Mexican
                    <br />
                </label>
                <label>Favorite City:</label>
                <select 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favCity"
                >
                    <option value="Venice">Venice</option>
                    <option value="Istanbul">Istanbul</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Paris">Paris</option>
                    <option value="Amsterdam">Amsterdam</option>
                </select>
                
                <button>Submit</button>
                
                <h1>Hello {this.state.gender==='Male'?'Mr.':this.state.gender==='Female'?'Miss/Mrs.':null} {this.state.firstName} {this.state.lastName} Your favourite City is {this.state.favCity}! and your favourite cusine includes: {this.state.Chinese?'Chinese':null} {this.state.Italian?'Italian':null} {this.state.Mughlai?'Mughlai':null} {this.state.Mexican?'Mexican':null}</h1>
                
            </form>
        )
    }
}

export default App