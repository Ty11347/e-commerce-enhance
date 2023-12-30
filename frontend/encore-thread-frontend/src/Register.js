import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [roles, setRoles] = useState("");
    const [age, setAge] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");

    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("/api/user/save", {
            username: username,
            email: email,
            age: age,
            address: address,
            contact: contact,
            roles: roles,
            password: password,
          });
          alert("User Registation Successfully");

        } catch (err) {
          alert(err);
        }
      }
  
    return (
    <div>
    <div class="container mt-4" >
    <div class="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <h1>User Registration</h1>
    <form>
        <div class="form-group">
          <label>Username</label>
          <input type="text"  class="form-control" id="username" placeholder="Enter Name"
          
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          />

        </div>

        <div class="form-group">
          <label>Email</label>
          <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
 
        </div>

        <div class="form-group">
            <label>Age</label>
            <input type="age"  class="form-control" id="age" placeholder="Enter Age"
            
            value={age}
            onChange={(event) => {
              setAge(event.target.value);
            }}
            
            />
        </div>

        <div class="form-group">
          <label>Address</label>
          <input type="address"  class="form-control" id="address" placeholder="Enter Address"
          
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}/>
        </div>

        <div class="form-group">
          <label>Contact</label>
          <input type="contact"  class="form-control" id="contact" placeholder="Enter Contact"
          
          value={contact}
          onChange={(event) => {
            setContact(event.target.value);
          }}
          />
        </div>

        <div class="form-group">
            <label>Roles</label>
            <select type="roles"  
            class="form-control" 
            id="roles"
            value={roles}
            onChange={(event) => {
              setRoles(event.target.value);
            }}>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
            </select>
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter Password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
        </div>

        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
       
      </form>
      <Link to="/login">Already have an account? Login here</Link>
    </div>
    </div>
     </div>
    );
  }
  
  export default Register;