export function createBox(item, times) {
    const box = document.createElement('div');
    const text_span = document.createElement('span');
    const btn_close = document.createElement('button');
    const span_hour = document.createElement('span');

    const btn_edit = document.createElement('button'); 
    const editDialog = document.createElement('dialog'); 
    const editInput = document.createElement('input');
    const btnSave = document.createElement('button');
    const btnCancel = document.createElement('button');

    box.classList.add('box');
    text_span.classList.add('text_span');
    btn_close.classList.add('close');
    span_hour.classList.add('hour');

    btn_edit.classList.add('edit'); 
    editDialog.classList.add('edit-dialog'); 
    editInput.classList.add('edit-input');
    btnSave.classList.add('btn-save');
    btnCancel.classList.add('btn-cancel');

    text_span.innerHTML = item;
    span_hour.innerHTML = times;
    btn_close.innerHTML = 'X';
    
    btn_edit.innerHTML = 'Edit';
    btnSave.innerHTML = 'Save';
    btnCancel.innerHTML = 'Close';

    box.append(text_span, btn_close, span_hour, btn_edit, editDialog);
    editDialog.append(editInput, btnSave, btnCancel);

    btn_close.onclick = () => {
        box.remove();
    };

    btn_edit.onclick = () => {
        editInput.value = text_span.innerHTML;
        editDialog.show();
    };

    btnSave.onclick = () => {
        text_span.innerHTML = editInput.value;
        editDialog.close();
    };

    btnCancel.onclick = () => {
        editDialog.close();
    };

    return box;
}

export function getTimes() {
    const now = new Date();
    return now.toLocaleTimeString();
}