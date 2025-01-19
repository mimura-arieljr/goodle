export function settingsView(settingsPage, mainPage) {
    const settingsBtn = document.getElementById("settings-btn");
    const backBtn = document.getElementById("back-btn");
    // Show settings page
    settingsBtn.addEventListener("click", () => {
        mainPage.classList.add("hidden");
        settingsPage.classList.remove("hidden");
    });
    // Show main page again
    backBtn.addEventListener("click", () => {
        settingsPage.classList.add("hidden");
        mainPage.classList.remove("hidden");
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3NWaWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZpZXdzL3NldHRpbmdzVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsWUFBWSxDQUFDLFlBQXlCLEVBQUUsUUFBcUI7SUFDekUsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQXNCLENBQUM7SUFDakYsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXNCLENBQUM7SUFFekUscUJBQXFCO0lBQ3JCLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ3ZDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0lBRUgsdUJBQXVCO0lBQ3ZCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ25DLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBzZXR0aW5nc1ZpZXcoc2V0dGluZ3NQYWdlOiBIVE1MRWxlbWVudCwgbWFpblBhZ2U6IEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3Qgc2V0dGluZ3NCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldHRpbmdzLWJ0blwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrLWJ0blwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuICAgIC8vIFNob3cgc2V0dGluZ3MgcGFnZVxuICAgIHNldHRpbmdzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIHNldHRpbmdzUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuXG4gICAgLy8gU2hvdyBtYWluIHBhZ2UgYWdhaW5cbiAgICBiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHNldHRpbmdzUGFnZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuXG59XG4iXX0=