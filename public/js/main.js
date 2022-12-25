let todoId = null;
        let isClick = false;
        async function edit(id) {
            const response = await fetch(`${id}`);
            const data = await response.json();
            document.getElementById('task').value = data.task;
            document.getElementById('save').innerHTML = "Ubah";
            isClick = true;
            todoId = data.id;
        }
        async function addOrEdit() {
            const data = document.getElementById('task').value;
            if (isClick) {
                try {
                    const response = await fetch(`/edit/${todoId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            task: data
                        })
                    });
                    return window.location.reload();
                    isClick = false;
                } catch (error) {
                    console.log(error)
                }

            }
            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    task: data
                })
            })
            return window.location.reload();
        }
        async function destroy(id) {
            try {
                const response = await fetch(`/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        }

        async function isStatus(id, status) {
            try {
                const response = await fetch(`/task/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify({
                        status : status
                    })
                });
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        }