import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function App() {
  return (
    <div className="App" style={styles.textField}>
      <Button variant="contained" color="primary">
        <h1>Let's start the show Babes !</h1>
      </Button>
      <p></p>
      <TextField id="filled-basic" label="Write a to-do" variant="filled" style={{maxWidth: "300px" , width : "90vw"}}/>
    </div>
  );
}

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  textField: {
    display: "flex",
    flexDirection : "column",
    justifyContent: "center",
    alignItems: "center",
  },
  nav: {
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    right: 0,
    top: -9
  }
};

export default App;
