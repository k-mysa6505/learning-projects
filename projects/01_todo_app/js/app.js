//  DOM要素
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

//  タスク配列
let tasks = [];

//  ページ読み込み時にローカルストレージからタスクを読み込む
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    renderTasks();
});

//  フォーム送信イベント
taskForm.addEventListener('submit', (e) => {
    e.preventDefault(); //  デフォルトのフォーム送信を防止

    const taskTitle = taskInput.value.trim();
    if (taskTitle) {
        addTask(taskTitle);
        taskInput.value = '';
    }
});

//  新しいタスクの追加関数
function addTask(title) {
    const newTask = {
        id: Date.now().toString(),
        title: title,
        completed: false,
        createAt: new Date().toISOString(),
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();
}

//  タスクの完了状態を切り替える関数
function toggleTaskStatus(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed};
        }
        return task;
    });

    saveTasks();
    renderTasks();
}

// タスクを編集モードに切り替える関数
function editTask(id) {
    const taskElement = document.querySelector(`.task-item[data-id="${id}"]`);
    if (!taskElement) return;

    const taskTextElement = taskElement.querySelector('.task-text');
    const currentText = taskTextElement.textContent;

    // 現在のテキスト要素を入力フィールドに置き換える
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.className = 'edit-input';
    inputElement.value = currentText;

    // テキスト要素を非表示にし、入力フィールドを追加
    taskTextElement.style.display = 'none';
    taskElement.insertBefore(inputElement, taskTextElement.nextSibling);

    // 編集ボタンを保存ボタンに変更
    const editButton = taskElement.querySelector('.edit-btn');
    editButton.textContent = '保存';
    editButton.classList.add('save-btn');

    // 入力フィールドにフォーカスを当てる
    inputElement.focus();

    // 保存ボタンのイベントリスナーを変更
    editButton.removeEventListener('click', editButtonClickHandler);
    editButton.addEventListener('click', () => saveTask(id));

    // 入力フィールドでEnterキー押下時も保存処理を実行
    inputElement.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            saveTask(id);
        }
    });
}

// 編集したタスクを保存する関数
function saveTask(id) {
    const taskElement = document.querySelector(`.task-item[data-id="${id}"]`);
    if (!taskElement) return;

    const inputElement = taskElement.querySelector('.edit-input');
    // 入力要素が見つからない場合は早期リターン
    if (!inputElement) return;

    const taskTextElement = taskElement.querySelector('.task-text');
    const newTitle = inputElement.value.trim();

    if (newTitle) {
        // タスク配列内のタイトルを更新
        tasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, title: newTitle };
            }
            return task;
        });

        // テキスト要素を更新して表示
        taskTextElement.textContent = newTitle;
        taskTextElement.style.display = '';

        // 入力フィールドを削除
        inputElement.remove();

        // 保存ボタンを編集ボタンに戻す
        const saveButton = taskElement.querySelector('.save-btn');
        saveButton.textContent = '編集';
        saveButton.classList.remove('save-btn');

        // 編集ボタンのイベントリスナーを元に戻す
        saveButton.removeEventListener('click', () => saveTask(id));
        saveButton.addEventListener('click', editButtonClickHandler);

        // ローカルストレージに保存
        saveTasks();
    }
}

// タスクをローカルストレージに保存する関数
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// 編集ボタンのクリックハンドラをグローバル変数として保存
function editButtonClickHandler() {
    const taskId = this.parentElement.dataset.id;
    editTask(taskId);
}

// タスクを削除する関数
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}


//  ローカルストレージからタスクを読み込む関数
function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    tasks = storedTasks ? JSON.parse(storedTasks) : [];
}

//  タスクリストをUIに表示する関数
function renderTasks() {
    taskList.innerHTML = ''; // リストをクリア

    if (tasks.length === 0) {
        taskList.innerHTML = '<p class="empty-message">タスクがありません。<br>新しいタスクを追加しましょう！</p>';
        return;
    }

    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.dataset.id = task.id;

        if (task.completed) {
            taskItem.classList.add('completed');
        }

        taskItem.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
            <span class="task-text">${task.title}</span>
            <button class="edit-btn">編集</button>
            <button class="delete-btn">削除</button>
        `;

        // チェックボックスのイベントリスナー
        const checkbox = taskItem.querySelector('.task-checkbox');
        checkbox.addEventListener('change', () => {
            toggleTaskStatus(task.id);
        });

        // 編集ボタンのイベントリスナー
        const editButton = taskItem.querySelector('.edit-btn');
        editButton.addEventListener('click', editButtonClickHandler);

        // 削除ボタンのイベントリスナー
        const deleteButton = taskItem.querySelector('.delete-btn');
        deleteButton.addEventListener('click', () => {
            deleteTask(task.id);
        });

        taskList.appendChild(taskItem);
    });
}