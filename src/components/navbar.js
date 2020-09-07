import React from "react"
import { Nav,Navbar,FormControl,NavDropdown,Form} from "react-bootstrap"
const NavBar=()=>{

    return(<>
    <Navbar  expand="lg" style={{position:"sticky",borderBottom:"1px lightgrey solid"}}>
    <div className="container">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
    <Form inline className="mr-auto">
        <i className="fa fa-search"></i>
        <FormControl type="text" placeholder="Search artists songs ..." className="mr-sm-2 form-control-borderless" />
        
      </Form>

      <Nav className="" >
        <Nav.Link href="#home"><i className="fa fa-bell"></i></Nav.Link>
        <a href="#link">
        <div class="c-avatar">
        <img class="c-avatar-img" src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-21.jpg" alt="admin@bootstrapmaster.com" />
        </div>
        </a>
      </Nav>
      
    </Navbar.Collapse>
    </div>
  </Navbar>
  </>)
}

export default  NavBar