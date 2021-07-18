// import logo from './logo.svg';
// import './App.css';
// import './App.scss';

import '../node_modules/bootstrap/scss/bootstrap.scss';
// import './sass/light/style.scss';
// import '../node_modules/bootstrap/scss/bootstrap.scss';
import Container from './components/Container';
import Row from './components/Row';
import Col from './components/Col';
import ListItem from './components/ListItem';
import Link from './components/Link';
import ProgressBar from './components/Progressbar';
import Input from './components/Input';
import Textarea from './components/Textarea';
import List from './components/List';



// import Hero from './sections/Hero';
// import About from './sections/About';
// import Expert from './sections/Expert';
// import Services from './sections/Services';



function App() {

    // const funcss = () => {
    //     console.log("click");
    //   }
    
    return (
        <div className="App">
            {/* <Hero/>
            <About/>
            <Expert/>
            <Services/> */}

            
            
            {/* <div className="container">Tsting </div>
            <h1>Just another portfolio</h1> */}
            {/* 
                    
                    <Link className="sfsdf" to="#" handleClick={funcss}>ddfdf</Link>
                    
                        <SectionHeading classname="section-heading" subtitle="sdff" title="sfsf.jklk"  />

                       

                        <Post />
                        
                        
                        <SocialLinks />
                        
                        <ContactFeatures title="sdfef" text="podmnjj"/>
                        <FilterActions/>
                        <FilterContent/>
                        
                        
                 */}

            <Container>
                <Row>
                    <Col col="6" xl="10" xxl="6">dfgdg</Col>
                    <Col col="6" xl="10" xxl="6">dfgdg</Col>
                </Row>
            </Container>

            <ListItem className="nav-item">
                        <Link className="sfsdf" to="../dfdf">ddfdf</Link>
                    </ListItem>

            <ProgressBar valuenow="70" valuemin="0" valuemax="100" />

            <Input name="sfsdf" id="55" type="text" placeholder="I am" className="lksjflksjf"/>
                        <Textarea text="9dfjjf"  name="sfsdf" id="55" type="text" placeholder="I am" className="lksjflksjf"/>

            <List element="ol">
                <ListItem className="lsdjflsdjlfk">sfsdfff</ListItem>
                <ListItem className="lsdjflsdjlfk">sfsdfff</ListItem>
                <ListItem className="lsdjflsdjlfk">sfsdfff</ListItem>
                <ListItem className="lsdjflsdjlfk">sfsdfff</ListItem>
            </List>
        </div>
    );
}

export default App;
