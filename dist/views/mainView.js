export function mainView(mainPage, settingsPage, subjectsPage) {
    const startBtn = document.getElementById("start-btn");
    const settingsBtn = document.getElementById("settings-btn");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpblZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmlld3MvbWFpblZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxVQUFVLFFBQVEsQ0FBQyxRQUFxQixFQUFFLFlBQXlCLEVBQUUsWUFBeUI7SUFDaEcsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQXNCLENBQUM7SUFDM0UsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQXNCLENBQUM7SUFFakYscUJBQXFCO0lBQ3JCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ3BDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0lBRUgscUJBQXFCO0lBQ3JCLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ3ZDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0lBR0gsaUVBQWlFO0lBQ2pFLFNBQVMsZUFBZTtRQUNwQixNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN4RSxJQUFJLGlCQUFpQixFQUFFLENBQUM7WUFDcEIsaUJBQWlCLENBQUMsU0FBUyxHQUFHOzs7Ozs7OztTQVFqQyxDQUFDO1FBQ0YsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIG1haW5WaWV3KG1haW5QYWdlOiBIVE1MRWxlbWVudCwgc2V0dGluZ3NQYWdlOiBIVE1MRWxlbWVudCwgc3ViamVjdHNQYWdlOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1idG5cIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgY29uc3Qgc2V0dGluZ3NCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldHRpbmdzLWJ0blwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuICAgIC8vIFNob3cgcXVlc3Rpb24gcGFnZVxuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIHN1YmplY3RzUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuXG4gICAgLy8gU2hvdyBzZXR0aW5ncyBwYWdlXG4gICAgc2V0dGluZ3NCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgc2V0dGluZ3NQYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfSk7XG5cblxuICAgIC8vIEZ1bmN0aW9uIHRvIGRpc3BsYXkgYSBxdWVzdGlvbiBkeW5hbWljYWxseSAoZm9yIGRlbW8gcHVycG9zZXMpXG4gICAgZnVuY3Rpb24gZGlzcGxheVF1ZXN0aW9uKCkge1xuICAgICAgICBjb25zdCBxdWVzdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVlc3Rpb24tY29udGFpbmVyXCIpO1xuICAgICAgICBpZiAocXVlc3Rpb25Db250YWluZXIpIHtcbiAgICAgICAgICAgIHF1ZXN0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxwPldoYXQgaXMgdGhlIGNhcGl0YWwgb2YgRnJhbmNlPzwvcD5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+QS4gQmVybGluPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Qi4gTWFkcmlkPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+Qy4gUGFyaXM8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5ELiBSb21lPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIGA7XG4gICAgICAgIH1cbiAgICB9XG59Il19