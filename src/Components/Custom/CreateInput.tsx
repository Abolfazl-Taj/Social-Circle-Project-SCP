import { useId } from "react";

const CreateInput = ({
    labelname,
    name,
    inputtype = "text",
    className,
    lableclassName,
    onblur,
    newref
}: {
    labelname: string;
    name: string;
    inputtype?: string;
    className?: string;
    lableclassName?: string;
    onblur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    newref?: any
}) => {
    const id = useId();

    return (
        <div className={`flex flex-col mx-2 my-2 ${className} `}>
            <label className={`text-md ${lableclassName} `} htmlFor={id}>{labelname}</label>
            {inputtype === "textarea" ? (
                <textarea
                    onBlur={onblur}
                    ref={newref}
                    className="outline-none border rounded px-3 focus:border-blue-500 my-1 py-2 border-gray-500"
                    name={name}
                    placeholder={labelname}
                ></textarea>
            ) : (
                <input
                    onBlur={onblur}
                    className="outline-none border-b focus:border-blue-500 my-1 px-3 py-1 border-gray-500"
                    id={id}
                    ref={newref}
                    type={inputtype}
                    placeholder={labelname}
                    name={name}
                />
            )}
        </div>
    );
};

export default CreateInput;
