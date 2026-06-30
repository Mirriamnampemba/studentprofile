function editProfile() {
    const newName = prompt("Enter new name:");
    if (newName) {
        document.getElementById('studentName').textContent = newName;
    }
}