const billAmtInput = document.querySelector('#bill-amt');
const cashInput = document.querySelector('#cash');
const btn = document.querySelector('#btn-check');
const error = document.querySelector('#error-msg');
const notes = document.querySelectorAll('.no-of-notes');

const noteObj = {
    '2000': '',
    '500': '',
    '100': '',
    '20': '',
    '10': '',
    '5': '',
    '1': '',
}

btn.addEventListener('click',()=>{
    if(billAmtInput.value && cashInput.value){
        if(Number(billAmtInput.value)> Number(cashInput.value)){
            error.innerText = 'Do you wanna wash plates?'
        }
        else{
            let actualNotes = []
            let returnAmt = Number(cashInput.value)-Number(billAmtInput.value);
            let notesInDesc = Object.keys(noteObj).map(item=>Number(item));
            notesInDesc = notesInDesc.sort(function(a,b){return b-a;});
            let count = 0;
            notesInDesc.forEach(item=>{
                count = Math.floor(returnAmt/item);
                returnAmt = returnAmt%item;
                actualNotes.push(count);
            })
            actualNotes = actualNotes.reverse();
            notes.forEach((item, index)=>{
                item.innerText = actualNotes[index];
            })
        }
    }
    else{
        error.innerText = 'Enter valid values'
    }
})