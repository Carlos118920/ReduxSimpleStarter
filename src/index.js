import React from "react"
import ReactDOM from "react-dom"
import SearchBar from "./components/search_bar"

const API_KEY = "AIzaSyCEQrlQjJYOqrc4ID5EB4FBZR3A7v-E1EY";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
