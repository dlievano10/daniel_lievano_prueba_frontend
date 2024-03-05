import { useState } from "react";

// slyle
import './style.scss';

const Forms = () => {

    const [valueDescripction, setValueDescription] = useState('Name: <br /> Email:');
    const [viewSection, setViewSection] = useState(true);
    const [valueEmail, setValueEmail] = useState('');
    const [valueName, setValueName] = useState('');

    const opciones = [
        {option:"Option 1", checkedRadio: true, checkedCheckbox: true},
        {option:"Option 2", checkedRadio: false, checkedCheckbox: false},
        {option:"Option 3", checkedRadio: false, checkedCheckbox: true},
        {option:"Option 4", checkedRadio: false, checkedCheckbox: false}
    ];

    const handleSaveData = () => {
        setValueDescription(`Name: ${valueName} <br /> Email: ${valueEmail}`);
        setValueEmail(''); 
        setValueName('')
    };

    return (
        <>  
            <div className='select-form'>
                <div className="select" onClick={() => setViewSection(!viewSection)}>
                    <h3>Select</h3>
                    <div className="spacer-select"></div>
                    <span className="material-icons md-40">
                        arrow_drop_down
                    </span>
                </div>
                {
                    viewSection &&
                    <div className="checkbox-container">
                        {opciones.map((opcion, i) => (
                            <div key={i} className="checkbox-item">
                                <input
                                    type="checkbox"
                                    // checked={opcion.checkedCheckbox}
                                />
                                <label htmlFor={opcion.option} className='label-checkbox'>{opcion.option}</label>
                            </div>
                        ))}
                    </div>
                }
            </div>

            <div className='radio-form'>
                <div className='radio'>
                    {opciones.map((opcion, i) => (
                        <div key={i} className="radio-item">
                            <input
                                // checked={opcion?.checkedRadio}
                                type="radio"
                                id={opcion?.option}
                            />
                            <label htmlFor={opcion?.option} className='label-radio'>{opcion?.option}</label>
                        </div>
                    ))}
                </div>
            </div>

            <div className='input-form'>
                <div className='input-group'>
                    <label className="label-input">Name:</label>
                    <input className="input" value={valueName} onChange={(e) => setValueName(e.target.value)} />
                </div>
                <div className='input-group'>
                    <label className="label-input">Email:</label>
                    <input className="input" value={valueEmail} onChange={(e) => setValueEmail(e.target.value)} />
                </div>

                <div className='container-results'>
                    <p dangerouslySetInnerHTML={{__html:valueDescripction}}></p>
                </div>

                <button className='button-submit-form' onClick={() => handleSaveData()}>
                    Submit
                </button>
            </div>
        </>
    )
}

export default Forms