export function mainView(mainPage, settingsPage, subjectsPage) {
    const startBtn = document.getElementById("start-btn");
    const settingsBtn = document.getElementById("settings-btn");
    const quitBtn = document.getElementById("quit-btn");
    // Show question page
    startBtn.addEventListener("click", () => {
        mainPage.classList.add("hidden");
        subjectsPage.classList.remove("hidden");
    });
    // Show settings page
    settingsBtn.addEventListener("click", () => {
        mainPage.classList.add("hidden");
        settingsPage.classList.remove("hidden");
    });
    // Handle quitting (e.g., reset app state or show an exit message)
    quitBtn.addEventListener("click", () => {
        // Handle quitting
        window.location.reload(); // Just as an example
    });
    // Function to display a question dynamically (for demo purposes)
    function displayQuestion() {
        const questionContainer = document.getElementById("question-container");
        if (questionContainer) {
            questionContainer.innerHTML = `
            <p>What is the capital of France?</p>
            <ul>
                <li>A. Berlin</li>
                <li>B. Madrid</li>
                <li>C. Paris</li>
                <li>D. Rome</li>
            </ul>
        `;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpblZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmlld3MvbWFpblZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxVQUFVLFFBQVEsQ0FBQyxRQUFxQixFQUFFLFlBQXlCLEVBQUUsWUFBeUI7SUFDaEcsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQXNCLENBQUM7SUFDM0UsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQXNCLENBQUM7SUFDakYsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXNCLENBQUM7SUFFekUscUJBQXFCO0lBQ3JCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ3BDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0lBRUgscUJBQXFCO0lBQ3JCLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ3ZDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0lBRUgsa0VBQWtFO0lBQ2xFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ25DLGtCQUFrQjtRQUNsQixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMscUJBQXFCO0lBQ25ELENBQUMsQ0FBQyxDQUFDO0lBR0gsaUVBQWlFO0lBQ2pFLFNBQVMsZUFBZTtRQUNwQixNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN4RSxJQUFJLGlCQUFpQixFQUFFLENBQUM7WUFDcEIsaUJBQWlCLENBQUMsU0FBUyxHQUFHOzs7Ozs7OztTQVFqQyxDQUFDO1FBQ0YsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIG1haW5WaWV3KG1haW5QYWdlOiBIVE1MRWxlbWVudCwgc2V0dGluZ3NQYWdlOiBIVE1MRWxlbWVudCwgc3ViamVjdHNQYWdlOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1idG5cIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgY29uc3Qgc2V0dGluZ3NCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldHRpbmdzLWJ0blwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBjb25zdCBxdWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWl0LWJ0blwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuICAgIC8vIFNob3cgcXVlc3Rpb24gcGFnZVxuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIHN1YmplY3RzUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuXG4gICAgLy8gU2hvdyBzZXR0aW5ncyBwYWdlXG4gICAgc2V0dGluZ3NCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgc2V0dGluZ3NQYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfSk7XG5cbiAgICAvLyBIYW5kbGUgcXVpdHRpbmcgKGUuZy4sIHJlc2V0IGFwcCBzdGF0ZSBvciBzaG93IGFuIGV4aXQgbWVzc2FnZSlcbiAgICBxdWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vIEhhbmRsZSBxdWl0dGluZ1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7IC8vIEp1c3QgYXMgYW4gZXhhbXBsZVxuICAgIH0pO1xuXG5cbiAgICAvLyBGdW5jdGlvbiB0byBkaXNwbGF5IGEgcXVlc3Rpb24gZHluYW1pY2FsbHkgKGZvciBkZW1vIHB1cnBvc2VzKVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlRdWVzdGlvbigpIHtcbiAgICAgICAgY29uc3QgcXVlc3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXN0aW9uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgaWYgKHF1ZXN0aW9uQ29udGFpbmVyKSB7XG4gICAgICAgICAgICBxdWVzdGlvbkNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8cD5XaGF0IGlzIHRoZSBjYXBpdGFsIG9mIEZyYW5jZT88L3A+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPkEuIEJlcmxpbjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkIuIE1hZHJpZDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkMuIFBhcmlzPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+RC4gUm9tZTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICBgO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==