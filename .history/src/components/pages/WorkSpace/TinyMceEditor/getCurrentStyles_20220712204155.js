import tinymce from "tinymce";
const getCurrentStyle = (state, setState) => {
    getAlignStyles(state, setState);
    getLineHeight(state, setState);
}

const getAlignStyles = (state, setState) => {
    const isAlignLeft = tinymce.activeEditor.queryCommandState('JustifyLeft');
    const isAlignCenter = tinymce.activeEditor.queryCommandState('JustifyCenter');
    const isAlignRight = tinymce.activeEditor.queryCommandState('JustifyRight');
    const isAlignFull = tinymce.activeEditor.queryCommandState('JustifyFull');
    if (isAlignLeft || (!isAlignLeft && !isAlignCenter && !isAlignRight && !isAlignFull)) {
        setState({ ...state, align: 1 });
    }
    else if (isAlignCenter) {
        setState({ ...state, align: 2 })
    }
    else if (isAlignRight) {
        setState({ ...state, align: 3 })
    }
    else if (isAlignFull) {
        setState({ ...state, align: 4 })
    }
}

const getLineHeight = (state, setState) => {
    const lineHeight = tinymce.activeEditor.queryCommandValue("LineHeight");
    console.log("lineHeight:", lineHeight);
    setState({ ...state, lineH: lineHeight });
}

export default getCurrentStyle;