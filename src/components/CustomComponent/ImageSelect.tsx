import React, { FC } from 'react';

type optionType = {
    name: string,
    label: string,
    image: string,
};

interface ImageSelectType {
    name: string;
    label: string;
    image: string;
    updateSelected: (value: string, isActive: boolean) => void;
    active: boolean;
}

interface MultiImageSelectType {
    optionList: optionType[];
    selectedOptions: string[];
    updateSelected: (selectedList: string[]) => void;
    maxOption?: number;
}

const ImageSelect: FC<ImageSelectType> = ({name, label, image, updateSelected, active}) => {
    const handleUpdate = (value: string) => {
        updateSelected(value, active);
    }

    return (
        <React.Fragment>
            <div
                className="ImageSelect-Wrapper"
                onClick={() => handleUpdate(name)}
                data-active={active}
            >
                <div className="ImageSelect-ImageContainer">
                    <img src={image} alt={label} />
                </div>
                <p className="ImageSelect-Label">{label}</p>
            </div>
        </React.Fragment>
    );
};

const MultiImageSelect: FC<MultiImageSelectType> = ({optionList, selectedOptions, updateSelected, maxOption = Infinity}) => {
    const handleArrayUpdate = (value: string, isActive: boolean) => {
        // Deselect Option
        if (isActive) {
            const removedOptions = selectedOptions.filter(selected => selected !== value);
            updateSelected(removedOptions);
        }
        // Select Option
        else {
            if (selectedOptions.length < maxOption) updateSelected([...selectedOptions, value]);
        }
    }

    return (
        <React.Fragment>
            <div className="ImageSelect-Multiple">
                {
                    optionList.map((optionItem, index) => (
                        <ImageSelect
                            name={optionItem.name}
                            label={optionItem.label}
                            image={optionItem.image}
                            active={selectedOptions.some(selected => selected === optionItem.name)}
                            updateSelected={handleArrayUpdate}
                            key={index}
                        />
                    ))
                }
            </div>
        </React.Fragment>
    );
};

export {
    MultiImageSelect,
    ImageSelect,
};