import React from 'react';
import {
    IoIosArrowDown,
    IoIosClose,
} from 'react-icons/io';
import { IconContext } from 'react-icons/lib';

type InputOptionType = {
    name: string;
    label: string;
    value: string;
};

// Input Configuration Formatting
type slotInputType = {
    inputName: string,
    inputState: string,
    inputType: string,
    inputLabel: string,
    optionList?: InputOptionType[],
};

// All slot data

// Props Configuration
interface InputDropdownProps {
    slot: any;
    inputProps: slotInputType;
    handleInputChange: (value: string, stateName: string) => void;
    allowInput: boolean;
    
}

/**
 * Hook that alerts clicks outside of the passed ref
 */
// function useOutsideAlerter(ref: React.MutableRefObject<null | HTMLElement>) {
//     React.useEffect(() => {
//         /**
//          * Alert if clicked on outside of element
//          */
//         function handleClickOutside(event: { target: any; }) {
//             if (ref.current && !ref.current.contains(event.target)) {
//                 alert("You clicked outside of me!");
//             }
//         }

//         // Bind the event listener
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             // Unbind the event listener on clean up
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [ref]);
// }

const InputDropdown: React.FC<InputDropdownProps> = ({slot, inputProps, handleInputChange, allowInput = false}) => {
    const [isDropdown, setDropdown] = React.useState(false);

    const dropdownElement = React.useRef<null | HTMLDivElement>(null);

    React.useEffect(() => {
        function handleClickOutside(event: { target: any; }) {
            if (dropdownElement.current && !dropdownElement.current.contains(event.target)) {
                if (isDropdown) {
                    setDropdown(prevState => { return false });
                }
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownElement, isDropdown]);

    const toggleDropdown = () => {
        setDropdown(prevState => { return !prevState });
    };

    const handleChooseOption = (value: string) => {
        console.log('Go here?');
        handleInputChange(value, inputProps.inputState);
        setDropdown(prevState => { return !prevState });
    };

    const handleInputFocus = (e: React.FocusEvent) => {
        // if (e.currentTarget.parentElement?.parentElement?.parentElement) e.currentTarget.parentElement.parentElement.parentElement.style.boxShadow = 'var(--selected-box-shadow)';
        // setDropdown(prevState => { return true });
    };

    // const handleInputBlur = (e: any) => {
    //     // if (e.currentTarget.parentElement?.parentElement?.parentElement)  e.currentTarget.parentElement.parentElement.parentElement.style.boxShadow = 'var(--box-shadow)';
    //     setDropdown(prevState => { return false });
    // };

    return (
        <div className="InputDropdown-Wrapper" ref={dropdownElement}>
            <div
                className="InputBox-Container InputDropdown-Container"
            >
                <div
                    className="InputDropdown-Thumb"
                    onClick={toggleDropdown}
                >
                    <p className="InputBox-Label">{inputProps.inputLabel}</p>
                    <div className="InputBox-InputArea">
                        {
                            inputProps.inputName === 'amount' && <p className="InputBox-Currency">RM</p>
                        }
                        <input
                            type={inputProps.inputType}
                            readOnly={!allowInput}
                            onFocus={handleInputFocus}
                            value={slot[inputProps.inputState]}
                            onChange={({ currentTarget: {value} }) => handleInputChange(value, inputProps.inputName)}
                            placeholder={allowInput ? 'Select from dropdown, or type your own': 'Select from dropdown'}
                        />
                    </div>
                </div>
                <div className="InputDropdown-Action">
                    <button
                        className="InputDropdown-Button Button"
                        onClick={()=> console.log()}
                    >
                        <IconContext.Provider value={{ className: 'Icon Icon-Dark Icon-Close' }} >
                            <IoIosClose />
                        </IconContext.Provider>
                    </button>
                    <div
                        className="InputDropdown-Button Button"
                        onClick={toggleDropdown}
                    >
                        <IconContext.Provider value={{ className: 'Icon Icon-Dark Icon-Down' }} >
                            <IoIosArrowDown />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
            <div
                className="InputDropdown-List"
                data-show={isDropdown}
            >
                <ul>
                    {
                        inputProps.optionList && inputProps.optionList.length !== 0
                        ? inputProps.optionList.map((optionItem, index) => (
                            <li
                                key={index}
                                onClick={() => handleChooseOption(optionItem.value)}
                            >
                                {optionItem.label}
                            </li>
                        ))
                        : (
                            <li
                                className="InputDropdown-NoData"
                            >
                                No item to display
                            </li>
                        )
                        
                    }
                </ul>
            </div>
        </div>
    );
};

export default InputDropdown;