import React from 'react';
import ReactDOM from 'react-dom';
import './content.css';
function Content(){
    return(
       <div class="content">
        <table>
            <tr>
                <th>Name</th>
                <th>Reg.no</th>
                <th>Dept</th>
                <th>College</th>
            </tr>
            <tr>
                <td>Praveen</td>
                <td>102</td>
                <td>IT</td>
                <td>Hicet</td>
            </tr>
            <tr>
                <td>bharath</td>
                <td>63</td>
                <td>IT</td>
                <td>Hicet</td>
            </tr>
            <tr>
                <td>Muthu</td>
                <td>95</td>
                <td>IT</td>
                <td>Hicet</td>
            </tr>
            <tr>
                <td>Deva</td>
                <td>64</td>
                <td>IT</td>
                <td>Hicet</td>
            </tr>
        </table>
        <form>
         <label for="username">Username:</label>
         <input type="text" id="username" name="username" required></input>
        
         <label for="password">Password:</label>
         <input type="password" id="password" name="password" required></input> 
         <div class="button-container">
            <button type="submit">Login</button>
            <button type="button" class="cancel-button">Cancel</button>
        </div>
        </form>
    </div>
    )
  }
  ReactDOM.render(<Content/>,document.getElementById("root"));
  export default Content;