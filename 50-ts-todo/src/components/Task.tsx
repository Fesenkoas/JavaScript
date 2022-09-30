import React, { useRef, useState } from "react";

interface Props {
    pos: number,
    task: string,
    edit: (pos: number, content: string) => void,
    remove: (pos: number) => void,
}

const Task = (props: Props) => {
    const [isEdit, setIsEdit] = useState(false);
    const idTextArea = useRef<HTMLTextAreaElement>(null);

    const handleEdit = () => {
        setIsEdit(true)
    }

    const handleRemove = () => {
        props.remove(props.pos);
    }

    const handleSave = () => {
        props.edit(props.pos, idTextArea.current!.value);
        setIsEdit(false);
    }

    const renderEditTask = () => {
        return (
            <div className="box">
                <textarea ref={idTextArea}>{props.task}</textarea>
                <button onClick={handleSave} className="btn success">Save</button>
            </div>
        )
    }

    const renderViewTask = () => {
        return (
            <div className="box">
                <div>{props.task}</div>
                <button onClick={handleEdit} className="btn light">Edit</button>
                <button onClick={handleRemove} className="btn red">Remove</button>
            </div>
        )
    }

    return isEdit ? renderEditTask() : renderViewTask();

}

export default Task;