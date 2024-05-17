import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import JournalForm from "../components/JournalForm/JournalForm.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/JournalForm">
                <JournalForm/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews