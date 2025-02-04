import { validateSession } from "../utils/sessionManager.js";
export function mainView(mainPage, settingsPage, subjectsPage) {
    const startBtn = document.getElementById("start-btn");
    const settingsBtn = document.getElementById("settings-btn");
    // Show question page
    startBtn.addEventListener("click", () => {
        validateSession();
        mainPage.classList.add("hidden");
        subjectsPage.classList.remove("hidden");
    });
    // Show settings page
    settingsBtn.addEventListener("click", () => {
        validateSession();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpblZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmlld3MvbWFpblZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTdELE1BQU0sVUFBVSxRQUFRLENBQUMsUUFBcUIsRUFBRSxZQUF5QixFQUFFLFlBQXlCO0lBQ2hHLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFzQixDQUFDO0lBQzNFLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFzQixDQUFDO0lBRWpGLHFCQUFxQjtJQUNyQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUNwQyxlQUFlLEVBQUUsQ0FBQztRQUNsQixRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztJQUVILHFCQUFxQjtJQUNyQixXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUN2QyxlQUFlLEVBQUUsQ0FBQztRQUNsQixRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztJQUdILGlFQUFpRTtJQUNqRSxTQUFTLGVBQWU7UUFDcEIsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDeEUsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1lBQ3BCLGlCQUFpQixDQUFDLFNBQVMsR0FBRzs7Ozs7Ozs7U0FRakMsQ0FBQztRQUNGLENBQUM7SUFDTCxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZhbGlkYXRlU2Vzc2lvbiB9IGZyb20gXCIuLi91dGlscy9zZXNzaW9uTWFuYWdlci5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFpblZpZXcobWFpblBhZ2U6IEhUTUxFbGVtZW50LCBzZXR0aW5nc1BhZ2U6IEhUTUxFbGVtZW50LCBzdWJqZWN0c1BhZ2U6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LWJ0blwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBjb25zdCBzZXR0aW5nc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0dGluZ3MtYnRuXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuXG4gICAgLy8gU2hvdyBxdWVzdGlvbiBwYWdlXG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdmFsaWRhdGVTZXNzaW9uKCk7XG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIHN1YmplY3RzUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuXG4gICAgLy8gU2hvdyBzZXR0aW5ncyBwYWdlXG4gICAgc2V0dGluZ3NCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdmFsaWRhdGVTZXNzaW9uKCk7XG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIHNldHRpbmdzUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuXG5cbiAgICAvLyBGdW5jdGlvbiB0byBkaXNwbGF5IGEgcXVlc3Rpb24gZHluYW1pY2FsbHkgKGZvciBkZW1vIHB1cnBvc2VzKVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlRdWVzdGlvbigpIHtcbiAgICAgICAgY29uc3QgcXVlc3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXN0aW9uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgaWYgKHF1ZXN0aW9uQ29udGFpbmVyKSB7XG4gICAgICAgICAgICBxdWVzdGlvbkNvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8cD5XaGF0IGlzIHRoZSBjYXBpdGFsIG9mIEZyYW5jZT88L3A+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPkEuIEJlcmxpbjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkIuIE1hZHJpZDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkMuIFBhcmlzPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+RC4gUm9tZTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICBgO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==