(() => {
    const form = document.getElementById('taskForm');
    const list = document.getElementById('taskList');
    const input = document.getElementById('taskInput');

    const normalizeText = (value) => value.trim();

    const createTaskItem = (text) => {
        const li = document.createElement('li');
        li.className = 'todo__item';

        const left = document.createElement('div');
        left.className = 'todo__left';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('aria-label', 'mark as done');

        const span = document.createElement('span');
        span.className = 'todo__text';
        span.textContent = text;

        const deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.className = 'todo__delete';
        deleteBtn.setAttribute('aria-label', 'delete task');
        deleteBtn.textContent = '🗑';

        checkbox.addEventListener('change', () => {
        li.classList.toggle('todo__item--done', checkbox.checked);
        });

        deleteBtn.addEventListener('click', () => {
        li.remove();
        });

        left.appendChild(checkbox);
        left.appendChild(span);

        li.appendChild(left);
        li.appendChild(deleteBtn);

        return li;
    };

    const addTask = () => {
        const value = normalizeText(input.value);
        if (!value) return;

        list.appendChild(createTaskItem(value));
        input.value = '';
        input.focus();
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addTask();
    });
})();
