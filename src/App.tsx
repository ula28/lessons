import './App.css';
import styled, {keyframes} from 'styled-components';
import React from 'react';


const Navigation = () => {
    return (
		<nav>
			<Menu aria-label='меню'>
            <MenuItem><MenuLink  href=""aria-label='hello'>Item 1</MenuLink></MenuItem>
            <MenuItem><MenuLink>Item 1</MenuLink></MenuItem>
            <MenuItem><MenuLink>Item 1</MenuLink></MenuItem>
          
        </Menu>
		</nav>
        
    );
};

function App() {
    return (
        <div className="App">
            <Header>
                <Navigation/>
                <LoginBtn role='link'>LOGIN</LoginBtn>
            </Header>
            <Block>
                <Title>Accessibility</Title>
                <Form>
                    <div>
                        <Label  htmlFor="1">Label for field 1</Label>
                        <Field tabIndex={1} id="1" placeholder="Field 1"/>
                    </div>

                    <div>
                        <Label tabIndex={2} htmlFor="2">Label for field 2</Label>
                        <Field id="2" placeholder="Field 2"/>
                    </div>

                    <div>
                        <Label tabIndex={3} htmlFor="3">Label for field 3</Label>
                        <Field id="3" placeholder="Field 3"/>
                    </div>
                </Form>
            </Block>
        </div>
    );
}

export default App;


const Bouncing = keyframes`
  50% {
    transform: translateY(20%);
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin: 60px 0;
  animation: ${Bouncing} 1s linear infinite alternate;
`

const Header = styled.header`
  height: 80px;
  background-color: #e91e63;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Menu = styled.ul`
  display: flex;
  gap: 15px;
`;

const MenuItem = styled.li`
  color: white;
  font-weight: bold;

`;

const MenuLink = styled.a`
  color: white;
  font-weight: bold;
`;

const LoginBtn = styled.button`
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border: 2px solid;
  border-radius: 5px;
`;

const Block = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px
`;

const Label = styled.label`
  font-size: 1rem;
  line-height: 2rem;
`;

const Field = styled.input`
  padding: 5px 15px;
  width: 100%;
  font-size: 1rem;
`;




