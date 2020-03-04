import React, { useState, useEffect } from 'react';

// class InputComponent extends Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             color: '#ffffff',
//             value: 'value'
//         }
//     }

//     handleChange(e) {
//         this.setState({
//             value: e.target.value
//         })
//     }

//     componentDidMount(){
//         if(this.props.id % 3 === 0 ){
//             const newColor = prompt('New background-color:', this.state.color)
//             this.setState({
//                 color: newColor
//             })
//         }
//     }

//     componentWillUnmount(){
//         alert(`The input with "${this.state.value}" text has been deleted`)
//     }

//     render(){
//         const {id, removeInput} = this.props;
//         return (
//             <li>
//                 <input style={{backgroundColor: this.state.color}} type="text" value={this.state.value} onChange={(e) => this.handleChange(e)}/>
//                 <button onClick={() => removeInput(id)}>remove input</button>  
//             </li>
//         )
//     }
// }


function InputComponent({id, removeInput}){
    const [value, setValue] = useState('Value');
    const [color, setColor] = useState('#ffffff')
    useEffect(() => {
        if(id % 3 === 0 ){
            setColor(prompt('New background-color:', color));
        }
    }, [color])

    useEffect(() => {
        return () => {
            alert(`The input with "${value}" text has been deleted`)
        }
    }, [id, value])

    const updateInput = event => setValue(event.target.value);
    console.log()
    return (
        <li>
            <p>{value}</p>
            <input style={{backgroundColor: color}} type="text" value={value} onChange={updateInput}/>
            <button onClick={() => removeInput(id)}>remove input</button>  
        </li>
    )
}

export default  InputComponent