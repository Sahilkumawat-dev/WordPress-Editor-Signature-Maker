const editor = document.getElementById('editor');
const lineNumDisplay = document.getElementById('lineNum');
const charNumDisplay = document.getElementById('charNum');
const paraNumDisplay = document.getElementById('paraNum'); 

function updateStatusBar() {
    const lines = editor.innerText.split('\n').length;
    const chars = editor.innerText.length;
    
    const paragraphs = editor.querySelectorAll('p').length;

    lineNumDisplay.textContent = `Line: ${lines}`;
    charNumDisplay.textContent = `Chars: ${chars}`;
    paraNumDisplay.textContent = `Paragraphs: ${paragraphs}`;  
}
// notesSociety
editor.addEventListener('input', updateStatusBar);

function formatText(command) {
    document.execCommand(command, false, null);
}

function changeFont(font) {
    document.execCommand("fontName", false, font);
}

/* signature */
const signatureCanvas = document.getElementById('signatureCanvas');
const ctx = signatureCanvas.getContext('2d');
let isDrawing = false;
// notesSociety

signatureCanvas.width = 250;
signatureCanvas.height = 120;

signatureCanvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

signatureCanvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});
// notesSociety

signatureCanvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

function clearSignature() {
    ctx.clearRect(0, 0, signatureCanvas.width, signatureCanvas.height);
}

function downloadSignature() {
    const dataUrl = signatureCanvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'signature.png';
    a.click();
}
//content save
function saveText() {
    const text = editor.innerText; 
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'editor-content.txt';
    a.click(); 

    URL.revokeObjectURL(url);
}
// notesSociety

