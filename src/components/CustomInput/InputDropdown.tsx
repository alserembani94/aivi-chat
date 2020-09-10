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
type slotType = {
    [transferFrom: string]: string,
    name: string,
    phone: string,
    email: string,
    amount: string,
};

// Props Configuration
interface InputDropdownProps {
    slot: slotType;
    inputProps: slotInputType;
    index: number;
    handleInputChange: (value: string, stateName: string) => void;
    
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

const InputDropdown: React.FC<InputDropdownProps> = ({slot, inputProps, index, handleInputChange}) => {
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
        handleInputChange(value, inputProps.inputState);
        setDropdown(prevState => { return !prevState });
    };

    const handleInputFocus = (e: React.FocusEvent) => {
        // if (e.currentTarget.parentElement?.parentElement?.parentElement) e.currentTarget.parentElement.parentElement.parentElement.style.boxShadow = 'var(--selected-box-shadow)';
        // setDropdown(prevState => { return true });
    };

    const handleInputBlur = (e: any) => {
        // if (e.currentTarget.parentElement?.parentElement?.parentElement)  e.currentTarget.parentElement.parentElement.parentElement.style.boxShadow = 'var(--box-shadow)';
        setDropdown(prevState => { return false });
    };

    return (
        <div className="InputDropdown-Wrapper" ref={dropdownElement}>
            <div
                className="InputBox-Container InputDropdown-Container"
                key={index}
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
                            readOnly={true}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            value={slot[inputProps.inputState]}
                            onChange={({ currentTarget: {value} }) => handleInputChange(value, inputProps.inputName)}
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
                    <button
                        className="InputDropdown-Button Button"
                        onClick={toggleDropdown}
                    >
                        <IconContext.Provider value={{ className: 'Icon Icon-Dark Icon-Down' }} >
                            <IoIosArrowDown />
                        </IconContext.Provider>
                    </button>
                </div>
            </div>
            <div
                className="InputDropdown-List"
                data-show={isDropdown.toString()}
            >
                <ul>
                    {/* <li
                        onClick={handleChooseOption}
                    >
                        Hello
                    </li>
                    <li>Everyone</li> */}
                    {
                        inputProps.optionList && inputProps.optionList.map((optionItem, index) => (
                            <li
                                key={index}
                                onClick={() => handleChooseOption(optionItem.value)}
                            >
                                {optionItem.label}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default InputDropdown;

// eslint-disable-next-line no-lone-blocks
{/* <div
            className="InputBox-Container"
            key={index}
        >
            <p className="InputBox-Label">{inputProps.inputLabel}</p>
            <div className="InputBox-InputArea">
                {
                    inputProps.inputName === 'amount' && <p className="InputBox-Currency">RM</p>
                }
                <input
                    type={inputProps.inputType}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    value={slot[inputProps.inputState]}
                    onChange={({ currentTarget: {value} }) => handleInputChange(value, inputProps.inputName)}
                />
            </div>
        </div> */}