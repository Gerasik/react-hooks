import React, { useState, useEffect, useRef } from 'react';

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
    const [color, setColor] = useState('#ffffff');
    const el = useRef(null)
    useEffect(() => {
        if(id % 3 === 0 ){
            setColor(prompt('New background-color:', color));
        }
        el.current.focus();
        return () => {
            alert(`The input with "${value}" text has been deleted`)
        }
    }, [color, id, value])

    // useEffect(() => {
    //     return () => {
    //         alert(`The input with "${value}" text has been deleted`)
    //     }
    // }, [value])

    // const updateInput = event => setValue(event.target.value);

    // function updateInput(event){
    //     setValue(event.target.value)
    // }

    console.log()
    return (
        <li>
            <p>{value}</p>
            <input ref={el} style={{backgroundColor: color}} type="text" value={value} onChange={event => setValue(event.target.value)}/>
            <button onClick={() => removeInput(id)}>remove input</button>  
        </li>
    )
}

export default  InputComponent