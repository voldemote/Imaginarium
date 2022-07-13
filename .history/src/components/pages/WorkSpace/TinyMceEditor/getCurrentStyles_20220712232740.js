import tinymce from "tinymce";

function getCurrentStyle(state, setState) {
    console.log("getAlignStyles")
    const isAlignLeft = tinymce.activeEditor.queryCommandState('JustifyLeft');
    const isAlignCenter = tinymce.activeEditor.queryCommandState('JustifyCenter');
    const isAlignRight = tinymce.activeEditor.queryCommandState('JustifyRight');
    const isAlignFull = tinymce.activeEditor.queryCommandState('JustifyFull');

    let alignVal;

    if (isAlignLeft || (!isAlignLeft && !isAlignCenter && !isAlignRight && !isAlignFull)) {
        alignVal = 1;
    }
    else if (isAlignCenter) {
        alignVal = 2;
    }
    else if (isAlignRight) {
        alignVal = 3;
    }
    else if (isAlignFull) {
        alignVal = 4;
    }

    let lineHeight = tinymce.activeEditor.queryCommandValue("LineHeight");
    lineHeight = parseFloat(lineHeight, 10);
    lineHeight = isNaN(lineHeight) ? 25 : lineHeight;

    let spacing = 0;
    let selectedContent = tinymce.activeEditor.selection.getContent();
    if (selectedContent.is("span") && selectedContent.css('letter-spacing')) {
        console.log("spacing: ", selectedContent.css('letter-spacing'));
    }

    setState({ ...state, align: alignVal, lineH: lineHeight });

}

export default getCurrentStyle;